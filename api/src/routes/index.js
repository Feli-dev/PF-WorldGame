const { Router } = require('express');

const router = Router();

const pays = require("./pays.js")
const user = require('./user.js');
const login = require('./login.js');
const games = require('./games.js');
const friend = require('./friend.js');
const countries = require("./countries.js");
const payment = require("./stripe.js");
const email = require("./email");
const review = require("./review");

router.use('/pays', pays)
router.use('/User', user);
router.use('/Login', login);
router.use('/friend', friend);
router.use('/games', games);
router.use("/countries", countries);
router.use("/payment", payment);
router.use("/Email", email);
router.use('/review', review);

module.exports = router;