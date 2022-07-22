const axios = require('axios');
const {Game} = require('../db');

let controller = {};

controller.all = async (Game) => {
    let game = await Game.findAll();
    return game;
}

controller.one = async (id,Game) => {
    let game = await Game.findAll({
        where:{
            id:id,
        }
    });
    console.log(id,game);
    return game;

}

module.exports = controller; 