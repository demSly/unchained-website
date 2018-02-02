import React from 'react';
import cookie from 'cookie';
import moment from 'moment';
import PropTypes from 'prop-types';
import { ApolloProvider, getDataFromTree } from 'react-apollo';
import { onTokenChange } from 'meteor-apollo-accounts';
import Head from 'next/head';
import { resolveLocale, resolveCountry } from '../locale';
import initApollo from '../initApollo';

function parseCookies(ctx = {}, options = {}) {
  return cookie.parse(
    ctx.req && ctx.req.headers.cookie // eslint-disable-line
      ? ctx.req.headers.cookie
      : (process.browser ? document.cookie : ''),
    options,
  );
}

// Gets the display name of a JSX component for dev tools
function getComponentDisplayName(Component) {
  return Component.displayName || Component.name || 'Unknown';
}

export default ComposedComponent => class WithData extends React.Component {
    static displayName = `WithData(${getComponentDisplayName(ComposedComponent)})`
    static propTypes = {
      serverState: PropTypes.object.isRequired, // eslint-disable-line
    }

    static async getInitialProps(ctx) {
      // Initial serverState with apollo (empty)
      const serverState = {
        apollo: {
          data: {},
        },
        headers: {},
      };

      if (!process.browser) {
        const locale = resolveLocale(ctx);
        const country = resolveCountry(ctx);
        if (locale) serverState.headers['accept-language'] = locale;
        if (country) serverState.headers['x-shop-country'] = country;
      }

      // Evaluate the composed component's getInitialProps()
      let composedInitialProps = {};
      if (ComposedComponent.getInitialProps) {
        composedInitialProps = await ComposedComponent.getInitialProps(ctx);
      }

      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      if (!process.browser) {
        const apollo = initApollo({}, {
          getToken: () => parseCookies(ctx).token,
          host: ctx.req.headers.host,
          ...serverState.headers,
        });
        // Provide the `url` prop data in case a GraphQL query uses it
        const url = { query: ctx.query, pathname: ctx.pathname };
        try {
          // Run all GraphQL queries
          const app = (
            <ApolloProvider client={apollo}>
              <ComposedComponent url={url} {...composedInitialProps} />
            </ApolloProvider>
          );
          await getDataFromTree(app);
        } catch (error) {
          console.error('FATAL SSR CRASH', error); // eslint-disable-line
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // http://dev.apollodata.com/react/api-queries.html#graphql-query-data-error
        }
        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind();

        // Extract query data from the Apollo store
        serverState.apollo.data = apollo.cache.extract();
      }

      return {
        serverState,
        ...composedInitialProps,
      };
    }

    constructor(props) {
      super(props);
      const { apollo: { data }, headers } = this.props.serverState;
      this.apollo = initApollo(data, {
        getToken: () => parseCookies().token,
        ...headers,
      });
      onTokenChange(({ token, tokenExpires }) => {
        if (!token || !tokenExpires) {
          document.cookie = cookie.serialize('token', '', {
            maxAge: -1, // Expire the cookie immediately
          });
          this.apollo.resetStore();
          return;
        }
        const maxAge = moment().diff(new Date(tokenExpires), 'seconds') * -1;
        console.debug('new token, expiring: ', maxAge); // eslint-disable-line
        document.cookie = cookie.serialize('token', token, { maxAge });
        this.apollo.resetStore();
      });
    }

    render() {
      return (
        <ApolloProvider client={this.apollo}>
          <ComposedComponent {...this.props} />
        </ApolloProvider>
      );
    }
};
