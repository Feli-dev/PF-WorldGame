const axios = require('axios');
const {Review, User} = require('../db');

let controller = {};

controller.all = async () => {
    let review = await Review.findAll({
        include: User
    });
    return review;
}

controller.one = async (id, userId) => {
    let review;
    if(userId){
        console.log("aca")
        review = await Review.findAll({
            where:{
                UserId: userId,
            },
            include: User
        });
    } else {
        review = await Review.findAll({
            where:{
                id: id,
            },
            include: User
        });
    }
    return review;
}

module.exports = controller; 