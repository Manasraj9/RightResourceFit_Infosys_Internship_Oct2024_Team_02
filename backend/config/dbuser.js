const mongoose = require('mongoose');

const userDb = mongoose.createConnection(process.env.USER_DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

userDb.on('connected', () => console.log('Connected to User Database'));
userDb.on('error', (error) => console.error('Error connecting to User Database:', error));

module.exports = userDb;
