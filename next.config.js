/* eslint-disable */
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
require('dotenv').config()
const webpack = require('webpack');

const {
  ANALYZE
} = process.env;

module.exports = {
  webpack: (config) => {
    if (ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true
      }))
    }
    return config;
  },
};
