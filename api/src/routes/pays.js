const { json } = require('body-parser');
const { Router } = require('express');
const { Payment, User } = require('../db.js');

const router = Router();


router.post('/', async(req, res, next) =>{
    try {
        let { UserId } = req.body
        let {dataValues} = await User.findByPk(UserId)
        if(dataValues.premium) return res.json({msn : 'Este usuario ya es premium'})
        let payment = await Payment.create({UserId});
        payment.setUser(UserId);
        await User.update(
            {
              premium: true
            },
            { where: { id : UserId } }
          );
          
        return res.json({msn : 'Cambio a premium'});
    }catch(e){
        next(e)
    }
});


router.get('/user', async(req, res, next) =>{
   try{
        let allPays = await User.findAll({
            
            attributes: ["username", "id"],
            include: {
                model: Payment,
                attributes: ['amount', 'createdAt', 'id'],
            }
        });
         return res.json(allPays)
   }catch(e){
    next(e)
   }
});

module.exports = router;
