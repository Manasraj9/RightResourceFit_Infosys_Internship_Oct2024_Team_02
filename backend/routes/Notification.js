// routes/notifications.js

const express = require('express');
const Notification = require('../models/Notification');
const router = express.Router();
const mongoose = require('mongoose');


// Create a new notification
// Create a new notification
const JobApplication = require('../models/JobApplication');  // Assuming you have this model     // Notification model

router.post('/notifications', async (req, res) => {
    const { userId, jobId, fullName, jobTitle } = req.body;

    // Check if required fields are present
    if (!userId || !jobId || !fullName || !jobTitle) {
        return res.status(400).json({ error: "Missing required fields" });
    }

    try {
        // Step 2: Create job application
        const jobApplication = new JobApplication({
            userId,
            jobId,
            fullName, // Use fullName instead of applicantName
        });

        // Save the job application to the database
        await jobApplication.save();

        // Step 3: Create notification message
        const message = `${fullName} has applied for the job "${jobTitle}".`; // Use fullName in the message

        // Step 4: Create the notification
        const newNotification = new Notification({
            userId: jobId,  // The employer should receive the notification
            fullName, // Store the full name in the notification
            jobTitle,
            message,
            jobId,
            jobApplicationId: jobApplication._id,  // Link to the job application
            type: 'job-application',  // Type of notification
        });

        // Step 5: Save the notification to the database
        await newNotification.save();

        // Respond with success message
        res.status(201).json({ success: true, message: 'Application submitted and notification created.' });

    } catch (error) {
        console.error('Error applying for job and creating notification:', error);
        res.status(500).json({ error: 'Failed to apply for job or create notification' });
    }
});





// Get notifications for a user
// Assuming the route is something like '/notifications/:userId'
router.get('/notifications/:userId', async (req, res) => {
    const { userId } = req.params;  // Extract userId from the route params

    try {
        // Make sure the userId is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: 'Invalid userId' });
        }

        const notifications = await Notification.find({ userId: userId });  // Pass userId to the query

        res.json(notifications);  // Send back the notifications
    } catch (error) {
        console.error('Error fetching notifications:', error);
        res.status(500).json({ message: 'Error fetching notifications' });
    }
});



module.exports = router;
