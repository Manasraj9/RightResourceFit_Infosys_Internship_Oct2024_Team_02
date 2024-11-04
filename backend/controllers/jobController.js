// controllers/jobController.js
const Job = require('../models/Jobs');

// Create a new job posting
exports.createJob = async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.status(201).json(job);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all job postings
// Get all job postings with optional filters
exports.getAllJobs = async (req, res) => {
  const { title, location, skills } = req.query;
    const skillsArray = skills ? skills.split(',') : [];
    
    let filter = {};
    if (title) filter.title = title; // Exact match on title
    if (location) {
        filter.location = new RegExp(location, 'i'); // Case insensitive match
    }
    if (skillsArray.length > 0) {
        filter.skills = { $all: skillsArray }; // Match all skills in the array
    }

    console.log("Filter being applied:", filter); // Debugging log

    try {
        const jobs = await Job.find(filter);
        console.log("Jobs fetched:", jobs); // Log fetched jobs
        res.json(jobs);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching jobs' });
    }
};


// Get a job by ID
exports.getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) return res.status(404).json({ message: 'Job not found' });
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateJob = async (req, res) => {
  try {
      const jobId = req.params.id; // or req.body.id depending on your setup
      const updatedJob = await Job.findByIdAndUpdate(jobId, req.body, { new: true });
      if (!updatedJob) {
          return res.status(404).send('Job not found');
      }
      res.status(200).json(updatedJob);
  } catch (error) {
      res.status(500).send(error.message);
  }
};



// Delete a job posting
exports.deleteJob = async (req, res) => {
  console.log("Attempting to delete job with ID:", req.params.id); // Debugging log
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) {
      return res.status(404).json({ message: 'Job not found' });
    }
    res.status(200).json({ message: 'Job deleted successfully' });
  } catch (error) {
    console.error("Error deleting job:", error); // Log error for debugging
    res.status(500).json({ message: 'Internal server error' });
  }
};