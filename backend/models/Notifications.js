const mongoose = require('mongoose');
const notificationDb = require('../config/dbnotifications');

const notificationSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  type: {
    type: String,
    enum: ['hiring-update', 'shortlist-update', 'new-application'],
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  isRead: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job',
    required: true,
  },
});

// Use the notificationDb connection to define the Notification model
const Notification = notificationDb.model('Notification', notificationSchema);
module.exports = Notification;

