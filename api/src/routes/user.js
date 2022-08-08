const { Router } = require('express');
const ncrypt = require("ncrypt-js");
const user = require('../controllers/Users/Users');
const e = require('../Tools/Email');
const { session } = require('../controllers/Users/Validate')
const f = require('../controllers/Friends/Friends');

const ncryptObject = new ncrypt('key');
const router = Router();
const path = "api/src/routes/user.js";
let obj = {}

function field(username = "", password = "", email = "") {
    if(!username.length) return " Usuario";
    if(!password.length) return " Contraseña";
    if(!email.length) return " Correo";
    return "";
}

async function filter(id = 0, body = {}){
    try {
        obj = {};
        const points = parseFloat(body.points) || 0
        return await session(id)
        .then(result => {
            if(result.Value.name !== body.name && body.name !== undefined) obj.name = body.name;
            if(result.Value.username !== body.username && body.username !== undefined) obj.username = body.username;
            if(ncryptObject.decrypt(result.Value.password).toString() !== body.password && body.password !== undefined) obj.password =  ncryptObject.encrypt(body.password).toString();
            if(result.Value.country !== body.country && body.country !== undefined) obj.country = body.country;
            if(result.Value.email !== body.email && body.email !== undefined) obj.email = body.email;
            if(parseFloat(result.Value.points) !== points && body.points !== undefined) obj.points = points;
            if(result.Value.premium !== body.premium && body.premium !== undefined) obj.premium = body.premium;
            if(result.Value.authorization !== body.authorization && body.authorization !== undefined) obj.authorization = body.authorization;
            if(result.Value.avatar !== body.avatar && body.avatar !== undefined) obj.avatar = body.avatar;
            if(result.Value.connect !== body.connect && body.connect !== undefined) obj.connect = body.connect;
            if(result.Value.state !== body.state && body.state !== undefined) obj.state = body.state;
            const message = Object.entries(obj).length === 0 ? { Request: "Los campos no necesitan actualizarse" } : obj
            return Object.entries(result).length === 0 ? { Request: "No hay datos del usuario" } : message;
        })
        .catch(error =>{
            return { Error: error, Request: "No se encontro el usuario", Ruta: path, Función: "filter" };
        });
    } catch (error) {
        return { Error: error, Request: "Fallo en la función filter", Ruta: path, Función: "filter" };
    }
}

router.post('/', async(req, res) =>{
    try {
        const { name, username, password, country, email, points, premium, authorization, avatar } = req.body;
        const message = field(username, password, email);
        if(!message.length){
            const passEncrypt =  ncryptObject.encrypt(password);
            return await user.create(name, username, passEncrypt.toString(), country, email, points || 0, premium, true, authorization, avatar, false)
            .then(result => {
                if(result.hasOwnProperty("Error")) return res.status(404).json(result);
                return e.send(email, username, 0)
                .then(r => {
                    if(premium) e.send(email, username, 4, "");
                    if(!r) result.Send = "No se envio el correo";
                    result.Send = "Se envio el correo";
                    return res.status(200).json(result);
                })
            })
            .catch(error => {
                return res.status(404).json({ Error: error, Request: "Fallo el proceso de post", Ruta: path, Router: "post" });
            });
        }else{
            return res.status(400).json({ Error: "null", Request: `El campo${message} no puede ser null o vacio`, Ruta: path, Router: "post" });
        }
    } catch (error) {
        return res.status(404).json({ Error: error, Request: "Fallo la ruta post", Ruta: path, Router: "post" });
    }
});

router.put('/', async(req, res) =>{
    try {
        const data = await filter(parseInt(req.body.id), req.body);
        if(data.hasOwnProperty("Error")) return res.status(400).json(data);
        if(data.hasOwnProperty("Request")) return res.status(200).json(data);
        const message = field(req.body.username, req.body.password, req.body.email);
        if(!message.length){
            return await user.update(parseInt(req.body.id), data)
            .then(result => {
                if(result.hasOwnProperty("Error")) return res.status(404).json(result);
                return Promise.all([e.send(req.body.email, req.body.username, 1), f.update(parseInt(req.body.id))])
                .then(r => {
                    result.friend = r[1];
                    if(req.body.premium) e.send(req.body.email, req.body.username, 4, "");
                    if(!r[0]) result.Send = "No se envio el correo";
                    result.Send = "Se envio el correo";
                    obj = null;
                    return res.status(200).json(result);
                })
            })
            .catch(error => {
                return res.status(404).json({ Error: error, Request: "Fallo el proceso de put", Ruta: path, Router: "put" });
            });
        }else{
            return res.status(404).json({ Error: "campo null", Request: `El campo${message} esta vacio`, Ruta: path, Router: "put" });
        }
    } catch (error) {
        return res.status(404).json({ Error: error, Request: "Fallo la ruta put", Ruta: path, Router: "put" });
    }
});

router.get('/rank', async(req, res) =>{
    let { total } = req.body;
    try{
        return await user.rank(total)
        .then(result => {
            if(result.hasOwnProperty("Error")) return res.status(404).json(result);
            return res.status(200).json(result);
        })
        .catch(error => {
            return res.status(404).json({ Error: error, Request: "Fallo el proceso de get/rank", Ruta: path, Router: "get" });
        })
    } catch(error){
        return res.status(404).json({ Error: error, Request: "Fallo la ruta get/rank", Ruta: path, Router: "get" });
    }
});

router.get('/:id', async(req, res) =>{
    try{
        const { id } = req.params;
        if(id > 0) return await user.select(id)
        .then(result => {
            if(result.hasOwnProperty("Error")) return res.status(404).json(result);
            return res.status(200).json(result);
        })
        .catch(error => {
            return res.status(404).json({ Error: error, Request: "Fallo el proceso de get/id", Ruta: path, Router: "get" });
        })
        else return res.status(404).json({ Error: "No coincide3 el valor", Request: "El id no puede ser menor igual a 0", Ruta: path, Router: "get" });
    } catch(error){
        return res.status(404).json({ Error: error, Request: "Fallo la ruta get/id", Ruta: path, Router: "get" });
    }
});

router.get('/', async(req, res) =>{
    try{
        const { country, premium, state, authorization } = req.query;
        return await user.select(0, country || "all", premium || "all", state || "all", authorization || "all")
        .then(result => {
            if(result.hasOwnProperty("Error")) return res.status(404).json(result);
            return res.status(200).json(result);
        })
        .catch(error => {
            return res.status(404).json({ Error: error, Request: "Fallo el proceso de get", Ruta: path, Router: "get" });
        })
    } catch(error){
        return res.status(404).json({ Error: error, Request: "Fallo la ruta get", Ruta: path, Router: "get" });
    }
});

router.delete('/recycle/:id', async(req, res) =>{
    try {
        const { id } = req.params;
        if(id > 0) return await user.state(parseInt(id), false)
        .then(result => {
            if(result.hasOwnProperty("Error")) return res.status(404).json(result);
            return res.status(200).json(result);
        })
        .catch(error => {
            return res.status(404).json({ Error: error, Request: "Fallo el proceso de delete/recycle/id", Ruta: path, Router: "delete" });
        });
        else return res.status(404).json({ Error: "El id no puede ser menor igual a 0", Ruta: path, Router: "delete" });
    } catch (error) {
        return res.status(404).json({ Error: error, Request: "Fallo la ruta delete/recycle/id", Ruta: path, Router: "delete" });
    }
});

router.delete('/restore/:id', async(req, res) =>{
    try {
        const { id } = req.params;
        if(id > 0) return await user.state(parseInt(id), true)
        .then(result => {
            if(result.hasOwnProperty("Error")) return res.status(404).json(result);
            return res.status(200).json(result);
        })
        .catch(error => {
            return res.status(404).json({ Error: error, Request: "Fallo el proceso de delete/restore/id", Ruta: path, Router: "delete" });
        });
        else return res.status(404).json({ Error: "El id no puede ser menor igual a 0", Ruta: path, Router: "delete" });
    } catch (error) {
        return res.status(404).json({ Error: error, Request: "Fallo la ruta delete/restore/id", Ruta: path, Router: "delete" });
    }
});

router.delete('/:id', async(req, res) =>{
    try {
        const { id } = req.params;
        if(id > 0) return await user.delete(parseInt(id))
        .then(result => {
            if(result.hasOwnProperty("Error")) return res.status(404).json(result);
            return res.status(200).json(result);
        })
        .catch(error => {
            return res.status(404).json({ Error: error, Request: "Fallo el proceso de delete", Ruta: path, Router: "delete" });
        });
        else return res.status(404).json({ Error: "El id no puede ser menor igual a 0", Ruta: path, Router: "delete" });
    } catch (error) {
        return res.status(404).json({ Error: error, Request: "Fallo la ruta delete", Ruta: path, Router: "delete" });
    }
});

module.exports = router;