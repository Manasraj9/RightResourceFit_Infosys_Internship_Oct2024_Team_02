const express = require('express');
const router = express.Router();
const { signup } = require('../controllers/authController');
const { login } = require('../controllers/authController');

// POST /signup
router.post('/', signup);

router.post('/login', login);

module.exports = router;
