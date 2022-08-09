const { Router } = require('express');
const friend = require('../controllers/Friends/Friends');

const router = Router();
const path = "api/src/routes/friend.js";

router.get('/', async(req, res) =>{
    try {
        return await friend.select()
        .then(result => {
            if(result.hasOwnProperty("Error")) return res.status(404).json(result);
            return res.status(200).json(result);
        })
        .catch(error => {
            return res.status(404).json({ Error: error, Request: "Fallo el proceso de get", Ruta: path, Router: "get" });
        });
    } catch (error) {
        return res.status(404).json({ Error: error, Request: "Fallo la ruta get", Ruta: path, Router: "get" });
    }
});

router.post('/', async(req, res) =>{
    try {
        const { UserId, FriendId } = req.body;
        return await friend.create(UserId || 0, FriendId || 0)
        .then(result => {
            if(result.hasOwnProperty("Error")) return res.status(404).json(result);
            return res.status(200).json(result);
        })
        .catch(error => {
            return res.status(404).json({ Error: error, Request: "Fallo el proceso de post", Ruta: path, Router: "post" });
        });
    } catch (error) {
        return res.status(404).json({ Error: error, Request: "Fallo la ruta post", Ruta: path, Router: "post" });
    }
});

router.delete('/', async(req, res) =>{
    try {
        const UserId = parseInt( req.query.UserId)
        const FriendId = parseInt( req.query.FriendId)

        return await friend.delete(UserId || 0, FriendId || 0)
        .then(result => {
            if(result.hasOwnProperty("Error")) return res.status(404).json(result);
            return res.status(200).json(result);
        })
        .catch(error => {
            return res.status(404).json({ Error: error, Request: "Fallo el proceso de put", Ruta: path, Router: "delete" });
        });
    } catch (error) {
        return res.status(404).json({ Error: error, Request: "Fallo la ruta put", Ruta: path, Router: "delete" });
    }
});

module.exports = router;