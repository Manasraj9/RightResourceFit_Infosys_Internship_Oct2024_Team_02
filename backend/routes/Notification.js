// routes/notifications.js
const mongoose = require('mongoose');
const express = require('express');
const Notification = require('../models/Notification');
const router = express.Router();

// Create a new notification
// Notification creation endpoint
router.post('/notifications', async (req, res) => {
    const { jobId, companyId, message } = req.body;

    // Validation
    if (!jobId || !companyId || !message) {
        return res.status(400).json({ success: false, error: 'Missing required fields' });
    }

    try {
        const newNotification = new Notification({
            jobId,
            companyId,
            message, // Your message here
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

// In routes/Notification.js or your relevant file
// Fetch notifications for a specific company
router.get('/notifications/:companyId', async (req, res) => {
    const { companyId } = req.params;

    try {
        // Fetch notifications by companyId
        const notifications = await Notification.find({ companyId });

        if (notifications.length === 0) {
            return res.status(404).json({ success: false, message: 'No notifications found for this company.' });
        }

        res.status(200).json(notifications);
    } catch (error) {
        console.error('Error fetching notifications:', error);
        res.status(500).json({ success: false, error: 'Failed to fetch notifications' });
    }
});


router.put('/notifications/:notificationId/read', async (req, res) => {
    const { notificationId } = req.params;

    try {
        const updatedNotification = await Notification.findByIdAndUpdate(
            notificationId,
            { isRead: true },
            { new: true }
        );

        res.status(200).json(updatedNotification);
    } catch (error) {
        console.error('Error marking notification as read:', error);
        res.status(500).json({ error: 'Failed to mark notification as read' });
    }
});

// In routes/Notification.js or relevant file
router.delete('/notifications/:notificationId', async (req, res) => {
    const { notificationId } = req.params;

    try {
        await Notification.findByIdAndDelete(notificationId);
        res.status(200).json({ message: 'Notification deleted successfully' });
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
        // Count total notifications for the given company ID
        const totalMessages = await Notification.countDocuments({ companyId });

        res.status(200).json({ companyId, totalMessages });
    } catch (err) {
        console.error('Error counting messages for company:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;

