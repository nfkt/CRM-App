const express = require('express');
const router = express.Router();
const userController = require('../Controller/user.controller');

const tokenAuth = require('../Middlewares/user.middleware');

router.post('/register', userController.addUser);
router.post('/login', userController.loginUser);
router.get('/:id', userController.findUserById);
router.get('/', tokenAuth.adminAuthenticate, userController.getAllUsers);
module.exports = router;