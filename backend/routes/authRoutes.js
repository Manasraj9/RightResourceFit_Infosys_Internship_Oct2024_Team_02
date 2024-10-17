const express = require('express');
const router = express.Router();
const { signup } = require('../controllers/authController');

// POST /signup
router.post('/', signup);

module.exports = router;
