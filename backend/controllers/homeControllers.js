const path = require('path');

exports.getHome = (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
};
