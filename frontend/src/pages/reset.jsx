import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
 

const OtpVerification = () => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleotpverify = async (e) => {
        e.preventDefault();
    
        // Assuming you have the email available in this component
        const email = "user@example.com"; // Replace this with actual email
    
        const response = await fetch('http://localhost:1000/reset', {
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
                        <form>
                            <p className='mb-1'>Enter New Password</p>
                            <input
                                type="password"
                                placeholder="New Password"
                                className="w-full mb-6 p-2 border rounded"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                            />
                            <p className='mb-1'>Confirm Password</p>
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="w-full mb-6 p-2 border rounded"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
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
