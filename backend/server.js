const express = require('express');
const app = express();
const port = 1000;
const path = require('path');
const cors = require('cors');
const homeRoutes = require('./routes/homeRoutes');

app.use(cors());
app.use(express.json());
app.use(homeRoutes);

app.listen(port); 