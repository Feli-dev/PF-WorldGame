const { Router } = require('express');

const router = Router();

const user = require('./user.js');
const login = require('./login.js');
const games = require('./games.js');
const friends = require('./friends.js');
const countries = require("./countries.js");

router.use('/User', user);
router.use('/Login', login);
router.use('/friends', friends);
router.use('/games', games);
router.use("/countries", countries);

module.exports = router;