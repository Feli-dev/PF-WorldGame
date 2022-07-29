const { json } = require('body-parser');
const { Router } = require('express');
const { Payment } = require('../db.js');

const router = Router();


router.post('/', async(req, res, next) =>{

    try {
        let { Userid } = req.body
       
        let payment = await Payment.create({amount:5 });
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
