const express = require('express');
const router = express.Router();
const usercontroller = require('../Controllers/userController');
const middleware = require('../Middleware/authorization');


router.post('/register', usercontroller.register);
router.post('/login', usercontroller.login);
router.get('/protected', middleware.authorize, usercontroller.cont);

module.exports = router;