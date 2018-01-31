require('dotenv').config();
const micro = require('micro');
const { parse } = require('url');
const next = require('next');
const routes = require('./routes');
const api = require('./api');

const logger = console;

const {
  PORT,
  NODE_ENV,
} = process.env;

const port = parseInt(PORT, 10) || 3000;
const dev = NODE_ENV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app);

const server = micro(async (req, res) => {
  if (req.headers && req.headers['x-forwarded-proto'] === 'http') {
    logger.log(`301 redirect to https://${req.headers.host}${req.url}`);
    res.statusCode = 301;
    res.setHeader('Location', `https://${req.headers.host}${req.url}`);
    return res.end();
  }
  const parsedUrl = parse(req.url, true);
  const { pathname } = parsedUrl;
  if (pathname === '/graphql' || pathname === '/graphiql') {
    return api(req, res);
  }
  return handle(req, res, parsedUrl);
});

app.prepare().then(() => {
  server.listen(port, (err) => {
    if (err) throw err;
    logger.log(`> Ready on http://localhost:${port}`);
  });
});
