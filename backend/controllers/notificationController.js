const Notification = require('../models/Notifications');

// Create a new notification
const createNotification = async (req, res) => {
  try {
    const { userId, type, message, jobId } = req.body;

    const notification = new Notification({
      userId,
      type,
      message,
      jobId,
    });

    await notification.save();
    res.status(201).json({ message: 'Notification created', notification });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create notification' });
  }
};

// Get all notifications for a user
const getNotifications = async (req, res) => {
  try {
    const { userId } = req.params;
    const notifications = await Notification.find({ userId }).sort({ createdAt: -1 });
    res.status(200).json(notifications);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch notifications' });
  }
};

// Mark a notification as read
const markAsRead = async (req, res) => {
  try {
    const { notificationId } = req.params;
    const notification = await Notification.findByIdAndUpdate(
      notificationId,
      { isRead: true },
      { new: true }
    );

    if (!notification) {
      return res.status(404).json({ error: 'Notification not found' });
    }

    res.status(200).json({ message: 'Notification marked as read', notification });
  } catch (error) {
    res.status(500).json({ error: 'Failed to mark notification as read' });
  }
};

module.exports = { createNotification, getNotifications, markAsRead };
