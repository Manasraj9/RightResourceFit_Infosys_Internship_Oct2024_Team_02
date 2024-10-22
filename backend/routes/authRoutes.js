
const express = require('express');
const router = express.Router();
const {
    signup,
    login,
    sendOTP,
    verifyOTP,
    changePassword // Uncomment this if you implement the verifyOTP function
} = require('../controllers/authController');

router.post('/signup', signup);
router.post('/login', login);
router.post('/send-otp', sendOTP);
router.post('/verify-otp', verifyOTP); 
router.post('/change-password',changePassword ); 

module.exports = router;


// const sendOtpEmail = async (email, otp) => {
//     const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//             user: process.env.EMAIL_USER,
//             pass: process.env.EMAIL_PASS,
//         }
//         });

//     const mailOptions = {
//         from: process.env.EMAIL_USER,
//         to: email,
//         subject: 'Your OTP Code',
//         text: `Your OTP code is ${otp}. It is valid for 10 minutes.`,
//     };

//     await transporter.sendMail(mailOptions);
// };


// router.post('/reset-password', async (req, res) => {
//     const { email } = req.body;


//     const user = await User.findOne({ email });
//     if (!user) {
//         return res.status(400).json({ message: 'User not found' });
//     }


//     const otp = Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit OTP
//     user.otp = otp;
//     user.otpExpires = Date.now() + 10 * 60 * 1000; 

//     await user.save();
//     await sendOtpEmail(email, otp); 

//     res.json({ message: 'OTP sent to your email.' });
// });


// router.post('/otpverify', async (req, res) => {
//     const { email, otp, newPassword } = req.body;

 
//     const user = await User.findOne({ email });
//     if (!user || user.otp !== otp || Date.now() > user.otpExpires) {
//         return res.status(400).json({ message: 'Invalid or expired OTP' });
//     }

    
//     const hashedPassword = await bcrypt.hash(newPassword, 10);
//     user.password = hashedPassword;
//     user.otp = undefined; 
//     user.otpExpires = undefined; // Clear OTP expiration

//     await user.save();
//     res.json({ message: 'Password reset successfully.' });
// });

// module.exports = router;



// module.exports = router;
