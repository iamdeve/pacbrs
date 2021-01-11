const express = require('express');
const router = express.Router();
const userController = require('../controllers/auth');

router.post('/signup', [userController.signUpValidator], userController.signupWithEmail);
router.post('/login',[userController.loginValidator],userController.loginWithEmail);

module.exports = router;
