const { Game, User } = require('../../db');
const { averageScore } = require('../../Tools/AverageScore');
const { showUsers } = require('../../Tools/filterShow');
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
                        return { Request: showUsers(user[0], stats) || "No se inicio sessión" };
                    }
                }
                return { Request: "No se inicio sessión" };
            })
            .catch(error => {
                return { Error: error, Request: "Fallo el inicio de sessión", Path: path, Function: "auth" };
            });
        } catch (error) {
            return { Error: error, Request: "Fallo la función auth", Path: path, Function: "auth" };
        }
    },
    authEmail: async (email = "") => {
        try {
            return await User.findAll({ where: { email } })
            .then(result => {
                let user = parseObject(result);
                if(user.length){
                    if(user[0].email.length){
                        return { Value: user[0].id };
                    }
                    return { Value: 0, Request: "No se encontro el email" };
                }
                return { Value: 0, Request: "No se encontro el email" };
            })
            .catch(error => {
                return { Error: error, Value: 0, Request: "Fallo la busqueda del email", Path: path, Function: "authEmail" };
            });
        } catch (error) {
            return { Error: error, Value:0, Request: "Fallo la función authEmail", Path: path, Function: "authEmail" };
        }
    },
    session: async (id = 0) => {
        try {
            return await User.findAll({ where: { id } })
            .then(result => {
                let user = parseObject(result);
                return user.length ? { Value: user[0] } : { Value: false, Request: "No se encontro al usuario" };
            })
            .catch(error => {
                return { Error: error, Value: false, Request: "Fallo la busqueda de sessión", Path: path, Function: "session" };
            });
        } catch (error) {
            return { Error: error, Value: false, Request: "Fallo la función session", Path: path, Function: "session" };
        }
    }
}