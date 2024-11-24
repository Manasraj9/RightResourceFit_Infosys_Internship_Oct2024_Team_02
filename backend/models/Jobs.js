// models/Job.js
const jobDb = require('../config/dbJob'); // Ensure this is the correct path to the jobDb connection

const mongoose = require('mongoose');
const perkSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
});

const salaryRangeSchema = new mongoose.Schema({
  min: { type: Number, required: true },
  max: { type: Number, required: true },
});

const jobSchema = new mongoose.Schema({
  companyId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company', // Reference to the Company model
    required: true,
  },
  companyName: { type: String },
  title: { type: String },
  joblocations: { type: [String] },
  employmentType: { type: String },
  salaryRange: salaryRangeSchema,
  skills: { type: [String] },
  description: { type: String },
  responsibilities: { type: String },
  qualifications: { type: String },
  niceToHaves: { type: String },
  perks: [perkSchema],
  status: { 
    type: String, 
    enum: ['open', 'closed'], 
    default: 'open' // Default to 'open'
  },
  createdAt: { type: Date, default: Date.now },
});

// Register the Job model with the jobDb connection
module.exports = jobDb.model('Job', jobSchema);
