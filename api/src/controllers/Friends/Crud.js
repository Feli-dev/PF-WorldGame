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
                [ { FriendId, UserId, state: "Enviado", name: nameFriend, username: usernameFriend },
                { FriendId: UserId, UserId: FriendId, state: "Recibido", name, username }] ,
                { validate: true },
                { fields: ['FriendId', 'UserId', 'state', 'name', 'username'] }
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
                parseObject(result)
                return { Request: "Solicitud de amistad aceptada" };
            })
            .catch(error => {
                return { Error: error, Request: "Fallo al aceptar una solicitud de amistad", Path: path, Function: "update" };
            });
        } catch (error) {
            return { Error: error, Request: "Fallo la función update", Path: path, Function: "update" };
        }
    }
}