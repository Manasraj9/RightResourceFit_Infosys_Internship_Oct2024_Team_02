const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const applicationController = require('../controllers/applicationcontroller');
const Application = require('../models/JobApplication');
const Job = require('../models/Jobs');
const Notification = require('../models/Notification');
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

router.put('/jobapplications/:applicationId/status', async (req, res) => {
  const { applicationId } = req.params;
  const { status } = req.body;  // New status to be set

  try {
      // Find the job application by its ID
      const jobApplication = await JobApplication.findById(applicationId);

      if (!jobApplication) {
          return res.status(404).json({ error: 'Job application not found' });
      }

      // Update the status of the application
      jobApplication.status = status;
      await jobApplication.save();

      // Send a notification to the employer about the status change
      const notification = new Notification({
          jobId: jobApplication.jobId,
          companyId: jobApplication.companyId,
          message: `The status of your application for the job has changed to ${status}.`,
      });

      await notification.save();

      // Return the updated job application and the notification
      res.status(200).json({ jobApplication, notification });
  } catch (error) {
      console.error('Error updating application status or sending notification:', error);
      res.status(500).json({ error: 'Internal server error' });
  }
});

router.get('/applications/count/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const applicationCount = await JobApplication.countDocuments({ userId });
    res.json({ count: applicationCount });
  } catch (error) {
    console.error('Error fetching application count:', error);
    res.status(500).json({ message: 'Error fetching application count' });
  }
});

module.exports = router;
