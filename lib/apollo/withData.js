import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider, getDataFromTree } from 'react-apollo';
import Head from 'next/head';
import initApollo from './initApollo';

export default ComposedComponent => class WithData extends React.Component {
    static displayName = `WithData(${ComposedComponent.displayName})`

    static propTypes = {
      serverState: PropTypes.object.isRequired, // eslint-disable-line
    }

    constructor(props) {
      super(props);
      // Note: Apollo should never be used on the server side beyond the initial
      // render within `getInitialProps()` above (since the entire prop tree
      // will be initialized there), meaning the below will only ever be
      // executed on the client.
      const { serverState } = this.props;
      this.apollo = initApollo(serverState);
    }

    static async getInitialProps(ctx) {
      let serverState = {};

      // Evaluate the composed component's getInitialProps()
      let composedInitialProps = {};
      if (ComposedComponent.getInitialProps) {
        composedInitialProps = await ComposedComponent.getInitialProps(ctx);
      }

      // Setup a server-side one-time-use apollo client for initial props and
      // rendering (on server)
      const apollo = initApollo({}, ctx);

      // Provide the `url` prop data in case a GraphQL query uses it
      const url = {
        query: ctx.query,
        asPath: ctx.asPath,
        pathname: ctx.pathname,
      };
      try {
        // Run all GraphQL queries
        await getDataFromTree(
          (
            <ComposedComponent ctx={ctx} url={url} {...composedInitialProps} />
          ), {
            router: {
              asPath: ctx.asPath,
              pathname: ctx.pathname,
              query: ctx.query,
            },
            client: apollo,
          },
        );
      } catch (error) {
          console.error('FATAL SSR CRASH', error); // eslint-disable-line
        // Prevent Apollo Client GraphQL errors from crashing SSR.
        // Handle them in components via the data.error prop:
        // http://dev.apollodata.com/react/api-queries.html#graphql-query-data-error
      }

      if (!process.browser) {
        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind();
      }

      serverState = apollo.cache.extract();

      return {
        serverState,
        ...composedInitialProps,
      };
    }

    render() {
      return (
        <ApolloProvider client={this.apollo}>
          <ComposedComponent {...this.props} />
        </ApolloProvider>
      );
    }
};
