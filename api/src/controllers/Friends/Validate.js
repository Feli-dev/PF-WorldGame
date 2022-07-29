const { User } = require('../../db');
const parseObject = require('../../Tools/ParseObject');

const path = "api/src/Friends/Validate.js"

module.exports = {
    filterUser: (id = 0) => {
        try {
            return User.findAll({ attributes: ['username', 'name'], where: { id },  order: [['id','ASC']]})
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
    }
}