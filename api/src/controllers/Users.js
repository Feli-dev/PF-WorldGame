const{ User } = require('../db');

function parseObject(data = ""){
    let json = JSON.stringify(data) || null;
    return JSON.parse(json) || null;
}

async function validate(username = "", password = "") {
    try {
        let state = false;
        return await User.findAll({ where: { username, password } })
        .then((result) => {
            let user = parseObject(result);
            user.forEach(e => {
                e.username === username ? state = true : state = false;
            });
            return state;
        }).catch((error) => {
            console.log(`Error: ${error}`);
            return false;
        });
    } catch (error) {
        console.log(`Error: ${error}`);
        return false;
    }
}

async function insert(username = "", password = ""){
    return await User.create({ username, password })
    .then( result => {
        let user = parseObject(result);
        return `Usuario ${user} creado exitosamente`;
    })
    .catch(err => {
        console.log(`Error: ${error}`);
        return "Usuario no creado";
    });
}

module.exports = class {

    #username = "";
    #password = "";
    #state = false;

    constructor(username = "", password = ""){
        this.#username = username;
        this.#password = password;
    }

    async create() {
        try {
            this.#state = await validate(this.#username, this.#password);
            if(!this.#state) return await insert(this.#username, this.#password);
            return "El usuario ya existe";
        } catch (error) {
            console.log(`Error: ${error}`);
            return "Error al crear usuarios";
        }
    }

    async login() {
        try {
            this.#state = await validate(this.#username, this.#password);
            if(this.#state) return "Se inicio sesión correctamente";
            return "No existe este usuario";
        } catch (error) {
            console.log(`Error: ${error}`);
            return "Error de logueo";
        }
    }
};