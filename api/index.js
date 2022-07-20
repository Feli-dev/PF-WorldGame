const server = require('./src/server.js');
const { db } = require('./src/db.js');
const path = "api/index.js"
const User = require('./src/controllers/Users/Users');
const { bitHash } = require('./src/db');

const user = new User();

async function admin(){
  try {
    const passEncrypt = bitHash.encrypt("admin");
    return await user.create("sebas", "admin", passEncrypt.toString(), "peru", true, true)
    .then(result => console.log("Administrador creado"))
    .catch(error => console.log(`Error: ${error}\nRuta: ${path}\nFunción: admin`));
  } catch (error) {
    return console.log(`Error: ${error}\nRuta: ${path}\nFunción: admin`);
  }
}

db.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    admin();
    console.log('escuchando');
  });
});