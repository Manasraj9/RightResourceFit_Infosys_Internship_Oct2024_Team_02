const User = require('../models/User');
const bcrypt = require('bcryptjs');

// Signup Function
exports.signup = async (req, res) => {
    const { name, email, password, userType } = req.body;

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const user = new User({ name, email, password: hashedPassword, userType });
        await user.save();

        res.status(201).json({ message: 'Signup successful', user });
    } catch (error) {
        res.status(500).json({ message: 'Signup failed. Please try again.', error });
    }
};
