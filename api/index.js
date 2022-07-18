const server = require('./src/server.js');
const { db } = require('./src/db.js');

db.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('cuchando'); 
  });
});