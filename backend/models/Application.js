const applicationSchema = new mongoose.Schema({
    jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
    applicantId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Reference to the job seeker
    resumeLink: { type: String, required: true }, // URL link to the applicant's resume
    coverLetter: { type: String }, // Optional cover letter content
    status: { type: String, enum: ['Pending', 'Viewed', 'Interview', 'Hired', 'Rejected'], default: 'Pending' },
    appliedAt: { type: Date, default: Date.now }
});

export default mongoose.model('Application', applicationSchema);
