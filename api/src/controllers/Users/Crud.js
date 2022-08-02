const { averageScore } = require('../../Tools/AverageScore');
const { showUsers } = require('../../Tools/filterShow');
const { Game, User, Friend, Review, Payment  } = require('../../db');
const parseObject = require('../../Tools/ParseObject');
const path = "api/src/controllers/Users/Crud.js";

module.exports = {
    select: async (id = 0, country = "", premium = false, state = true, authorization = "User") => {
        try {
            const include = [ Game, Friend, Review, Payment ];
            const order = [['id','ASC']];
            const where = id > 0 ? { id } : { country, premium, state, authorization };
            if(country === "all") delete where.country;
            if(premium === "all") delete where.premium;
            if(state === "all") delete where.state;
            if(authorization === "all") delete where.authorization;
            const obj = { where, include, order};
            if(Object.entries(where).length === 0) delete obj.where;
            return await User.findAll(obj)
            .then(result => {
                const user = parseObject(result);
                if(user.length) {
                    if(id > 0){
                        const stats = averageScore(user[0].games);
                        return { Request: showUsers(user[0], stats) || "No hay usuarios" };
                    }
                    const allUsers = user.map(e => {
                        const stats = averageScore(e.games);
                        return showUsers(e, stats);
                    });
                    return { Request: allUsers.length ? allUsers : "No hay usuarios" };
                };
                return { Request: "No hay usuarios" };
            })
            .catch(error => {
                return { Error: error, Request: "Fallo al mostrar los usuarios", Path: path, Function: "select" };
            });
        } catch (error) {
            return { Error: error, Request: "Fallo la función select", Path: path, Function: "select" };
        }
    },
    insert: async (name = "",username = "", password = "", country = "", email = "", points = 0, premium = false, state = true, authorization = "User", avatar = "", connect = false) => {
        try {
            return await User.create({ name, username, password, country, email, points, premium, state, authorization, avatar, connect})
            .then(result => {
                let user = parseObject(result);
                return { Request: `El usuario ${user.username} creado exitosamente` };
            })
            .catch(error => {
                return { Error: error, Request: "Fallo al crear los usuarios", Path: path, Function: "insert" };
            });
        } catch (error) {
            return { Error: error, Request: "Fallo la función insert", Path: path, Function: "insert" };
        }
    },
    update: async (id = 0, field = {}) => {
        try {
            return await User.update(field,{ where: { id } } )
            .then(result => {
                parseObject(result);
                return { Request: `El usuario se actualizado exitosamente` };
            })
            .catch(error => {
                return { Error: error, Request: "Fallo al actualizar los usuarios", Path: path, Function: "update" };
            });
        } catch (error) {
            return { Error: error, Request: "Fallo la función update", Path: path, Function: "update" };
        }
    },
    online: async (id = 0, connect = true) => {
        try {
            return await User.update({ connect },{ where: { id } } )
            .then(result => {
                parseObject(result);
                return connect ? { Request: "En linea"} : { Request: "Desconectado" };
            })
            .catch(error => {
                return { Error: error, Request: "Fallo el estado online", Path: path, Function: "online" };
            });
        } catch (error) {
            return { Error: error, Request: "Fallo la función online", Path: path, Function: "online" };
        }
    },
    stateUser: async (id = 0, state = true) => {
        try {
            return await User.update({ state },{ where: { id } } )
            .then(result => {
                parseObject(result);
                return state ? { Request: "El usuario se habilito"} : { Request: "El usuario se deshabilito" };
            })
            .catch(error => {
                return { Error: error, Request: "Fallo al cambiar el estado del usuario", Path: path, Function: "stateUser" };
            });
        } catch (error) {
            return { Error: error, Request: "Fallo la función stateUser", Path: path, Function: "stateUser" };
        }
    },
    statePass: async (id = 0, password = "") => {
        try {
            return await User.update({ password },{ where: { id } } )
            .then(result => {
                parseObject(result);
                return { Request: "La contraseña se modifico" };
            })
            .catch(error => {
                return { Error: error, Request: "Fallo al cambiar la contraseña del usuario", Path: path, Function: "statePass" };
            });
        } catch (error) {
            return { Error: error, Request: "Fallo la función statePass", Path: path, Function: "statePass" };
        }
    },
    remove: async(id = 0) => {
        try {
            return await User.destroy({ where: { id } })
            .then(result => {
                parseObject(result);
                return { Request: "El usuario se elimino definitivamente" };
            })
            .catch(error => {
                return { Error: error, Request: "Fallo al eliminar al usuario", Path: path, Function: "remove" };
            });
        } catch (error) {
            return { Error: error, Request: "Fallo la función remove", Path: path, Function: "remove" };
        }
    },
    ranking: async (total = 10) => {
        try {
            return await User.findAll({ include: Game, order: [['points','DESC']], limit: total.toString() })
            .then(result => {
                let user = parseObject(result);
                if(user.length) {
                    const allUsers = user.map(e => {
                        const stats = averageScore(e.games);
                        return showUsers(e, stats);
                    });
                    return { Request: allUsers.length ? allUsers : "No hay usuarios" };
                };
                return { Request: "No hay usuarios" };
            })
            .catch(error => {
                return { Error: error, Request: "Fallo al mostrar el ranking", Path: path, Function: "ranking" };
            });
        } catch (error) {
            return { Error: error, Request: "Fallo la función ranking", Path: path, Function: "ranking" };
        }
    }
}