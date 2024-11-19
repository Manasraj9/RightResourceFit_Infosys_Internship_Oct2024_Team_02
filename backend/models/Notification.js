const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the User model
        required: true,
    },
    fullName: { // Changed applicantName to fullName
        type: String,
        required: true,
    },
    jobTitle: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    jobId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job', // Reference to the Job model
        required: true,
    },
    jobApplicationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'JobApplication', // Reference to the JobApplication model
        required: true,
    },
    read: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;


