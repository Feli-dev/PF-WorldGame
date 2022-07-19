const { Router } = require('express');
const user = require('./user.js');

const login = require('./login.js');

const router = Router();
router.use('/User', user);
router.use('/Login', login);


module.exports = router;