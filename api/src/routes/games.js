const { Router } = require('express');
const { Game } = require('../db.js');
let {Percentage} = require('../Tools/Percentage');
const router = Router();
let {one, all} = require ('../controllers/game')

router.post('/', async(req, res, next) =>{

    try {
        let { countrie, winned, time, attempts, UserId, points } = req.body;
        if(winned === false){
            points = 0;
        } else {
            points = Percentage(attempts, points);
        }
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