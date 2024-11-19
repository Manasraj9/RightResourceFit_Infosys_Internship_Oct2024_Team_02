const jobSeekerProfileSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    resume: { type: String, required: true }, // URL to the resume
    skills: [{ type: String }], // Array of skills
    experience: [{ 
        jobTitle: String,
        company: String,
        startDate: Date,
        endDate: Date,
        description: String
    }]
});

export default mongoose.model('JobSeekerProfile', jobSeekerProfileSchema);
