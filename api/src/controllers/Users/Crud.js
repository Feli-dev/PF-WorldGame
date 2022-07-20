const{ User } = require('../../db');
const parseObject = require('../../Tools/ParseObject');
const path = "api/src/controllers/Users/Crud.js";

module.exports = {
    select: async () => {
        try {
            return await User.findAll()
            .then(result => {
                let user = parseObject(result);
                if(user.length) return user || "No hay usuarios";
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
    insert: async (name = "",username = "", password = "", country = "", state = true, authorization = false) => {
        try {
            return await User.create({ name, username, password, country, state, authorization })
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
    update: async (id = 0, name = "",username = "", password = "", country = "") => {
        try {
            return await User.update({ name, username, password, country },{ where: { id } } )
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
    delete: async(id = 0) => {
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
    }
}