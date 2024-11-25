const mongoose = require('mongoose');
const User = require('./User');

const JobseekerProfileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  userId: {
    type: mongoose.Schema.Types.ObjectId,  // Assuming userId is an ObjectId
    ref: 'User', // Reference to the User model (the applicant)
    required: true,  // Field is required
  },
  email: { type: String, required: true, unique: true },
  phoneNumber: { type: String, required: true },
  dob: { type: Date, required: true },
  address: { type: String, required: true },
  gender: { type: String, enum: ['male', 'female', 'other'], required: true },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  profileImage: {
    filename: String,
    contentType: String,
    data: Buffer
  },
}, { timestamps: true });

const JobseekerProfile = mongoose.model('JobseekerProfile', JobseekerProfileSchema);

module.exports = JobseekerProfile;

