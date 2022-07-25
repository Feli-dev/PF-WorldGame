const { Router } = require('express');
const { bitHash } = require('../db');
const User = require('../controllers/Users/Users');

const router = Router();
const user = new User();
const path = "api/src/routes/user.js"

function field(name = "", username = "", password = "") {
    if(!name.length) return " Nombre";
    if(!username.length) return " Usuario";
    if(!password.length) return " Contraseña";
    return "";
}

router.post('/', async(req, res) =>{
    
    try {
        const { name, username, password, country, email, points } = req.body;
        const message = field(name,username, password);
        if(!message.length){
            const passEncrypt = bitHash.encrypt(password);
            return await user.create(name, username, passEncrypt.toString(), country, email, points, true, false)
            .then(result => res.status(200).json({ Request: result }))
            .catch(error => {
                console.log(`Error: ${error}\nRuta: ${path}\nMetodo: POST`);
                return res.status(404).json({ Error: error });
            });
        }else{
            return res.status(404).json({ Error: `El campo${message} esta vacio` });
        }
    } catch (error) {
        console.log(`Error: ${error}\nRuta: ${path}\nMetodo: POST`);
        return res.status(400).json({ Error: error });
    }
});

router.put('/', async(req, res) =>{
    try {
        const { id, name, username, password, country, email, points } = req.body;
        const message = field(name, username, password);
        if(!message.length){
            const passEncrypt = bitHash.encrypt(password);
            return await user.update(id, name, username, passEncrypt.toString(), country, email, points)
            .then(result => res.status(200).json({ Request: result }))
            .catch(error => {
                console.log(`Error: ${error}\nRuta: ${path}\nMetodo: PUT`);
                return res.status(404).json({ Error: error });
            });
        }else{
            return res.status(404).json({ Error: `El campo${message} esta vacio` });
        }
    } catch (error) {
        console.log(`Error: ${error}\nRuta: ${path}\nMetodo: PUT`);
        return res.status(400).json({ Error: error });
    }
});

router.get('/rank', async(req, res) =>{
    let { total } = req.body;
    try{
        return await user.rank(total)
        .then(result => {
            return res.status(200).json({ Request: result });
        })
        .catch(error => {
            console.log(`Error: ${error}\nRuta: ${path}\nMetodo: GET/rank`);
            return res.status(404).json({ Error: error });
        })
    } catch(error){
        console.log(`Error: ${error}\nRuta: ${path}\nMetodo: GET/rank`);
        return res.status(400).json({ Error: error });
    }
});

router.get('/:id', async(req, res) =>{
    try{
        const { id } = req.params;
        if(id > 0) return await user.select(id)
        .then(result => {
            return res.status(200).json({ Request: result });
        })
        .catch(error => {
            console.log(`Error: ${error}\nRuta: ${path}\nMetodo: GET/id`);
            return res.status(404).json({ Error: error });
        })
        else return res.status(404).json({ Error: "El id no puede ser menor igual a 0" });
    } catch(error){
        console.log(`Error: ${error}\nRuta: ${path}\nMetodo: GET/id`);
        return res.status(400).json({ Error: error });
    }
});

router.get('/', async(req, res) =>{
    try{
        return await user.select()
        .then(result => {
            return res.status(200).json({ Request: result });
        })
        .catch(error => {
            console.log(`Error: ${error}\nRuta: ${path}\nMetodo: GET`);
            return res.status(404).json({ Error: error });
        })
    } catch(error){
        console.log(`Error: ${error}\nRuta: ${path}\nMetodo: GET`);
        return res.status(400).json({ Error: error });
    }
});

router.delete('/recycle/:id', async(req, res) =>{
    try {
        const { id } = req.params;
        if(id > 0) return await user.state(parseInt(id), false)
        .then(result => res.status(200).json({ Request: result }))
        .catch(error => {
            console.log(`Error: ${error}\nRuta: ${path}\nMetodo: delete/recycle`);
            return res.status(404).json({ Error: error });
        });
        else return res.status(404).json({ Error: "El id no puede ser menor igual a 0" });
    } catch (error) {
        console.log(`Error: ${error}\nRuta: ${path}\nMetodo: delete/recycle`);
        return res.status(400).json({ Error: error });
    }
});

router.delete('/restore/:id', async(req, res) =>{
    try {
        const { id } = req.params;
        if(id > 0) return await user.state(parseInt(id), true)
        .then(result => res.status(200).json({ Request: result }))
        .catch(error => {
            console.log(`Error: ${error}\nRuta: ${path}\nMetodo: delete/restore`);
            return res.status(400).json({ Error: error });
        });
        else return res.status(404).json({ Error: "El id no puede ser menor igual a 0" });
    } catch (error) {
        console.log(`Error: ${error}\nRuta: ${path}\nMetodo: delete/restore`);
        return res.status(400).json({ Error: error });
    }
});

router.delete('/:id', async(req, res) =>{
    try {
        const { id } = req.params;
        if(id > 0) return await user.delete(parseInt(id))
        .then(result => res.status(200).json({ Request: result }))
        .catch(error => {
            console.log(`Error: ${error}\nRuta: ${path}\nMetodo: delete`);
            return res.status(404).json({ Error: error });
        });
        else return res.status(404).json({ Error: "El id no puede ser menor igual a 0" });
    } catch (error) {
        console.log(`Error: ${error}\nRuta: ${path}\nMetodo: delete`);
        return res.status(400).json({ Error: error });
    }
});

module.exports = router;