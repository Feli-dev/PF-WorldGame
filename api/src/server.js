const express = require('express');
const routes = require('./routes/index.js');
require('./db.js');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require("cors");

const server = express();
server.use(express.json());
server.name = 'API';

server.use(cors())
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*"); 
  res.header('Access-Control-Allow-Credentials', 'false'); 
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

server.use('/', routes);

server.use((err, req, res, next) => { 
  console.error(err);
  res.status(err.status).send(err.message);
});

module.exports = server;