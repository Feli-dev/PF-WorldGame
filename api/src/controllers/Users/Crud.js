
const { averageScore } = require('../../Tools/AverageScore');
const { Game, User } = require('../../db');
const parseObject = require('../../Tools/ParseObject');
const path = "api/src/controllers/Users/Crud.js";

function show({ id, name, username, password, country, email, points, state, authorization, games }, averageScore){
    return { id, name, username, password, country, email, points, state, authorization, games, averageScore  };
}

module.exports = {
    select: async (id = 0) => {
        try {
            const where = id === 0 ? { include: Game, order: [['id','ASC']] } : { where:{ id }, include: Game,  order: [['id','ASC']] };
            return await await User.findAll(where)
            .then(result => {
                let user = parseObject(result);
                if(user.length) {
                    if(id > 0){
                        const _averageScore = averageScore(user[0].games);
                        return show(user[0], _averageScore) || "No hay usuarios";
                    }
                    return user.map(e => {
                        const _averageScore = averageScore(e.games);
                        return show(e, _averageScore) || "No hay usuarios";
                    });
                };
                return "No hay usuarios";
            })
            .catch(error => {
                console.log(`Error: ${error}\nRuta: ${path}\nFunción: select`);
                return "Error al mostrar usuarios";
            });
        } catch (error) {
            console.log(`Error: ${error}\nRuta: ${path}\nFunción: select`);
            return "Error al mostrar usuarios";
        }
    },
    insert: async (name = "",username = "", password = "", country = "", email = "", points = 0, state = true, authorization = false) => {
        try {
            return await User.create({ name, username, password, country, email, points, state, authorization })
            .then(result => {
                let user = parseObject(result);
                return `El usuario ${user.name} creado exitosamente`;
            })
            .catch(error => {
                console.log(`Error: ${error}\nRuta: ${path}\nFunción: insert`);
                return "El usuario no se creo";
            });
        } catch (error) {
            console.log(`Error: ${error}\nRuta: ${path}\nFunción: insert`);
            return "El usuario no se creo";
        }
    },
    update: async (id = 0, name = "",username = "", password = "", country = "", email = "", points = 0) => {
        try {
            return await User.update({ name, username, password, country, email, points },{ where: { id } } )
            .then(result => {
                parseObject(result);
                return `El usuario se actualizado exitosamente`;
            })
            .catch(error => {
                console.log(`Error: ${error}\nRuta: ${path}\nFunción: update`);
                return "El usuario no se actualizo";
            });
        } catch (error) {
            console.log(`Error: ${error}\nRuta: ${path}\nFunción: update`);
            return "El usuario no se actualizo";
        }
    },
    stateUser: async (id = 0, state = true) => {
        try {
            return await User.update({ state },{ where: { id } } )
            .then(result => {
                parseObject(result);
                return state ? "El usuario se habilito" : "El usuario se deshabilito";
            })
            .catch(error => {
                console.log(`Error: ${error}\nRuta: ${path}\nFunción: update`);
                return "Error al deshabilitar al usuario";
            });
        } catch (error) {
            console.log(`Error: ${error}\nRuta: ${path}\nFunción: update`);
            return "Error al deshabilitar al usuario";
        }
    },
    remove: async(id = 0) => {
        try {
            return await User.destroy({ where: { id } })
            .then(result => {
                parseObject(result);
                return "El usuario se elimino definitivamente";
            })
            .catch(error => {
                console.log(`Error: ${error}\nRuta: ${path}\nFunción: delete`);
                return "El usuario no se elimino";
            });
        } catch (error) {
            console.log(`Error: ${error}\nRuta: ${path}\nFunción: delete`);
            return "El usuario no se elimino";
        }
    },
    ranking: async (total = 10) => {
        try {
            return await await User.findAll({ include: Game, order: [['points','DESC']], limit: total.toString() })
            .then(result => {
                let user = parseObject(result);
                if(user.length) {
                    return user.map(e => {
                        const _averageScore = averageScore(e.games);
                        return show(e, _averageScore) || "No hay usuarios";
                    });
                };
                return "No hay usuarios";
            })
            .catch(error => {
                console.log(`Error: ${error}\nRuta: ${path}\nFunción: rank`);
                return "Error al mostrar usuarios";
            });
        } catch (error) {
            console.log(`Error: ${error}\nRuta: ${path}\nFunción: rank`);
            return "Error al mostrar usuarios";
        }
    }
}