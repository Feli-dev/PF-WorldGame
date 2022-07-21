require('dotenv').config();
const path = require('path');
const fs = require('fs');
const { Sequelize } = require('sequelize');
const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env;
const usuario = require('./models/User');


// console.log('11',DB_NAME, process.env)
let sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize({
        database: DB_NAME,
        dialect: "postgres",
        host: DB_HOST,
        port: 5432,
        username: DB_USER,
        password: DB_PASSWORD,
        pool: {
          max: 3,
          min: 1,
          idle: 10000,
        },
        dialectOptions: {
          ssl: {
            require: true,
            // Ref.: https://github.com/brianc/node-postgres/issues/2009
            rejectUnauthorized: false,
          },
          keepAlive: true,
        },
        ssl: true,
      })
    : new Sequelize(
        `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
        { logging: false, native: false }
      );

// const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
//   logging: false, 
//   native: false, 
// });

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
const { User, Game } = sequelize.models;
console.log(sequelize.models)
//relaciones
User.belongsToMany(User,{ as: 'amigo', through: 'friend'});
// User.belongsToMany(User,{ as: 'f', through: 'friends'});
User.hasMany(Game);
Game.belongsTo(User);

module.exports = {
    ...sequelize.models,
    db: sequelize,      
  };
  