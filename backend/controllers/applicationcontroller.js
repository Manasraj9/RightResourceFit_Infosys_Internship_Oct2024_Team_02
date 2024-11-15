const JobApplication = require('../models/JobApplication');
const multer = require('multer');
const path = require('path');

// Set up multer storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'C:/Users/manas/OneDrive/Desktop/Right resource fit/uploads/resumes');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Unique file name based on timestamp
    },
});

const upload = multer({ storage: storage }).single('resume');

// Handle job application submission
exports.submitApplication = async (req, res) => {
    // Handle the file upload using multer
    upload(req, res, async (err) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Error uploading the file' });
        }

        try {
            const { jobId } = req.params; // Get the jobId from the URL parameter
            const { fullName, email, phone, jobTitle, linkedin, portfolio, additionalInfo } = req.body; // Get other form data
            const resumePath = req.file ? req.file.path : null; // Save the path of the uploaded resume

            // Create a new job application with the jobId and other details
            const application = new JobApplication({
                jobId, // Save the jobId in the application
                fullName,
                email,
                phone,
                jobTitle,
                linkedin,  // Ensure linkedin is passed from frontend
                portfolio, // Ensure portfolio is passed from frontend
                additionalInfo, 
                resume: resumePath, // Save the resume file path
            });

            // Save the application to the database
            await application.save();

            res.status(201).json({ message: 'Application submitted successfully' });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Error submitting application' });
        }
    });
};

// Get all applications for a specific job
exports.getApplicationsForJob = async (req, res) => {
    try {
        const applications = await JobApplication.find({ jobId: req.params.jobId }); // Get applications for the specific jobId
        res.status(200).json(applications);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Error fetching applications' });
    }
};
