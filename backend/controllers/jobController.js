const createJob = async (req, res) => {
    try {
      const { title, description, employmentType, workingSchedule, salary, multipleCandidates } = req.body;
      const newJob = new Job({
        title,
        description,
        employmentType,
        workingSchedule,
        salary,
        multipleCandidates
      });
      const savedJob = await newJob.save();
      res.status(201).json(savedJob);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create job posting' });
    }
};

const getAllJobs = async (req, res) => {
    try {
      const jobs = await Job.find();
      res.json(jobs);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch job postings' });
    }
};

const updateJob = async (req, res) => {
    try {
      const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedJob);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update job posting' });
    }
};

const deleteJob = async (req, res) => {
    try {
      await Job.findByIdAndDelete(req.params.id);
      res.json({ message: 'Job posting deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete job posting' });
    }
};

module.exports = {
    createJob,
    getAllJobs,
    updateJob,
    deleteJob
};