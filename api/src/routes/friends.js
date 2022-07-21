const { Router } = require('express');
const { User } = require('../db.js');
const router = Router();

router.post('/', async(req, res, next) =>{

    try {
        console.log(2);
        let {id, friendId} =  req.body;

        let friend = await User.findAll({
            where:{
                id: id
            }
        });
        let amigo = await User.findAll({
            where:{
                id: friendId
            }
        }); 
        console.log(friend);
        friend.addAmigo(amigo);
        return res.json(amigo); 

    }catch(e){

        next(e);

    }
});

module.exports = router;