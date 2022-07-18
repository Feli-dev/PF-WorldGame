const { Router } = require('express');
const user = require('./user.js');

const router = Router();
router.use('/User', user);

module.exports = router;