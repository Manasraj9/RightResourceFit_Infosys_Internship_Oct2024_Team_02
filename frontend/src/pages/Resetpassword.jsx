import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Resetpassword = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleReset = async (e) => {
        e.preventDefault(); // Prevent the default form submission

        try {
            const response = await fetch('http://localhost:1000/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }), // Send email to backend
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setSuccess(data.message || 'Password reset link sent successfully.');
            setError('');
        } catch (error) {
            setError('Failed to send reset link. Please try again.');
            setSuccess('');
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
                        <form onSubmit={handleReset}>
                            <p>Enter Email Address</p>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full mb-6 p-2 border rounded"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)} // Update state on input change
                                required
                            />
                            <Link to="/OtpVerification">
                            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                                Reset
                            </button>
                            </Link>
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

