const routes = require('next-routes')();

routes
  .add('product', '/product/:name')
  .add('job', '/job/:slug');

module.exports = routes;
