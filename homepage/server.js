const express = require('express');
const server = express();
const request = require('request');

server.set('view engine', 'ejs');

server.get('/', (req, res) => res.render('index'));

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Homage listening on port ${port}`);
});
