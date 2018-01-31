const routes = require('next-routes')();

routes
  .add('product', '/product/:name');

module.exports = routes;
