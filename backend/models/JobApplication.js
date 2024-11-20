const mongoose = require('mongoose');
const User = require('../models/User');

const JobApplicationSchema = new mongoose.Schema({
    jobId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job', // Reference to the Job model
      },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Reference to the Job model
      },
      
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    jobTitle: { type: String },
    linkedin: { type: String },
    portfolio: { type: String },
    additionalInfo: { type: String },
    status: { 
        type: String, 
        enum: ['Applied', 'Under Review', 'Shortlisted', 'Rejected', 'Offered'], 
        default: 'Applied' 
    },
    resume: { type: Buffer }, // Resume as a buffer
}, { timestamps: true });

module.exports = mongoose.model('JobApplication', JobApplicationSchema);

