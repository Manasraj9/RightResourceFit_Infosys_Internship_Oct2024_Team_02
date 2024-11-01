const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const jobRoutes = require('./routes/jobRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = 1000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/RightResourceFit')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Could not connect to MongoDB:', err));

app.use(authRoutes);
app.use(jobRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

