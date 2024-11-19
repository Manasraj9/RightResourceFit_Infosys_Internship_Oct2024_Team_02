// config.db.js

const mongoose = require('mongoose');

// Create a separate connection for the Notification database
const notificationDb = mongoose.createConnection(process.env.NOTIFICATION_DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

notificationDb.on('connected', () => {
  console.log('Connected to Notification Database');
});

notificationDb.on('error', (error) => {
  console.error('Error connecting to Notification Database:', error);
  process.exit(1); // Exit process if DB connection fails
});

// Export the notificationDb connection to use in models
module.exports = { notificationDb };


