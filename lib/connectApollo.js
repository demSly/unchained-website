import cookie from 'cookie';
import moment from 'moment';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import getConfig from 'next/config';
import { onTokenChange } from './accounts';
import { resolveLocale, getLocale } from './locale';
import { setApolloClientFactory } from './apollo/initApollo';
import withData from './apollo/withData';
import schema from '../schema.json';

const { publicRuntimeConfig } = getConfig();

function parseCookies(ctx = {}, options = {}) {
  if (process.browser) {
    return cookie.parse(document.cookie, options);
  } if (ctx.req && ctx.req.headers.cookie) {
    return cookie.parse(ctx.req.headers.cookie, options);
  }
  return {};
}

const logger = console;

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: schema.data,
});

const cache = new InMemoryCache({
  fragmentMatcher,
  dataIdFromObject: (result) => {
    if (result._id && result.__typename) { // eslint-disable-line
      return `${result.__typename}:${result._id}`; // eslint-disable-line
    } else if (result.id && result.__typename) { // eslint-disable-line
      return `${result.__typename}:${result.id}`; // eslint-disable-line
    }
    return null;
  },
});

const resolveEndpointUrl = (requestHost) => {
  const isAbsoluteURI = publicRuntimeConfig.GRAPHQL_ENDPOINT.indexOf('://') !== -1;

  // if this is client side or it already is a absolute uri,
  // we don't need to stick together anything
  if (isAbsoluteURI || !requestHost) return publicRuntimeConfig.GRAPHQL_ENDPOINT;
  const method = (publicRuntimeConfig.NODE_ENV !== 'production') ? 'http' : 'https';
  const serverSideFallbackRootURL = publicRuntimeConfig.NOW_URL || `${method}://${requestHost}`;
  return `${serverSideFallbackRootURL}${publicRuntimeConfig.GRAPHQL_ENDPOINT}`;
};

setApolloClientFactory((initialState, ctx) => {
  const httpLink = createHttpLink({
    uri: resolveEndpointUrl(ctx && ctx.req && ctx.req.headers.host),
    credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
  });

  const authLink = setContext((_, { headers }) => {
    const additionalHeaders = {};

    if (ctx) {
      resolveLocale(ctx);
    }

    const { token, country } = parseCookies(ctx);
    const locale = getLocale();

    if (token) additionalHeaders.authorization = `Bearer ${token}`;
    if (country) additionalHeaders['x-shop-country'] = country;
    if (locale) additionalHeaders['accept-language'] = locale;

    const context = {
      headers: {
        ...headers,
        ...additionalHeaders,
      },
    };
    if (publicRuntimeConfig.DEBUG) {
      logger.log('apollo link context', context);
    }
    return context;
  });

  const apolloClient = new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: authLink.concat(httpLink),
    cache: cache.restore(initialState),
  });

  onTokenChange(({ token, tokenExpires }) => {
    if (!token || !tokenExpires) {
      document.cookie = cookie.serialize('token', '', {
        path: '/',
        maxAge: -1, // Expire the cookie immediately
      });
      apolloClient.resetStore();
      return;
    }
    const maxAge = moment().diff(new Date(tokenExpires), 'seconds') * -1;
    console.debug('new token, expiring: ', maxAge); // eslint-disable-line
    document.cookie = cookie.serialize('token', token, {
      maxAge,
      path: '/',
    });
    apolloClient.resetStore();
  });

  return apolloClient;
});

export default withData;
