const mongoose = require('mongoose');

const jobApplicationSchema = new mongoose.Schema({
    jobId: {
        type: mongoose.Schema.Types.ObjectId, // Assuming jobId is a reference to the Job model
        ref: 'Job', // This would link to the Job model, if you have one
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    jobTitle: {
        type: String,
        required: true
    },
    linkedin: String,
    portfolio: String,
    additionalInfo: String,
    resume: String,  // Path to the uploaded resume file
}, {
    timestamps: true
});

const JobApplication = mongoose.model('JobApplication', jobApplicationSchema);
module.exports = JobApplication;

