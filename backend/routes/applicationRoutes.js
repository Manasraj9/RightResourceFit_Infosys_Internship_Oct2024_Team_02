const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationcontroller');






// Route for submitting a job application
router.post('/apply/:jobId', applicationController.submitApplication);

// Route for getting all applications for a job
router.get('/applications', applicationController.getAllApplications);

router.delete('/applications/:id', applicationController.deleteApplications);

router.get('/applications/:id', applicationController.getApplicationById);

router.put('/applications/:id', applicationController.updateStatus);

router.get('/resume/:id', applicationController.getResumeByApplicationId);

module.exports = router;
