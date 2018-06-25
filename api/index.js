require('dotenv').config();
const { microGraphiql, microGraphql } = require('apollo-server-micro');
const { send } = require('micro');
const microrouter = require('microrouter');
const locale = require('locale');
const { Z_DEFAULT_COMPRESSION } = require('zlib');
const compress = require('micro-compress');

// backend connector
const CockpitConnector = require('./cockpitConnector');
const countryFromIP = require('./countryFromIP');
const mergedSchema = require('./mergedSchema');

const mapForwardHeaders = ({ headers, ...req }) => {
  const ip = headers['x-real-ip']
    || headers['x-forwarded-for']
    || req.connection.remoteAddress
    || req.socket.remoteAddress
    || req.connection.socket.remoteAddress;

  const forwardHeaders = {
    'accept-language': headers['accept-language'],
    authorization: headers.authorization,
    'x-real-ip': ip,
    'x-shop-country': headers['x-shop-country']
      || countryFromIP(ip),
  };
  return forwardHeaders;
};

const graphqlHandler = (context, schema) => microGraphql({ schema, context });
const graphiqlHandler = microGraphiql({ endpointURL: '/graphql' });
const corsEnhancer = (res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Accept-Language, X-Shop-Country, Authorization');
};

module.exports = compress({ level: Z_DEFAULT_COMPRESSION }, microrouter.router(
  microrouter.get('/graphql', async (req, res) => {
    corsEnhancer(res);
    const normalizedLocale = new locale.Locale(req.headers['accept-language']);
    return graphqlHandler({
      api: new CockpitConnector(normalizedLocale.language),
      forwardHeaders: mapForwardHeaders(req),
    }, mergedSchema())(req, res);
  }),
  microrouter.post('/graphql', async (req, res) => {
    corsEnhancer(res);
    const normalizedLocale = new locale.Locale(req.headers['accept-language']);
    return graphqlHandler({
      api: new CockpitConnector(normalizedLocale.language),
      forwardHeaders: mapForwardHeaders(req),
    }, mergedSchema())(req, res);
  }),
  microrouter.options('/graphql', (req, res) => {
    corsEnhancer(res);
    res.end();
  }),
  microrouter.get('/graphiql', graphiqlHandler),
  (req, res) => send(res, 404, 'not found'),
));
