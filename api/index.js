//  ---___--_-_-__       _oo0oo_
//  .   °°---___-´'´´  o).8.8.8.(o
//   .                  88" 0 "88
//    .             *   (| *_* |)
//     .          *     0\ ... /0
//      .       *  O))__/: ___ :\__((O
//       .    *    ).' \\| .*. |// '.(
//        . *     '/ \||||; : ;||||/ \'
//        *.      / -|\|// -:- \\|/|- \
//       ***.    | . |/\\\  -  ///\| . |
//      * ***.   | \_|  ''\---/''  |_/ |
//     * **  *.  \  .-\_<>_'-'_<>_/-. /
//    * * *   *.__'. .'  /--.--\  '. .'___
//   *   **  ."" '< `.___\_<|>_/___.' >' "".
//  * *   *| | :```-.\`.;`\ _ /´;.´/.-´´´: | |
// *   *  *\  \ `_.   \_ __\ /__ _/   .-´ /  /
//  *  =====`-.____`.___ \_____/___.-´___.-´=====
//   *                   `=---=´
//    *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/server.js');
const { db } = require('./src/db.js');
const path = "api/index.js"
const user = require('./src/controllers/Users/Users');
const ncrypt = require("ncrypt-js");
const {getCountries} = require('./src/controllers/country')

const ncryptObject = new ncrypt('key');

async function admin(){
  try {
    const passEncrypt = ncryptObject.encrypt("admin");
    return await user.create("sebas", "admin", passEncrypt.toString(), "Perú", "sebas.goyas@gmail.com", 0, true, true, "Pro-Admin", "https://res.cloudinary.com/dunhnh8mv/image/upload/v1659972908/nnm2jznivdalyzycj3rb.png", false)
    .then(() => console.log("Administrador creado"))
    .catch(error => console.log(`Error: ${error}\nRuta: ${path}\nFunción: admin`));
  } catch (error) {
    return console.log(`Error: ${error}\nRuta: ${path}\nFunción: admin`);
  }
}

db.sync({ force: true }).then(() => {
  getCountries()
  server.listen(3001, () => {
    admin();
    console.log('escuchando');
  });
});