const { User, Friend } = require('../../db');
const parseObject = require('../../Tools/ParseObject');

const path = "api/src/Friends/Validate.js"

module.exports = {
    filterUser: (id = 0) => {
        try {
            return User.findAll({ attributes: ['id', 'username', 'name', 'connect', 'avatar', 'country'], where: { id },  order: [['id','ASC']]})
            .then(result => {
                const user = parseObject(result);
                if(user.length) return { Value: user[0] };
                return { Error: "Vacio", Request: "No se encontro datos", Path: path, Function: "filterUser" };
            })
            .catch(error => {
                return { Error: error, Request: "No se encontro datos", Path: path, Function: "filterUser" };
            });
        } catch (error) {
            return { Error: error, Request: "No se encontro datos", Path: path, Function: "filterUser" };

        }
    },
    duplicate: (UserId = 0, FriendId = 0) => {
        try {
            return Friend.findAll({ where: { UserId, FriendId } })
            .then(result => {
                const user = parseObject(result);
                if(user.length) return { Value: true, Request: "Ya existe esta asociación de amistad" };
                return { Value: false };
            })
            .catch(error => {
                return { Error: error, Value: false, Request: "No se encontro datos", Path: path, Function: "duplicate" };
            });
        } catch (error) {
            return { Error: error, Value: false, Request: "No se encontro datos", Path: path, Function: "duplicate" };

        }
    }
}