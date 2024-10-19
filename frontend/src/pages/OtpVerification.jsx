import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'; // Importing icons from react-icons
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const OtpVerification = () => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [showNewPassword, setShowNewPassword] = useState(false); // State for new password visibility
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for confirm password visibility

    const handleotpverify = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:1000/otpverify', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, otp, newPassword }),
        });

        const data = await response.json();
        setMessage(data.message); // Set the message based on the response
    };

    return (
        <div>
            <Navbar />
            <div className='flex justify-center'>
                <div>
                    <img src="/images/Login.svg" alt="page for Login" className="w-[780px] h-[650px] bg-white" />
                </div>
                <div className='flex justify-center'>
                    <div className="w-[750px] bg-[#dbe2ef]">
                        <h1 className='text-6xl text-[#112d4e] text-center mt-[50px]'>Verify OTP</h1>
                        <div className='ml-[100px] mt-[40px] w-[550px] text-[#112d4e] justify-center'>
                            <form onSubmit={handleotpverify}>
                                <p className='mb-1'>Enter Email Address</p>
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full mb-6 p-2 border rounded"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <p className='mb-1'>Enter OTP</p>
                                <input
                                    type="text"
                                    placeholder="OTP"
                                    className="w-full mb-6 p-2 border rounded"
                                    value={otp}
                                    onChange={(e) => setOtp(e.target.value)}
                                />
                                <p className='mb-1'>Enter New Password</p>
                                <div className="relative w-full mb-6">
                                    <input
                                        type="text" // Always use type="text"
                                        placeholder="New Password"
                                        className="w-full p-2 border rounded"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        style={{ WebkitTextSecurity: showNewPassword ? 'none' : 'disc' }} // Mask password with dots when not showing
                                    />
                                    <span
                                        onClick={() => setShowNewPassword(!showNewPassword)}
                                        className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                                    >
                                        {showNewPassword ? <AiFillEyeInvisible size={24} /> : <AiFillEye size={24} />}
                                    </span>
                                </div>
                                <p className='mb-1'>Confirm Password</p>
                                <div className="relative w-full mb-6">
                                    <input
                                        type="text" // Always use type="text"
                                        placeholder="Confirm Password"
                                        className="w-full p-2 border rounded"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        style={{ WebkitTextSecurity: showConfirmPassword ? 'none' : 'disc' }} // Mask password with dots when not showing
                                    />
                                    <span
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                                    >
                                        {showConfirmPassword ? <AiFillEyeInvisible size={24} /> : <AiFillEye size={24} />}
                                    </span>
                                </div>
                                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                                    Reset Password
                                </button>
                                {message && <p className="mt-2">{message}</p>}
                            </form>
                            <div className="mt-2 text-center">
                                <Link to="/Login">
                                    <p className="text-[#112d4e] hover:underline">Back to Login</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default OtpVerification;
