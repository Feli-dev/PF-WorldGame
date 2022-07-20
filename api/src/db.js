require('dotenv').config();
const path = require('path');
const fs = require('fs');
const { Sequelize } = require('sequelize');
const BitHash = require('./Tools/BitHash');
const {DB_USER, DB_PASSWORD, DB_HOST} = process.env;

const bitHash = new BitHash();

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/worldgame`, {
  logging: false, 
  native: false, 
});

const basename = path.basename(__filename);
const modelDefiners = [];
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

modelDefiners.forEach(model => model(sequelize));
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

module.exports = {
    ...sequelize.models,
    db: sequelize,
    bitHash
  };