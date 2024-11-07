// routes/jobRoutes.js
const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

// Route to create a job posting
router.post('/jobs', jobController.createJob);

// Route to get all job postings
router.get('/jobs', jobController.getAllJobs);

// Route to get a specific job posting by ID
router.get('/jobs/:id', jobController.getJobById);

// Route to update a job posting
router.put('/jobs/:id', jobController.updateJob);

// Route to delete a job posting
router.delete('/jobs/:id', jobController.deleteJob);




module.exports = router;
