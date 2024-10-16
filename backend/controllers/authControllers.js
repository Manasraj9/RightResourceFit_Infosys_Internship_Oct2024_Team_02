const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.signup = async (req, res) => {
    const { name, email, password, userType } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ name, email, password: hashedPassword, userType });

    try {
        await user.save();
        res.status(201).json({ message: 'Signup successful', userType });
    } catch (error) {
        res.status(500).json({ message: 'Error signing up', error });
    }
};
