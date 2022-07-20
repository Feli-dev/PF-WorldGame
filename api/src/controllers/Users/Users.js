const { auth, session, duplicate } = require('./Validate');
const { select, insert, update, stateUser } = require('./Crud');
const ParseObject = require('../../Tools/ParseObject');

module.exports = class {

    #path = "api/src/controllers/Users/Users.js";

    constructor(){
    }

    async select(){
        try {
            return await select()
            .then(result => result)
            .catch(error => {
                console.log(`Error: ${error}\nRuta: ${this.#path}\nFunción: select`);
                return "Error al mostrar usuarios";
            });
        } catch (error) {
            console.log(`Error: ${error}\nRuta: ${this.#path}\nFunción: select`);
            return "Error al mostrar usuarios";
        }
    }

    async create(name = "", username = "", password = "", country = "", state = true, authorization = false) {
        try {
            const validateName = await duplicate(name, "insert");
            if(!validateName) {
                return await session(username, password, "insert", 0)
                .then(result => {
                    if(!result) return insert(name, username, password, country, state, authorization);
                    return "El usuario ya existe";
                })
                .catch(error => {
                    console.log(`Error: ${error}\nRuta: ${this.#path}\nFunción: create`);
                    return "Error al crear usuarios";
                });
            }else{
                return "El nombre esta en uso"
            }
        } catch (error) {
            console.log(`Error: ${error}\nRuta: ${this.#path}\nFunción: create`);
            return "Error al crear usuarios";
        }
    }

    async update(id = 0, name = "", username = "", password = "", country = "") {
        try {
            const validateName = await duplicate(name, "update", id);
            if(!validateName) {
                return await session(username, password, "update", id)
                .then(result => {
                    if(!result) return update(id, name, username, password, country);
                    return "El usuario no puede actualizarse";
                })
                .catch(error => {
                    console.log(`Error: ${error}\nRuta: ${this.#path}\nFunción: create`);
                    return "Error al actualizar usuarios";
                });
            }else{
                return "El nombre esta en uso"
            }
        } catch (error) {
            console.log(`Error: ${error}\nRuta: ${this.#path}\nFunción: create`);
            return "Error al actualizar usuarios";
        }
    }

    async state(id = 0, state = true) {
        try {
            return await stateUser(id, state)
            .then(result => result)
            .catch(error => {
                console.log(`Error: ${error}\nRuta: ${this.#path}\nFunción: state`);
                return "Error al cambiar el estado de usuarios";
            });
        } catch (error) {
            console.log(`Error: ${error}\nRuta: ${this.#path}\nFunción: state`);
            return "Error al cambiar el estado de usuarios";
        }
    }

    async login(username, password) {
        try {
            return await auth(username, password)
            .then(result => {
                if(result.hasOwnProperty("username")) return result;
                return "No existe este usuario";
            })
            .catch(error => {
                console.log(`Error: ${error}\nRuta: ${this.#path}\nFunción: login`);
                return "Error de logueo";
            });
        } catch (error) {
            console.log(`Error: ${error}\nRuta: ${this.#path}\nFunción: login`);
            return "Error de logueo";
        }
    }
};