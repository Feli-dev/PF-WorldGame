const{ Game, User } = require('../../db');
const { averageScore } = require('../../Tools/AverageScore');
const { showUsers } = require('../../Tools/filterShow');
const { Op } = require("sequelize");
const parseObject = require('../../Tools/ParseObject');
const path = "api/src/controllers/Users/Validate";

module.exports = {
    auth: async (username = "", password = "") => {
        try {
            return await User.findAll({ where: { username, password }, include: Game,  order: [['id','ASC']]})
            .then(result => {
                let user = parseObject(result);
                if(user.length){
                    if(user[0].username.length && user[0].password.length){
                        const stats = averageScore(user[0].games);
                        return showUsers(user[0], stats);
                    }
                }
                return "No existe el usuario";
            })
            .catch(error => {
                console.log(`Error: ${error}\nRuta: ${path}\nFunción: auth`);
                return "Error al autenticar el usuario";
            });
        } catch (error) {
            console.log(`Error: ${error}\nRuta: ${path}\nFunción: auth`);
            return "Error al autenticar el usuario";
        }
    },
    session: async (username = "", password = "", type = "", id = 0) => {
        try {
            const where = type === "insert" ? { where: { [Op.and]: [ { username }, { password } ] } } : { where: {  [Op.and]: [ { username }, { password } ], id: { [Op.ne]:id } }};
            return await User.findAll(where)
            .then(result => {
                let user = parseObject(result);
                if(user.length){
                    return user[0].username.length && user[0].password.length ? true : false;
                }
                return false;
            })
            .catch(error => {
                console.log(`Error: ${error}\nRuta: ${path}\nFunción: session`);
                return false;
            });
        } catch (error) {
            console.log(`Error: ${error}\nRuta: ${path}\nFunción: session`);
            return false;
        }
    }
}