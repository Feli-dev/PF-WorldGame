const { Router } = require('express');
const { bitHash } = require('../db');
const user = require('../controllers/Users/Users');

const router = Router();
const path = "api/src/routes/login.js"

router.post('/', async(req, res, next) =>{
    try{
        const { username, password } = req.body;
        const passEncrypt = bitHash.encrypt(password);
        return await user.login(username, passEncrypt.toString())
        .then(result => {
            if(result.hasOwnProperty("Error")) return res.status(400).json(result);
            result.Request.online = true;
            return user.online(parseInt(result.Request.id), true)
            .then(o => {
                result.connect = o;
                res.status(200).json(result)
            });
        })
        .catch(error => {
            return res.status(404).json({ Error: error, Request: "Fallo el logueo", Path: path, Router: "post" });
        });
    }
    catch(error){
        return res.status(404).json({ Error: error, Request: "Fallo la ruta post", Path: path, Router: "post" });
    }
    finally{
        next();
    }
});

router.put('/:id', async(req, res, next) =>{
    try{
        const { id } = req.params;
        return await user.online(parseInt(id), false)
        .then(result => {
            if(result.hasOwnProperty("Error")) return res.status(400).json(result);
            return res.status(200).json(result);
        })
        .catch(error => {
            return res.status(404).json({ Error: error, Request: "Fallo el logueo", Path: path, Router: "post" });
        });
    }
    catch(error){
        return res.status(404).json({ Error: error, Request: "Fallo la ruta post", Path: path, Router: "post" });
    }
    finally{
        next();
    }
});

module.exports = router;