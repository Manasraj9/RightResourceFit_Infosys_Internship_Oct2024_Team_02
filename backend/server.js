const express = require('express');
const app = express();
const port = 1000;
const path = require('path');
const cors = require('cors');
const homeRoutes = require('./routes/homeRoutes');
const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/RightResourceFit';

app.use(cors());
app.use(express.json());
app.use(homeRoutes);

mongoose.connect(mongoURI)
    .then(() => {
        app.listen(port);
    })
    .catch((err) => {
        console.log(err);
    });