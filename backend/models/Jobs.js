const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  employmentType: {
    type: [String], // e.g., ['Full-time', 'Part-time']
    required: true
  },
  workingSchedule: {
    type: [String], // e.g., ['Day shift', 'Night shift', 'Weekend availability']
  },
  salary: {
    amount: {
      type: Number,
      required: true
    },
    type: {
      type: String, // e.g., 'Hourly', 'Yearly'
      required: true
    },
    negotiable: {
      type: Boolean,
      default: false
    }
  },
  multipleCandidates: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('Job', jobSchema);