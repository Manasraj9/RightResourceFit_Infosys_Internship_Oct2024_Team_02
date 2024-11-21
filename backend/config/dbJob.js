const mongoose = require('mongoose');

// Ensure you have a fallback if JOB_DB_URL is not set
const jobDbUrl = process.env.JOB_DB_URL || 'mongodb://localhost:27017/jobDatabase';

// Create a custom connection for the job database
const jobDb = mongoose.createConnection(jobDbUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Log successful connection
jobDb.on('connected', () => {
  console.log('Connected to Job Database');
});

// Handle connection errors
jobDb.on('error', (error) => {
  console.error('Error connecting to Job Database:', error);
});

// Handle connection disconnection
jobDb.on('disconnected', () => {
  console.log('Disconnected from Job Database');
});

// Export the connection instance to use in models
module.exports = jobDb;

