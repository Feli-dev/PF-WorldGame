const { Router } = require('express');
const games = require('./games.js');

const router = Router();
router.use('/games', games);

module.exports = router;