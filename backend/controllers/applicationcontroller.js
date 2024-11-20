const JobApplication = require('../models/JobApplication');
const Job = require('../models/Jobs');
const User = require('../models/User');

const multer = require('multer');
const mongoose = require('mongoose');

// Set up multer storage (store in memory)
const storage = multer.memoryStorage();

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        // Allow only PDF files
        if (file.mimetype === 'application/pdf') {
            cb(null, true);
        } else {
            cb(new Error('Only PDF files are allowed'), false);
        }
    },
}).single('resume');

// Handle job application submission
exports.submitApplication = async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            console.error('Multer Error:', err);
            return res.status(400).json({ message: err.message || 'Error uploading the file' });
        }

        try {
            const { jobId, userId } = req.params;
            const { fullName, email, phone, jobTitle, linkedin, portfolio, additionalInfo } = req.body;
            const resumeBuffer = req.file ? req.file.buffer : null;

            // Debug logs for incoming data
            console.log('Job ID:', jobId);
            console.log('Request Body:', req.body);
            console.log('Uploaded File:', req.file);

            // Validate required fields
            if (!jobId || !fullName || !email || !resumeBuffer) {
                return res.status(400).json({ message: 'Missing required fields.' });
            }

            // Check for duplicate application
            const existingApplication = await JobApplication.findOne({ jobId, email });
            if (existingApplication) {
                return res.status(400).json({ message: 'You have already applied for this job.' });
            }

            // Save the new application
            const application = new JobApplication({
                jobId,
                userId,
                fullName,
                email,
                phone,
                jobTitle,
                linkedin,
                portfolio,
                additionalInfo,
                resume: resumeBuffer,
            });

            await application.save();

            console.log('Application saved successfully:', application);
            res.status(201).json({ message: 'Application submitted successfully' });
        } catch (error) {
            console.error('Error submitting application:', error);
            res.status(500).json({ message: 'Error submitting application' });
        }
    });
};

// Get all job applications
exports.getAllApplications = async (req, res) => {
    try {
        const applications = await JobApplication.find(); // Fetch all documents from the collection
        res.status(200).json(applications); // Send the applications as JSON
    } catch (err) {
        console.error('Error fetching all applications:', err);
        res.status(500).json({ message: 'Error fetching all applications' });
    }
};

exports.deleteApplications = async (req, res) => {
    try {
        const { id } = req.params; // Get application ID from the request parameters

        // Find the application by ID and delete it
        const deletedApplication = await JobApplication.findByIdAndDelete(id);

        if (!deletedApplication) {
            return res.status(404).send('Application not found');
        }

        res.status(200).json({ message: 'Application deleted successfully' });
    } catch (error) {
        console.error('Error deleting application:', error);
        res.status(500).send('Error deleting application');
    }
};

exports.getApplicationById = async (req, res) => {
    try {
        const applicantId = req.params.id;

        // Validate if the provided ID is a valid MongoDB ObjectId
        if (!mongoose.Types.ObjectId.isValid(applicantId)) {
            return res.status(400).json({ message: 'Invalid applicant ID format' });
        }

        // Fetch applicant by ID from the database using JobApplication model
        const applicant = await JobApplication.findById(applicantId); 

        // If no applicant is found, send a 404 response
        if (!applicant) {
            return res.status(404).json({ message: 'Applicant not found with the provided ID' });
        }

        // Send the applicant data as JSON if found
        res.status(200).json(applicant);
    } catch (err) {
        // Log the error for debugging purposes and send a 500 response
        console.error('Error fetching applicant by ID:', err.message);
        res.status(500).json({ message: 'An error occurred while fetching applicant data. Please try again later.' });
    }
};

exports.updateStatus = async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
  
    // Check if the provided ID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send('Invalid ObjectId format');
    }
  
    try {
      // Proceed with the update
      const jobApplication = await JobApplication.findByIdAndUpdate(id, { status }, { new: true });
  
      if (!jobApplication) {
        return res.status(404).send('Application not found');
      }
  
      res.status(200).json(jobApplication);
    } catch (error) {
      console.error('Error updating status:', error);
      res.status(500).send('Error updating status');
    }
  };

  exports.getResumeByApplicationId = async (req, res) => {
    try {
        const application = await JobApplication.findById(req.params.id);
        if (!application) {
          return res.status(404).send('Application not found');
        }
    
        // Assuming resume is stored as a Buffer in the 'resume' field
        const resumeBuffer = application.resume; // Buffer containing the PDF
        
        if (!resumeBuffer) {
          return res.status(404).send('Resume not found');
        }
    
        // Set appropriate headers for PDF response
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'inline; filename="resume.pdf"');
        
        // Send the resume buffer as a response
        res.send(resumeBuffer);
      } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
      }
    };