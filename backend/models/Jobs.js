const jobDb = require('../config/dbJob');
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
  companyName: { type: String },  // Removed duplicate
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


