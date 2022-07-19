const { Router } = require('express');

const router = Router();

const user = require('./user.js');
const login = require('./login.js');
const games = require('./games.js');

router.use('/User', user);
router.use('/Login', login);
router.use('/games', games);

module.exports = router;