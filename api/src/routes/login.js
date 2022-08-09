const { Router } = require('express');
const user = require('../controllers/Users/Users');
const friend = require('../controllers/Friends/Friends');

const router = Router();
const path = "api/src/routes/login.js"

router.post('/', async(req, res, next) =>{
    try{
        const { username, password } = req.body;
        return await user.login(username, password)
        .then(result => {
            if(result.hasOwnProperty("Error")) return res.status(400).json(result);
            result.Request.connect = true;
            return Promise.all([user.online(parseInt(result.Request.id), true), friend.update(result.Request.id, true, "login")])
            .then(o => {
                result.update = o[1];
                result.connect = o[0];
                return res.status(200).json(result);
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
        return await Promise.all([user.online(parseInt(id), false), friend.update(id, false, "login")])
        .then(result => {
            if(result[0].hasOwnProperty("Error")) return res.status(400).json(result[0]);
            result[0].update = result[1];
            return res.status(200).json(result[0]);
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