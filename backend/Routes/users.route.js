const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');

const tokenAuth = require('../middlewares/user.middleware');

router.post('/register', userController.addUser);
router.post('/login', userController.loginUser);
router.get('/:id', userController.findUserById);
router.get('/', tokenAuth.adminAuthenticate, userController.getAllUsers);
module.exports = router;