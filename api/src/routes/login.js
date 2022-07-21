const { Router } = require('express');
const { bitHash } = require('../db');
const User = require('../controllers/Users/Users');

const router = Router();
const user = new User();

router.post('/', async(req, res, next) =>{
    try{
        const { username, password } = req.body;
        const passEncrypt = bitHash.encrypt(password);
        return await user.login(username, passEncrypt.toString())
        .then(result => {
            if(result.hasOwnProperty("name")){
                return res.status(200).json({ Request: {
                    id: result.id,
                    name: result.name,
                    username: result.username,
                    password: bitHash.decrypt(result.password),
                    country: result.country,
                    state: result.state,
                    authorization: result.authorization
                } });
            }
            return res.status(400).json({ Request: result })
        });
    }
    catch(error){
        console.log(`Error: ${error}`);
        return res.status(400).json({ Request: error })
    }
    finally{
        next();
    }
});

module.exports = router;