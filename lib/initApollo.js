import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import fetch from 'isomorphic-unfetch';
import env from './env';
import introspectionQueryResultData from '../introspection.json';

const logger = console;
let apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch;
}

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
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

function create(initialState, { getToken, ...additionalHeaders }) {
  const httpLink = createHttpLink({
    uri: env.GRAPHQL_ENDPOINT, // Server URL (must be absolute)
    credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
  });

  const authLink = setContext((_, { headers }) => {
    const token = getToken();
    const context = {
      headers: {
        ...headers,
        authorization: token ? `Bearer ${token}` : null,
        ...additionalHeaders,
      },
    };
    if (env.DEBUG) {
      logger.log('apollo link context', context);
    }
    return context;
  });

  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    link: authLink.concat(httpLink),
    cache: cache.restore(initialState),
  });
}

export default function initApollo(initialState, options) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState, options);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState, options);
  }

  return apolloClient;
}
