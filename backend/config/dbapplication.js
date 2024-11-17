const mongoose = require('mongoose');

const applicationDb = mongoose.createConnection(process.env.APPLICATION_DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

applicationDb.on('connected', () => console.log('Connected to Application Database'));
applicationDb.on('error', (error) => console.error('Error connecting to Application Database:', error));

module.exports = applicationDb;
