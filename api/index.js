const server = require('./src/server.js');
const { conn } = require('./src/db.js');

conn.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('cuchando'); 
  });
});