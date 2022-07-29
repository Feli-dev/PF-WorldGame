const { auth } = require('./Validate');
const { select, insert, update, stateUser, remove, ranking, statePass, online } = require('./Crud');

module.exports = new class {

    #path = "api/src/controllers/Users/Users.js";

    constructor(){
    }

    async select(id = 0, country = "", premium = false, state = true, authorization = "User"){
        try {
            return await select(id, country, premium, state, authorization)
            .then(result => result)
            .catch(error => {
                return { Error: error, Request: "Fallo al mostrar los usuarios", Path: this.#path, Function: "select" };
            });
        } catch (error) {
            return { Error: error, Request: "Fallo la función select", Path: this.#path, Function: "select" };
        }
    }

    async create(name = "", username = "", password = "", country = "", email = "", points = 0, premium = false, state = true, authorization = "User", avatar = "", connect = true) {
        try {
            return await insert(name, username, password, country, email, points, premium, state, authorization, avatar, connect)
            .then(result => result)
            .catch(error => {
                return { Error: error, Request: "No se ingreso los usuarios", Path: this.#path, Function: "create" };
            });
        } catch (error) {
            return { Error: error, Request: "Fallo la funcion insert", Path: this.#path, Function: "create" };
        }
    }

    async update(id = 0, data = {}) {
        try {
            return await update(id, data)
            .then(result => result)
            .catch(error => {
                return { Error: error, Request: "No se actualizo los usuarios", Path: this.#path, Function: "update" };
            });
        } catch (error) {
            return { Error: error, Request: "Fallo la función update", Path: this.#path, Function: "update" };
        }
    }

    async online(id = 0, connect = true) {
        try {
            return await online(id, connect)
            .then(result => result)
            .catch(error => {
                return { Error: error, Request: "No se cambio el estado online", Path: this.#path, Function: "online" };
            });
        } catch (error) {
            return { Error: error, Request: "Fallo la función online", Path: this.#path, Function: "online" };
        }
    }

    async state(id = 0, state = true) {
        try {
            return await stateUser(id, state)
            .then(result => result)
            .catch(error => {
                return { Error: error, Request: "No se cambio el estado del usuario", Path: this.#path, Function: "state" };
            });
        } catch (error) {
            return { Error: error, Request: "Fallo la función state", Path: this.#path, Function: "state" };
        }
    }

    async delete(id = 0) {
        try {
            return await remove(id)
            .then(result => result)
            .catch(error => {
                return { Error: error, Request: "No se elimino el usuario", Path: this.#path, Function: "delete" };
            });
        } catch (error) {
            return { Error: error, Request: "Fallo la función delete", Path: this.#path, Function: "delete" };
        }
    }

    async rank(total = 10){
        try {
            return await ranking(total)
            .then(result => result)
            .catch(error => {
                return { Error: error, Request: "No se muestra el rank de usuarios", Path: this.#path, Function: "rank" };
            });
        } catch (error) {
            return { Error: error, Request: "Fallo la función rank", Path: this.#path, Function: "rank" };
        }
    }

    async login(username, password) {
        try {
            return await auth(username, password)
            .then(result => result)
            .catch(error => {
                return { Error: error, Request: "No se pudo loguear", Path: this.#path, Function: "login" };
            });
        } catch (error) {
            return { Error: error, Request: "Fallo la función login", Path: this.#path, Function: "login" };
        }
    }

    async confirm(id = 0, password = ""){
        try {
            return await statePass(id, password)
            .then(result => result)
            .catch(error => {
                return { Error: error, Request: "No se pudo modificar la contraseña", Path: this.#path, Function: "confirm" };
            });
        } catch (error) {
            return { Error: error, Request: "Fallo la función confirm", Path: this.#path, Function: "confirm" };
        }
    }
};