const { Router } = require('express');
const { Review, User } = require('../db.js');
let {one, all} = require ('../controllers/review')
const router = Router();

router.post('/', async(req, res, next) =>{
    try {
        let { userId, message } = req.body
        let review = await Review.create({message});
        review.setUser(userId);
        return res.json(review);
    }catch(e){
        next(e);
    }
});

router.get('/', async(req, res, next) =>{

    try {
        let review;
        let {id, userId} = req.body;
        let {read} = req.query; 
        console.log('red', read)
        if(id||userId){
            review = await one(id, userId);
        }else if(read){
            
            review = await Review.findAll({where: {read},include: User})
        }else{
            review = await all();
            
        }
        return res.json(review);
    }catch(e){
        next(e);
    }
});

router.put('/read', async (req, res, next) =>{
    try{
        console.log('holi')
        let {id} = req.query
    
        let read = await Review.update({read : true},{where: {id}})
    
        return res.json('success')

    }catch(err){
        next(err)
    }

    
});
router.put('/unread', async (req, res, next) =>{
    try{
        
        let {id} = req.query
        console.log('unread',id)
        let read = await Review.update({read : false},{where: {id}})
    
        return res.json('success')

    }catch(err){
        next(err)
    }

    
})

module.exports = router;