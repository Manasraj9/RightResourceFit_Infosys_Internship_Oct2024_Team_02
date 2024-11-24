const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const applicationController = require('../controllers/applicationcontroller');
const Application = require('../models/JobApplication');
const Job = require('../models/Jobs');
const JobApplication = require('../models/JobApplication');

// Route for submitting a job application
router.post('/apply/:jobId/:userId', applicationController.submitApplication);

// Route for getting all applications for a job
router.get('/applications', applicationController.getAllApplications);

router.delete('/applications/:id', applicationController.deleteApplications);

router.get('/applications/:id', applicationController.getApplicationById);

router.put('/applications/:id', applicationController.updateStatus);

router.get('/resume/:id', applicationController.getResumeByApplicationId);

router.get('/stats', applicationController.getApplicationStats);

router.get('/hasApplied/:userId/:jobId', async (req, res) => {
    const { userId, jobId } = req.params;
    try {
      const application = await Application.findOne({ userId, jobId });
      if (application) {
        return res.status(200).json({ applied: true });
      }
      return res.status(200).json({ applied: false });
    } catch (error) {
      res.status(500).json({ message: 'Error checking application status' });
    }
  });

  router.get('/user/:userId/applications', async (req, res) => {
    try {
        const userId = req.params.userId;
        console.log('Fetching applications for user:', userId);  // Add logging here
        
        const applications = await Application.find({ userId });
        console.log(applications);
        if (!applications || applications.length === 0) {
            return res.status(404).json({ message: 'No applications found for this user.' });
        }

        res.status(200).json(applications);
    } catch (error) {
        console.error('Error fetching applications:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


router.get('/applications/job/:jobId', async (req, res) => {
  const { jobId } = req.params;
  try {
    const applications = await JobApplication.find({ jobId });
    console.log("Applications fetched:", applications); // Log the applicants data
    res.json(applications);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching applications' });
  }
});



module.exports = router;
