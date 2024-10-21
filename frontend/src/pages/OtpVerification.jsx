import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'; // Importing icons from react-icons
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import axios from 'axios';

const OtpVerification = () => {
    const location = useLocation(); // Get the location object
    const { email } = location.state || {}; // Extract email from location state
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [showNewPassword, setShowNewPassword] = useState(false); // State for new password visibility
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for confirm password visibility

    const handleotpverify = async (otp) => {
        try {
            const response = await axios.post('/verify-otp', { email, otp });
            if (response.status === 200) {
                // OTP verified, prompt for new password
                const newPassword = prompt("Enter your new password:");
                await axios.post('/change-password', { email, newPassword });
                alert('Password changed successfully!');
            }
        } catch (error) {
            console.error('Error verifying OTP:', error);
            alert(error.response.data.message);
        }
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
                                        type={showNewPassword ? "text" : "password"} // Toggle password visibility
                                        placeholder="New Password"
                                        className="w-full p-2 border rounded"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
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
                                        type={showConfirmPassword ? "text" : "password"} // Toggle password visibility
                                        placeholder="Confirm Password"
                                        className="w-full p-2 border rounded"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
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
