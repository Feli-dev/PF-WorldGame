const { select, insert, update, remove, notify } = require('./Crud');
const { filterUser } = require('./Validate');

module.exports = new class {

    #path = "api/src/controllers/Friends/Friends.js";

    constructor(){
    }

    async select(){
        try {
            return await select()
            .then(result => result)
            .catch(error => {
                return { Error: error, Request: "Fallo al mostrar los amigos", Path: this.#path, Function: "select" };
            });
        } catch (error) {
            return { Error: error, Request: "Fallo la función select", Path: this.#path, Function: "select" };
        }
    }

    async create(UserId = 0, FriendId = 0){
        try {
            const user = await Promise.all([filterUser(UserId), filterUser(FriendId)]);
            if(user[0].hasOwnProperty("Value") && user[1].hasOwnProperty("Value")) return await insert(
                UserId, FriendId, user[0].Value.name, user[0].Value.username, user[1].Value.name, user[1].Value.username, user[0].Value.avatar, user[1].Value.avatar)
                .then(result => result)
                .catch(error => {
                    return { Error: error, Request: "Fallo al agregar un amigo", Path: this.#path, Function: "create" };
                });
            return { Error: [user[0], user[1]], Request: "Fallo la validación", Path: this.#path, Function: "create" };
        } catch (error) {
            return { Error: error, Request: "Fallo la función create", Path: this.#path, Function: "create" };
        }
    }

    async update(UserId = 0, FriendId = 0){
        try {
            const user = await Promise.all([filterUser(UserId), filterUser(FriendId)]);
            if(user[0].hasOwnProperty("Value") && user[1].hasOwnProperty("Value")) return await update(UserId, FriendId)
                .then(result => result)
                .catch(error => {
                    return { Error: error, Request: "Fallo al aceptar una solicitud de amistad", Path: this.#path, Function: "update" };
                });
            return { Error: [user[0], user[1]], Request: "Fallo la validación", Path: this.#path, Function: "update" };
        } catch (error) {
            return { Error: error, Request: "Fallo la función update", Path: this.#path, Function: "update" };
        }
    }

    async notify(UserId = 0, connect = false, type = ""){
        try {
            const user = await filterUser(UserId);
            if(user.hasOwnProperty("Value")) return await notify(user.Value.id, user.Value.username, user.Value.name, type === "login" ? connect : user.Value.connect, user.Value.avatar)
                .then(result => result)
                .catch(error => {
                    return { Error: error, Request: "Fallo al actualizar los amigos", Path: this.#path, Function: "notify" };
                });
            return { Error: [user[0], user[1]], Request: "Fallo la validación", Path: this.#path, Function: "notify" };
        } catch (error) {
            return { Error: error, Request: "Fallo la función notify", Path: this.#path, Function: "notify" };
        }
    }

    async delete(UserId = 0, FriendId = 0){
        try {
            const user = await Promise.all([filterUser(UserId), filterUser(FriendId)]);
            if(user[0].hasOwnProperty("Value") && user[1].hasOwnProperty("Value")) return await remove(UserId, FriendId)
                .then(result => result)
                .catch(error => {
                    return { Error: error, Request: "Fallo al eliminar un amigo", Path: this.#path, Function: "delete" };
                });
            return { Error: [user[0], user[1]], Request: "Fallo la validación", Path: this.#path, Function: "delete" };
        } catch (error) {
            return { Error: error, Request: "Fallo la función delete", Path: this.#path, Function: "delete" };
        }
    }
}