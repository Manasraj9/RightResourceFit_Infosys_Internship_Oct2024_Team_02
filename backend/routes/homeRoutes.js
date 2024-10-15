const express = require('express');
const router = express.Router();
const homeControllers = require('../controllers/homeControllers');

router.get('/home', homeControllers.getHome);

module.exports = router; 