const mongoose = require('mongoose');
const Job = require('../config/dbJob'); 
const Company = require('./CompanyProfile'); // Reference to the company collection
const User = require('./User');  // Reference to the User collection (for the applicant)

const notificationSchema = new mongoose.Schema({
  type: {
    type: String,
    enum: ['status-update', 'new-message', 'application-feedback'], // Enum for different types of notifications
    required: true,  // Field is required
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,  // Assuming userId is an ObjectId
    ref: 'User', // Reference to the User model (the applicant)
    required: true,  // Field is required
  },
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Job', // Reference to the Job model
    required: true,
  },
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company', // Reference to the Company model (employer)
    required: true,
  },
  message: {
    type: String,  // Message to notify applicant/employer
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,  // Automatically set to current date
  },
  isRead: { 
    type: Boolean, 
    default: false,  // Default is false (notification unread)
  },
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
