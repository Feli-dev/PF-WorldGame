const { Router } = require('express');
const { User } = require('../db.js');
const { Op } = require('sequelize');

const router = Router();
router.post('/', async(req, res, next) =>{
    try{
        let create = await User.create(req.body);
        return res.json(create);
    } catch(e){ 
        next(e);
    }
});
router.put('/', async(req, res, next) =>{
    try{
        let {id} = req.body;
        let update = await User.update(req.body,{where:{id:req.body.id}});
        let get = await User.findAll({
            where:{
            id: id
            },
        });
        return res.json(get);
    } catch(e){ 
        next(e);
    }
});
router.get('/', async(req, res, next) =>{
    try{
        let {username, id} = req.body;

        // let get = await User.findAll({
        //     where:{
        //     [Op.like]: `${username}`
        //     },
        //     // include: User,
        // });
        let get = await User.findAll({
            where:{
            id:`${id}`,
            },
            // include: User,
        });
        return res.json(get);
    } catch(e){ 
        next(e);
    }
});
router.delete('/', async(req, res, next) =>{
    try{
        let {username, id} = req.body;
        // let deleted = await User.destroy({
        //     where: { 
        //         [Op.like]: username
        //     },
        //   });
        let deleted = await User.destroy({
            where: { id: id },
          });
        return res.json(deleted);
    } catch(e){ 
        next(e);
    }
});

module.exports = router;
