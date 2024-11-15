const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const jobRoutes = require('./routes/jobRoutes');
const authRoutes = require('./routes/authRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const applicationRoutes = require('./routes/applicationRoutes');

const app = express();
const PORT = 1000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/RightResourceFit')
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Could not connect to MongoDB:', err));
app.post('/notifications', (req, res) => {
    const { userId, type, message, jobId } = req.body;

    if (!userId || !type || !message || !jobId) {
        return res.status(400).json({ error: "All fields (userId, type, message, jobId) are required" });
    }

    // Here you would add logic to store the notification in the database
    res.status(200).json({ message: "Notification received", data: req.body });
});


app.use(authRoutes);
app.use(jobRoutes);
app.use(notificationRoutes);
app.use(applicationRoutes);
app.use('/uploads', express.static('uploads'));


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

