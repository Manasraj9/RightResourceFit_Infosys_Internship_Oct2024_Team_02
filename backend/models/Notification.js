const mongoose = require('mongoose');
const Job = require('../config/dbJob'); 
const Company = require('./CompanyProfile'); // Reference to the company collection

const notificationSchema = new mongoose.Schema({
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
        type: String,  // Message to notify employer (you might add a custom message in the future)
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    isRead: { type: Boolean, default: false },
});


const Notification = mongoose.model('Notification', notificationSchema);

module.exports = Notification;
