import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Resetpassword = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Use useNavigate to programmatically navigate

    const handleSendOTP = async (e) => { 
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:1000/send-otp', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }), // Use the email from state
            });
    
            // Check if the response was successful
            if (!response.ok) {
                const errorData = await response.json(); // Fetch error details if available
                throw new Error(errorData.message || 'Failed to send OTP.');
            }
    
            // Handle successful response
            setSuccess('OTP sent successfully! Check your email.');
            setError(''); // Clear any existing error
    
            // Navigate to the OTP verification page with email
            navigate('/Otpverification', { state: { email } }); // Pass email in state
    
        } catch (error) {
            console.error('Error:', error);
            setError(`An error occurred: ${error.message}`);
            setSuccess(''); // Clear any existing success message
        }
    };
    
    

    return (
        <div>
            <Navbar />
            <div className='flex justify-center'>
                <div>
                    <img src="/images/Login.svg" alt="page for Login" className="w-[780px] h-[650px] bg-white" />
                </div>
                {/* Login Box */}
                <div className="w-[750px] bg-[#dbe2ef]">
                    <h1 className='text-6xl text-[#112d4e] text-center mt-[100px]'>Reset Password</h1>
                    <div className='ml-[100px] mt-[40px] w-[550px] text-[#112d4e] justify-center'>
                        <form onSubmit={handleSendOTP}>
                            <p className=''>Enter Email Address</p>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full mb-6 p-2 border rounded"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} // Update state on input change
                                required
                            />
                            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                                Reset
                            </button>
                        </form>
                        {success && <p className="text-green-500 text-center mt-2">{success}</p>}
                        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
                        <div className="mt-2 text-center">
                            <Link to="/Login">
                                <p className="text-[#112d4e] hover:underline">Back to Login</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Resetpassword;
