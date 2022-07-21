const{ User } = require('../../db');
const { Op } = require("sequelize");
const parseObject = require('../../Tools/ParseObject');
const path = "api/src/controllers/Users/Validate";

module.exports = {
    auth: async (username = "", password = "") => {
        try {
            return await User.findAll({ where: { username, password }})
            .then(result => {
                let user = parseObject(result);
                if(user.length){
                    return user[0].username.length && user[0].password.length ? user[0] : "No existe el usuario";
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
            const where = type === "insert" ? { where: { [Op.or]: [ { username }, { password } ] } } : { where: {  [Op.or]: [ { username }, { password } ], id: { [Op.ne]:id } }};
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
    },
    duplicate: async (name = "", type = "", id = 0) => {
        try {
            const where = type === "insert" ? { where: { name } } : { where: { name: { [Op.eq]:name }, id: { [Op.ne]:id } }};
            return await User.findAll(where)
            .then(result => {
                let user = parseObject(result);
                if(user.length) {
                    return user[0].name.length ? true : false;
                }
                return false;
            })
            .catch(error => {
                console.log(`Error: ${error}\nRuta: ${path}\nFunción: duplicate`);
                return false;
            });
        } catch (error) {
            console.log(`Error: ${error}\nRuta: ${path}\nFunción: duplicate`);
            return false;
        }
    }
}