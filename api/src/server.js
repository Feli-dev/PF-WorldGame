const express = require('express');
const routes = require('./routes/index.js');
require('./db.js');
const server = express();
server.use(express.json());

server.name = 'API';

server.use('/', routes);

server.use((err, req, res, next) => { 
  console.error(err);
  res.status(err.status).send(err.message);
});

module.exports = server;