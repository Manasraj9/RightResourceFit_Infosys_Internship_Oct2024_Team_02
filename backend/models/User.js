const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    userType: {
        type: String,
        enum: ['jobSeeker', 'company'], // Ensure these are the values you want to accept
        required: true // This field is required
    },
    otp: {
        type: String,
        required: false,
    },
    otpExpires: {
        type: Date,
        required: false,
    },
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
