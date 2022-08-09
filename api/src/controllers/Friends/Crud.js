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
    insert: async(UserId = 0, FriendId = 0, name = "", username = "", avatar = "", country = "") => {
        try {
            return await Friend.create({ FriendId, UserId, name, username, connect: false, avatar, country })
            .then(result => {
                result.setUser(UserId);
                return { Request: `Siguiendo a ${username}` };
            })
            .catch(error => {
                return { Error: error, Request: "Fallo al seguir a un amigo", Path: path, Function: "insert" };
            });
        } catch (error) {
            return { Error: error, Request: "Fallo la función insert", Path: path, Function: "insert" };
        }
    },
    update: async(UserId = 0, username = "", name="", connect = false, avatar = "", country = "") => {
        try {
            return await Friend.update({ username, name, connect, avatar, country }, { where: { FriendId: UserId } })
            .then(result => {
                if(result[0] > 0) return { Request: "Amigos actualizados" };
                return { Request: "No se actualizaron los amigos" };
            })
            .catch(error => {
                return { Error: error, Request: "Fallo al actualizar a los amigos", Path: path, Function: "update" };
            });
        } catch (error) {
            return { Error: error, Request: "Fallo la función notify", Path: path, Function: "update" };
        }
    },
    remove: async(UserId = 0, FriendId = 0) => {
        try {
            return await Friend.destroy({ where: { UserId, FriendId } })
            .then(result => {
                if(result > 0) return { Request: "No siguiendo" };
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