const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationcontroller');


// Route for submitting a job application
router.post('/apply/:jobId', applicationController.submitApplication);

// Route for getting all applications for a job
// router.get('/:jobId/applications', getApplicationsForJob);

module.exports = router;
