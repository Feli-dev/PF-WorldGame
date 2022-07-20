const { Router } = require('express');
const { bitHash } = require('../db');
const User = require('../controllers/Users/Users');

const router = Router();
const user = new User();
const path = "api/src/routes/user.js"

router.post('/', async(req, res) =>{
    try {
        const { name, username, password, country } = req.body;
        const passEncrypt = bitHash.encrypt(password);
        return await user.create(name, username, passEncrypt.toString(), country, true, false)
        .then(result => res.status(200).json({ Request: result }))
        .catch(error => {
            console.log(`Error: ${error}\nRuta: ${path}\nMetodo: POST`);
            return res.status(400).json({ Error: error });
        });
    } catch (error) {
        console.log(`Error: ${error}\nRuta: ${path}\nMetodo: POST`);
        return res.status(400).json({ Error: error });
    }
});

router.put('/', async(req, res) =>{
    try {
        const { id, name, username, password, country } = req.body;
        const passEncrypt = bitHash.encrypt(password);
        return await user.update(id, name, username, passEncrypt.toString(), country)
        .then(result => res.status(200).json({ Request: result }))
        .catch(error => {
            console.log(`Error: ${error}\nRuta: ${path}\nMetodo: PUT`);
            return res.status(400).json({ Error: error });
        });
    } catch (error) {
        console.log(`Error: ${error}\nRuta: ${path}\nMetodo: PUT`);
        return res.status(400).json({ Error: error });
    }
});

router.get('/', async(req, res) =>{
    try{
        return await user.select()
        .then(result => {
            return res.status(200).json({Request: result});
        })
    } catch(error){
        console.log(`Error: ${error}\nRuta: ${path}\nMetodo: GET`);
        return res.status(400).json({ Error: error });
    }
});

router.delete('/recycle/:id', async(req, res) =>{
    try {
        const { id } = req.params;
        return await user.state(parseInt(id), false)
        .then(result => res.status(200).json({ Request: result }))
        .catch(error => {
            console.log(`Error: ${error}\nRuta: ${path}\nMetodo: delete/recycle`);
            return res.status(400).json({ Error: error });
        });
    } catch (error) {
        console.log(`Error: ${error}\nRuta: ${path}\nMetodo: delete/recycle`);
        return res.status(400).json({ Error: error });
    }
});

router.delete('/restore/:id', async(req, res) =>{
    try {
        const { id } = req.params;
        return await user.state(parseInt(id), true)
        .then(result => res.status(200).json({ Request: result }))
        .catch(error => {
            console.log(`Error: ${error}\nRuta: ${path}\nMetodo: delete/recycle`);
            return res.status(400).json({ Error: error });
        });
    } catch (error) {
        console.log(`Error: ${error}\nRuta: ${path}\nMetodo: delete/recycle`);
        return res.status(400).json({ Error: error });
    }
});


module.exports = router;