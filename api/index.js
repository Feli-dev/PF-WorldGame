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

db.sync({ force: true }).then(() => {
  server.listen(3001, () => {
    console.log('cuchando'); 
  });
});