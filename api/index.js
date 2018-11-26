require('dotenv').config();
const { ApolloServer } = require('apollo-server-micro');
const locale = require('locale');
const { Z_DEFAULT_COMPRESSION } = require('zlib');
const compress = require('micro-compress');
const cors = require('micro-cors')();

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

const createApolloServer = async () => new ApolloServer({
  schema: await mergedSchema(),
  introspection: true,
  cors: false,
  context: ({ req }) => {
    const language = req && req.headers && req.headers['accept-language'];
    const normalizedLocale = new locale.Locale(language);
    return {
      api: new CockpitConnector(normalizedLocale.language),
      forwardHeaders: mapForwardHeaders(req),
    };
  },
});

const apolloServerPromise = createApolloServer();

module.exports = async (...args) => {
  const apolloServer = await apolloServerPromise;
  return compress({ level: Z_DEFAULT_COMPRESSION }, cors(apolloServer.createHandler()))(...args);
};
