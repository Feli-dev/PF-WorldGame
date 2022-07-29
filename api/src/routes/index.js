const { Router } = require('express');

const router = Router();

const user = require('./user.js');
const login = require('./login.js');
const games = require('./games.js');
const friend = require('./friend.js');
const countries = require("./countries.js");
const payment = require("./stripe.js");
const email = require("./email");


router.use('/User', user);
router.use('/Login', login);
router.use('/friend', friend);
router.use('/games', games);
router.use("/countries", countries);
router.use("/payment", payment);
router.use("/Email", email);

module.exports = router;