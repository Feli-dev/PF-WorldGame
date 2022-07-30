const { json } = require('body-parser');
const { Router } = require('express');
const { Payment, User } = require('../db.js');

const router = Router();


router.post('/', async(req, res, next) =>{

    try {
        let { Userid } = req.body
        let user = await User.findAll({where: {id: Userid}})
        let username = user[0].username 
        let payment = await Payment.create({amount:5, username });
        payment.setUser(Userid);
        return res.json(payment);
    }catch(e){
        next(e)
    }
});


router.get('/', async(req, res, next) =>{
   try{
        let allPays = await Payment.findAll();
         return res.json(allPays)
   }catch(e){
    next(e)
   }
        
         
    

   
});

module.exports = router;
