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

router.patch('/jobs/toggle-status/:jobId', (req, res, next) => {
    console.log("PATCH request received to toggle status for jobId:", req.params.jobId);  // <-- Log the jobId
    next();  // Continue to the controller
  }, jobController.toggleJobStatus);

module.exports = router;
