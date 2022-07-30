const { Friend } = require('../../db');
const parseObject = require('../../Tools/ParseObject');
const { Op } = require("sequelize");

const path = "api/src/controllers/Friends/Crud.js";

module.exports = {
    select: async() => {
        try {
            return await Friend.findAll()
            .then(result => {
                const friend = parseObject(result);
                if(friend.length) {
                    return { Request: friend };
                }
                return { Request: "No hay registro de amistades" };
            }).catch(error => {
                return { Error: error, Request: "Fallo al mostrar los amigos", Path: path, Function: "select" };
            });
        } catch (error) {
            return { Error: error, Request: "Fallo la función select", Path: path, Function: "select" };
        }
    },
    insert: async(UserId = 0, FriendId = 0, name = "", username = "", nameFriend = "", usernameFriend = "") => {
        try {
            return await Friend.bulkCreate(
                [ { FriendId, UserId, state: "Enviado", name: nameFriend, username: usernameFriend, connect: false },
                { FriendId: UserId, UserId: FriendId, state: "Recibido", name, username, connect: false }] ,
                { validate: true },
                { fields: ['FriendId', 'UserId', 'state', 'name', 'username', 'connect'] }
            )
            .then(result => {
                result[0].setUser(UserId);
                result[1].setUser(FriendId);
                return { Request: "Solicitud de amistad enviada" };
            })
            .catch(error => {
                return { Error: error, Request: "Fallo al agregar un amigo", Path: path, Function: "insert" };
            });
        } catch (error) {
            return { Error: error, Request: "Fallo la función insert", Path: path, Function: "insert" };
        }
    },
    update: async(UserId = 0, FriendId = 0) => {
        try {
            return await Friend.update({ state: "Aceptado" }, {
                where: {
                    UserId: { [Op.or]: [UserId, FriendId] },
                    FriendId: { [Op.or]: [UserId, FriendId] }
                }
            })
            .then(result => {
                if(result[0] > 0) return { Request: "Solicitud de amistad aceptada" };
                return { Request: "No se acepto la solicitud" };
            })
            .catch(error => {
                return { Error: error, Request: "Fallo al aceptar una solicitud de amistad", Path: path, Function: "update" };
            });
        } catch (error) {
            return { Error: error, Request: "Fallo la función update", Path: path, Function: "update" };
        }
    },
    notify: async(UserId = 0, username = "", name="", connect = false) => {
        try {
            return await Friend.update({ username, name, connect }, { where: { FriendId: UserId } })
            .then(result => {
                if(result[0] > 0) return { Request: "Amigos actualizados" };
                return { Request: "No se actualizaron los amigos" };
            })
            .catch(error => {
                return { Error: error, Request: "Fallo al actualizar a los amigos", Path: path, Function: "notify" };
            });
        } catch (error) {
            return { Error: error, Request: "Fallo la función notify", Path: path, Function: "notify" };
        }
    },
    remove: async(UserId = 0, FriendId = 0) => {
        try {
            return await Friend.destroy({
                where: {
                    UserId: { [Op.or]: [UserId, FriendId] },
                    FriendId: { [Op.or]: [UserId, FriendId] }
                }
            })
            .then(result => {
                if(result > 0) return { Request: "Amigos eliminado" };
                return { Request: "No se pudo eliminar" };
            })
            .catch(error => {
                return { Error: error, Request: "Fallo al eliminar un amigo", Path: path, Function: "remove" };
            });
        } catch (error) {
            return { Error: error, Request: "Fallo la función remove", Path: path, Function: "remove" };
        }
    }
}