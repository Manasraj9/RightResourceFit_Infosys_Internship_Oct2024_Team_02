const jobDb = require('../config/dbJob');
const mongoose = require('mongoose');
const Company = require('./CompanyProfile');

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
    required: true,  // Ensure the companyId is provided
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
  createdAt: { type: Date, default: Date.now },
});

module.exports = jobDb.model('Job', jobSchema);


