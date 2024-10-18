const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');

const app = express();
const PORT = 1000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/RightResourceFit')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Could not connect to MongoDB:', err));

app.use(authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
