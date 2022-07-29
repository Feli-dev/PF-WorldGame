const { Router } = require('express');
const { Review } = require('../db.js');
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
        console.log(id, userId)
        if(id||userId){
            review = await one(id, userId);
        }else{
            review = await all();
        }
        return res.json(review);
    }catch(e){
        next(e);
    }
});

module.exports = router;