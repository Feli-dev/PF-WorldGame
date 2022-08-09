const { select, insert, update, remove } = require('./Crud');
const { filterUser, duplicate } = require('./Validate');

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
            const validate = await duplicate(UserId, FriendId);
            if(validate.hasOwnProperty("Error")) return validate;
            if(!validate.Value){
                const user = await filterUser(FriendId);
                if(user.hasOwnProperty("Value")) return await insert(UserId, FriendId, user.Value.name, user.Value.username, user.Value.avatar, user.Value.country)
                    .then(result => result)
                    .catch(error => {
                        return { Error: error, Request: "Fallo al agregar un amigo", Path: this.#path, Function: "create" };
                    });
                return { Error: [user[0], user[1]], Request: "Fallo la validación", Path: this.#path, Function: "create" };
            }
            return validate;
        } catch (error) {
            return { Error: error, Request: "Fallo la función create", Path: this.#path, Function: "create" };
        }
    }

    async update(UserId = 0, connect = false, type = ""){
        try {
            const user = await filterUser(UserId);
            if(user.hasOwnProperty("Value")) return await update(user.Value.id, user.Value.username, user.Value.name, type === "login" ? connect : user.Value.connect, user.Value.avatar, user.Value.country)
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
            return await remove(UserId, FriendId)
            .then(result => result)
            .catch(error => {
                return { Error: error, Request: "Fallo al eliminar un amigo", Path: this.#path, Function: "delete" };
            });
        } catch (error) {
            return { Error: error, Request: "Fallo la función delete", Path: this.#path, Function: "delete" };
        }
    }
}