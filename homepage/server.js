const express = require('express');
const server = express();
const proxy = require('http-proxy-middleware');

server.set('view engine', 'ejs');

const createProxy = (path, target) =>
  server.use(path, proxy({ target, changeOrigin: true, pathRewrite: {[`^${path}`]: ''} }));

createProxy('/header', 'http://localhost:8080');
createProxy('/products-list', 'http://localhost:8081');
createProxy('/cart', 'http://localhost:8082');

server.get('/', (req, res) => res.render('index'));

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Homage listening on port ${port}`);
});
