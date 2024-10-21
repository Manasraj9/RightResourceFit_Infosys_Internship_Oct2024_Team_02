const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
});

const sendOTPEmail = async (email, otp) => {
    try {
        await transporter.sendMail({
            from: 'rajmanas0r@gmail.com',
            to: email,
            subject: "Your OTP Code",
            text: `Your OTP is: ${otp}`,
            html: `<p>Your OTP is: <strong>${otp}</strong></p>`
        });
        console.log("OTP sent successfully.");
    } catch (error) {
        console.error("Error sending OTP:", error);
        throw error; // Make sure to throw the error so it can be caught in the route
    }
};

module.exports = { sendOTPEmail };
