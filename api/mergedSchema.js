const {
  makeExecutableSchema, makeRemoteExecutableSchema, mergeSchemas, introspectSchema,
} = require('graphql-tools');
const fetch = require('isomorphic-unfetch');
const { HttpLink } = require('apollo-link-http');
const { setContext } = require('apollo-link-context');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const {
  SHOP_GRAPHQL_ENDPOINT,
} = process.env;

console.log(`Connecting to Engine: ${SHOP_GRAPHQL_ENDPOINT}`);  // eslint-disable-line
const http = new HttpLink({ uri: SHOP_GRAPHQL_ENDPOINT, fetch });

const link = setContext((request, previousContext) => {
  const { graphqlContext: { forwardHeaders } = {} } = previousContext;
  return {
    headers: forwardHeaders || {},
  };
}).concat(http);

module.exports = async () => { // eslint-disable-line
  const localSchema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  try {
    const unchainedSchema = makeRemoteExecutableSchema({
      schema: await introspectSchema(link),
      link,
    });

    return mergeSchemas({
      schemas: [localSchema, unchainedSchema],
    });
  } catch (e) {
    console.error('Could not load Unchained Engine Schema, abort here so the docker container restarts...');
    process.exit(500);
  }
};
