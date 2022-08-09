const { Router } = require('express');
const ncrypt = require("ncrypt-js");
const { authEmail } = require('../controllers/Users/Validate');
const user = require('../controllers/Users/Users');
const e = require('../Tools/Email');

const ncryptObject = new ncrypt('key');
const router = Router();
const path = "api/src/routes/email.js";

router.post('/', async(req, res) =>{
    try {
        const { email } = req.body;
        const validate = await authEmail(email);
        if(validate.Value > 0){
            const send = e.send(email, "", 2, validate.Value)
            if(send) {
                validate.Message = "Se envio el correo";
                return res.status(200).json(validate);
            }
            return res.status(404).json({ Error: "No se envio al correo" });
        }
        return res.status(404).json(validate);
    } catch (error) {
        return res.status(404).json({ Error: error, Request: "Fallo la ruta post", Path: path, Router: "post" });
    }
});

router.put('/', async(req, res) =>{
    try {
        const { id, password, email } = req.body;
        if(password.length){
            const passEncrypt = ncryptObject.encrypt(password);
            return await user.confirm(id, passEncrypt)
            .then(result => {
                if(result.hasOwnProperty("Error")) return res.status(400).json(result);
                e.send(email, "", 3);
                return res.status(200).json(result);
            })
            .catch(error => {
                return res.status(404).json({ Error: error, Request: "Fallo la confirmación del cambio de contraseña", Path: path, Router: "put" });
            });
        }else{
            return res.status(404).json({ Error: `El campo${message} esta vacio`, Path: path, Router: "put" });
        }
    } catch (error) {
        console.log(error)
        return res.status(404).json({ Error: error, Request: "Fallo la ruta put", Path: path, Router: "put" });
    }
});

module.exports = router;