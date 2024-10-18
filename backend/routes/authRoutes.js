const express = require('express');
const router = express.Router();
const { signup } = require('../controllers/authController');
const { login } = require('../controllers/authController');

router.post('/signup', signup);

router.post('/login', login);

//router.post('/resetpassword', resetpassword)

//router.post ('/otpverify', otpverify)

module.exports = router;
