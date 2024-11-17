const JobApplication = require('../models/JobApplication');
const Notification = require('../models/Notifications');

// Update the job application status and update the related notification
const updateJobApplicationStatus = async (req, res) => {
  try {
    const { applicationId } = req.params; // Extract the applicationId from the route parameter
    const { status } = req.body; // The new status (e.g., 'accepted', 'rejected', etc.)

    // Check if the status is provided and valid
    if (!status) {
      return res.status(400).json({ error: 'Status is required' });
    }

    // Find the job application by its ID and update the status
    const updatedApplication = await JobApplication.findByIdAndUpdate(
      applicationId, // Find the job application by its ID
      { status }, // Update the status field
      { new: true } // Return the updated document
    );

    if (!updatedApplication) {
      return res.status(404).json({ error: 'Job application not found' });
    }

    // Send a success response with the updated application
    res.status(200).json(updatedApplication);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error updating job application status' });
  }
};

const getNotifications = async (req, res) => {
  try {
    const { userId } = req.params; // Extract userId from route params

    // Find all notifications related to the user
    const notifications = await Notification.find({ userId }).sort({ createdAt: -1 });

    if (!notifications.length) {
      return res.status(404).json({ message: 'No notifications found for this user' });
    }

    return res.status(200).json(notifications);
  } catch (error) {
    console.error('Error fetching notifications:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

// Controller to mark a notification as read
const markAsRead = async (req, res) => {
  try {
    const { notificationId } = req.params; // Extract notificationId from route params

    // Find the notification by ID
    const notification = await Notification.findById(notificationId);

    if (!notification) {
      return res.status(404).json({ message: 'Notification not found' });
    }

    // Mark the notification as read
    notification.status = 'read'; // Assuming you have a `status` field for read/unread state
    await notification.save();

    return res.status(200).json({ message: 'Notification marked as read' });
  } catch (error) {
    console.error('Error marking notification as read:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  updateJobApplicationStatus, getNotifications,
  markAsRead,
};
