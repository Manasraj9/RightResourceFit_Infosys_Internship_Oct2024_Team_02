const express = require('express');
const router = express.Router();
const { createNotification, getNotifications, markAsRead, updateJobApplicationStatus } = require('../controllers/notificationController');

// Route to create a new notification (optional if needed in the future)
// router.post('/notifications', createNotification);

// Route to get all notifications for a user
router.get('/notifications/:userId', getNotifications);

// Route to mark a notification as read
router.put('/notifications/:notificationId/read', markAsRead);


// You can pass the application ID and new status in the request body
router.put('/jobApplication/:applicationId/status', updateJobApplicationStatus);

module.exports = router;
