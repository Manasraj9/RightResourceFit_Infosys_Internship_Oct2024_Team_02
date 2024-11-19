
const express = require('express');
const router = express.Router();
const {
    signup,
    login,
    sendOTP,
    verifyOTP,
    logout,
} = require('../controllers/authController');

router.post('/signup', signup);              // signup route
router.post('/login', login);                // login route
router.post('/send-otp', sendOTP);           // send OTP route
router.post('/verify-otp', verifyOTP);       // verify OTP route
router.post('/logout', logout);              // logout route
module.exports = router;