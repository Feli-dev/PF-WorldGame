const { Router } = require('express');
const { Game } = require('../db.js');
const router = Router();
let {one, all} = require ('../controllers/game')
let _id = 0;

router.post('/', async(req, res, next) =>{

    try {
        
        let game = await Game.create(req.body);
        let {user} = req.body;
        _id++;
        user.id = _id;
        game.setUser(user);
        return res.json(game);

    }catch(e){

        next(e);

    }
});

router.get('/', async(req, res, next) =>{

    try {

        let game;
        
        if(req.body.id){
            let {id} = req.body;
            game = await one(id, Game);
        }else{
            game = await all(Game);
        }

        return res.json(game);

    }catch(e){

        next(e);

    }
});

module.exports = router;