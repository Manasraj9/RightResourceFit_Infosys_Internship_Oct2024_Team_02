// routes/notifications.js
const mongoose = require('mongoose');
const express = require('express');
const Notification = require('../models/Notification');
const CompanyProfile = require('../models/CompanyProfile');
const router = express.Router();

// Create a new notification
router.post('/notifications', async (req, res) => {
    const { jobId, companyId, message, type, userId } = req.body;

    // Validation
    if (!jobId || !companyId || !message || !type || !userId) {
        return res.status(400).json({ success: false, error: 'Missing required fields' });
    }

    if (!mongoose.Types.ObjectId.isValid(jobId) || 
        !mongoose.Types.ObjectId.isValid(companyId) || 
        !mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ success: false, error: 'Invalid ObjectId format' });
    }

    try {
        const newNotification = new Notification({
            jobId,
            companyId,
            message,
            type,
            userId,
        });

        const savedNotification = await newNotification.save();
        res.status(201).json({
            success: true,
            message: 'Notification created successfully.',
            data: savedNotification,
        });

    } catch (error) {
        console.error('Error creating notification:', error);
        res.status(500).json({ success: false, error: 'Failed to create notification' });
    }
});



router.get('/notifications/:companyId', async (req, res) => {
    const { companyId } = req.params;
    const { type } = req.query;

    // Validate companyId
    if (!mongoose.Types.ObjectId.isValid(companyId)) {
        return res.status(400).json({ message: 'Invalid company ID format' });
    }

    try {
        const query = { companyId };
        if (type) query.type = type;  // Add type filter if provided

        const notifications = await Notification.find(query);

        if (!notifications.length) {
            return res.status(404).json({ message: 'No notifications found for this company and type' });
        }

        res.status(200).json(notifications);
    } catch (error) {
        console.error('Error fetching notifications:', error);
        res.status(500).json({ message: 'Failed to fetch notifications' });
    }
});

router.put('/notifications/:notificationId/read', async (req, res) => {
    const { notificationId } = req.params;

    // Validate notificationId
    if (!mongoose.Types.ObjectId.isValid(notificationId)) {
        return res.status(400).json({ success: false, message: 'Invalid notification ID format' });
    }

    try {
        const updatedNotification = await Notification.findByIdAndUpdate(
            notificationId,
            { isRead: true },
            { new: true }
        );

        if (!updatedNotification) {
            return res.status(404).json({ success: false, message: 'Notification not found' });
        }

        res.status(200).json(updatedNotification);
    } catch (error) {
        console.error('Error marking notification as read:', error);
        res.status(500).json({ error: 'Failed to mark notification as read' });
    }
});


// In routes/Notification.js or relevant file
router.delete('/notifications/:notificationId', async (req, res) => {
    const { notificationId } = req.params;

    // Validate notificationId
    if (!mongoose.Types.ObjectId.isValid(notificationId)) {
        return res.status(400).json({ success: false, message: 'Invalid notification ID format' });
    }

    try {
        const deletedNotification = await Notification.findByIdAndDelete(notificationId);

        if (!deletedNotification) {
            return res.status(404).json({ success: false, message: 'Notification not found' });
        }

        res.status(200).json({ success: true, message: 'Notification deleted successfully' });
    } catch (error) {
        console.error('Error deleting notification:', error);
        res.status(500).json({ error: 'Failed to delete notification' });
    }
});


router.get('/count/:companyId', async (req, res) => {
    const { companyId } = req.params;

    // Validate if `companyId` is provided
    if (!mongoose.Types.ObjectId.isValid(companyId)) {
        return res.status(400).json({ message: 'Invalid company ID format' });
    }

    try {
        // Count total notifications for the given company ID and type 'status-update'
        const totalMessages = await Notification.countDocuments({
            companyId,
            type: 'status-update'  // Filter by the 'status-update' type
        });

        res.status(200).json({ companyId, totalMessages });
    } catch (err) {
        console.error('Error counting messages for company:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.get('/user-notifications', async (req, res) => {
    const { userId, type, page = 1, limit = 10 } = req.query;  // Get page and limit params, defaulting to page 1 and limit 10

    // Validate if `userId` is provided and is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ message: 'Invalid user ID format' });
    }

    try {
        // Create the query object based on userId and type
        const query = { userId };
        if (type) query.type = type;  // Add type filter if provided

        // Fetch notifications with pagination
        const notifications = await Notification.find(query)
            .skip((page - 1) * limit)  // Skip notifications for previous pages
            .limit(limit);  // Limit the number of results

        if (!notifications.length) {
            return res.status(404).json({ message: 'No notifications found for this user and type' });
        }

        res.status(200).json(notifications);
    } catch (error) {
        console.error('Error fetching notifications:', error);
        res.status(500).json({ message: 'Failed to fetch notifications' });
    }
});


router.get('/messages/count/:userId', async (req, res) => {
    const { userId } = req.params;
  
    try {
      const messageCount = await Message.countDocuments({ recipientId: userId });
      res.json({ count: messageCount });
    } catch (error) {
      console.error('Error fetching message count:', error);
      res.status(500).json({ message: 'Error fetching message count' });
    }
  });


module.exports = router;

