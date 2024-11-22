// controllers/jobController.js
const Job = require('../models/Jobs');

// Create a new job posting
exports.createJob = async (req, res) => {
  console.log("Incoming data:", req.body);  // Log the request body for debugging
  try {
    const { companyId, title, joblocations, employmentType, salaryRange, skills, description, responsibilities, qualifications, niceToHaves, perks,status } = req.body;

    // Check if any required fields are missing
    if (!companyId || !title || !joblocations || !skills || !description || !salaryRange) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const job = new Job({
      companyId,
      title,
      joblocations,
      employmentType,
      salaryRange,
      skills,
      description,
      responsibilities,
      qualifications,
      niceToHaves,
      perks,
      status
    });

    await job.save();
    res.status(201).json(job);
  } catch (error) {
    console.error("Error creating job:", error);
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
    console.log('Job fetched:', job); // Log job data

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

// Function to fetch jobs with optional "show all" filter
exports.fetchJobs = async (req, res) => {
  const showAll = req.query.all === 'true';
  try {
    const jobs = showAll
      ? await Job.find() // Fetch all jobs
      : await Job.find({ isActive: true }); // Fetch only active jobs

    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching jobs' });
  }
};

exports.toggleJobStatus = async (req, res) => {
  const { jobId } = req.params;  // <-- Extract jobId from the route
  console.log("Received jobId in controller:", jobId);  // Log the received jobId

  try {
    // Log the attempt to find the job by ID
    console.log("Attempting to find job with ID:", jobId);
    
    const job = await Job.findById(jobId);
    if (!job) {
      console.log("Job not found with ID:", jobId);  // Log if the job is not found
      return res.status(404).json({ message: 'Job not found' });
    }

    // Log before updating job status
    console.log("Current job status:", job.status);
    
    // Toggle job status
    job.status = job.status === 'open' ? 'closed' : 'open';
    await job.save();

    // Log the updated job status
    console.log("Updated job status:", job.status);

    return res.status(200).json({ job });
  } catch (error) {
    // Log the error if something goes wrong
    console.error("Error updating job status:", error);
    return res.status(500).json({ message: 'Failed to update job status' });
  }
};