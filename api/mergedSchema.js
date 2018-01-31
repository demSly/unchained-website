const {
  makeExecutableSchema, makeRemoteExecutableSchema, mergeSchemas, introspectSchema,
} = require('graphql-tools');
const { createApolloFetch } = require('apollo-fetch');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const NodeCache = require('node-cache');

const {
  SHOP_GRAPHQL_ENDPOINT,
  NODE_ENV,
} = process.env;

console.log(`Connecting to Engine: ${SHOP_GRAPHQL_ENDPOINT}`);  // eslint-disable-line
const unchainedFetch = createApolloFetch({ uri: SHOP_GRAPHQL_ENDPOINT });
unchainedFetch.use(({ request, options }, next) => {
  if (request.context && request.context.graphqlContext) {
    const { forwardHeaders } = request.context.graphqlContext;
    if (!options.headers) options.headers = {}; // eslint-disable-line
    options.headers = { // eslint-disable-line
      ...options.headers,
      ...forwardHeaders,
    };
  }
  next();
});

// set staleness of cockpit cache for dev and prod
const schemaCache = new NodeCache((NODE_ENV === 'production') ?
  { stdTTL: 180, checkperiod: 10 } : // 4 minutes lag in production
  { stdTTL: 10, checkperiod: 2 }); // 7 seconds lag in development

const updateSchema = async () => {
  try {
    const schema = await introspectSchema(unchainedFetch);
    schemaCache.set('schema', schema);
    schemaCache.set('schemaFallback', schema, 0);
    console.log('-> Remote Schema Merger: Reloaded remote schema');  // eslint-disable-line
  } catch (e) {
    console.log('-> Remote Schema Merger: Remote schema not accessible (Unchained Shop down?)');  // eslint-disable-line
    if (!schemaCache.get('schemaFallback')) {
      schemaCache.set('schema', null, 10); // reset expiry
      schemaCache.set('schemaFallback', null, 0);
      console.log('-> Remote Schema Merger: Cache reset (waiting 10 seconds to retry)');  // eslint-disable-line
    }
  }
};
updateSchema();

schemaCache.on('expired', () => {
  updateSchema();
});

module.exports = () => {
  const fetcher = ({
    query, variables, operationName, context,
  }) => unchainedFetch({
    query, variables, operationName, context,
  });
  const localSchema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });
  const schema = schemaCache.get('schema') || schemaCache.get('schemaFallback');
  const unchainedSchema = makeRemoteExecutableSchema({
    schema,
    fetcher,
  });
  return mergeSchemas({
    schemas: [localSchema, unchainedSchema],
  });
};
