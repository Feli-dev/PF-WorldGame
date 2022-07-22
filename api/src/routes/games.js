const { Router } = require('express');
const { Game } = require('../db.js');
const router = Router();
let {one, all} = require ('../controllers/game')

router.post('/', async(req, res, next) =>{

    try {
        const { countrie, winned, time, attempts, UserId, points } = req.body
        let game = await Game.create({ countrie, winned, time, attempts, UserId, points });
        game.setUser(UserId);
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