const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationcontroller');
const Application = require('../models/JobApplication');






// Route for submitting a job application
router.post('/apply/:jobId', applicationController.submitApplication);

// Route for getting all applications for a job
router.get('/applications', applicationController.getAllApplications);

router.delete('/applications/:id', applicationController.deleteApplications);

router.get('/applications/:id', applicationController.getApplicationById);

router.put('/applications/:id', applicationController.updateStatus);

router.get('/resume/:id', applicationController.getResumeByApplicationId);

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

module.exports = router;
