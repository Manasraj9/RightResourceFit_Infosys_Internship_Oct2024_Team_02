const mongoose = require('mongoose');

const companyProfileSchema = new mongoose.Schema({
  companyName: String,
  email: String,
  website: String,
  location: String,
  employees: Number,
  industry: String,
  establishedDate: Date,
  logo: {
    filename: String,
    contentType: String,
    data: Buffer
  }
});

const CompanyProfile = mongoose.model('CompanyProfile', companyProfileSchema);
module.exports = CompanyProfile;


