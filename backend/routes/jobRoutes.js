const express = require('express');
const router = express.Router();
const Job = require('../models/Job');
const {
    createJob,
    getAllJobs,
    updateJob,
    deleteJob
} = require('../controllers/jobController');

router.post('/', createJob);

router.get('/', getAllJobs);

router.put('/:id', updateJob);

router.delete('/:id', deleteJob);

module.exports = router;