import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { verifyOtp } from '../utils/api'; 

const OtpVerification = () => {
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleVerifyOtp = async (e) => {
        e.preventDefault();
        const response = await verifyOtp(email, otp, newPassword);
        setMessage(response);
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
                    <h1 className='text-6xl text-[#112d4e] text-center mt-[100px]'>Verify OTP</h1>
                    <div className='ml-[100px] mt-[40px] w-[550px] text-[#112d4e] justify-center'>
                        <form onSubmit={handleVerifyOtp}>
                            <p>Enter Email Address</p>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full mb-6 p-2 border rounded"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <p>Enter OTP</p>
                            <input
                                type="text"
                                placeholder="OTP"
                                className="w-full mb-6 p-2 border rounded"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                            />
                            <p>Enter New Password</p>
                            <input
                                type="password"
                                placeholder="New Password"
                                className="w-full mb-6 p-2 border rounded"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
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
