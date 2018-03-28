const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
require('dotenv').config();

const {
  ANALYZE,
  NODE_ENV,
  TRACKING_CODE,
  GRAPHQL_ENDPOINT,
  DEBUG,
  NOW_URL,
} = process.env;

module.exports = {
  publicRuntimeConfig: { // Will be available on both server and client
    ANALYZE,
    NODE_ENV,
    TRACKING_CODE,
    GRAPHQL_ENDPOINT,
    DEBUG,
    NOW_URL,
  },
  webpack: (config) => {
    if (ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true,
      }));
    }
    return config;
  },
};
