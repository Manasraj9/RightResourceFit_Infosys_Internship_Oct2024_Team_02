const express = require('express');
const router = express.Router();
const { createNotification, getNotifications, markAsRead } = require('../controllers/notificationController');

// Route to create a new notification
router.post('/notifications', createNotification);

// Route to get all notifications for a user
router.get('/notifications/:userId', getNotifications);

// Route to mark a notification as read
router.put('/notifications/:notificationId/read', markAsRead);

module.exports = router;
