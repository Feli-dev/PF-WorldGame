const { Router } = require('express');
const { bitHash } = require('../db');
const User1 = require('../controllers/Users/Users');
const { averageScore } = require('../Tools');
const { Game, User } = require('../db');
const ParseObject = require('../Tools/ParseObject');

const router = Router();
const user = new User();
const path = "api/src/routes/user.js"

router.post('/', async(req, res) =>{
    try {
        const { username, password } = req.body;
        req.body.name = username;
        const passEncrypt = bitHash.encrypt(password);
        req.body.password = passEncrypt;
        // console.log(username);
        
        return await User.create(req.body)
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
    let { username, id } = req.body;
    // try{
    //     return await user.select()
    //     .then(result => {
    //         return res.status(200).json({Request: result});
    //     })
    // } catch(error){
    //     console.log(`Error: ${error}\nRuta: ${path}\nMetodo: GET`);
    //     return res.status(400).json({ Error: error });
    // }
    let get = await User.findAll({ where:{ id }, include: Game });
    console.log(get);
    _averageScore = averageScore(get[0].games);
    return res.json({get, _averageScore});
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