const mongoose = require('mongoose');

const jobDb = mongoose.createConnection(process.env.JOB_DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

jobDb.on('connected', () => console.log('Connected to Job Database'));
jobDb.on('error', (error) => console.error('Error connecting to Job Database:', error));

module.exports = jobDb;
