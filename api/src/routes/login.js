const { Router } = require('express');
const User = require('../controllers/Users');
const router = Router();

router.get('/', async(req, res, next) =>{
    try{
        const { username, password } = req.body;
        let user = new User(username, password);
        let request = await user.login();
        res.status(200).json({request});
    }
    catch(error){
        console.log(`Error: ${error}`);
    }
    finally{
        next();
    }
});

module.exports = router;