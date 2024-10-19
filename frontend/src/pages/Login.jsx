import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();  // Use useNavigate for redirection

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:1000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password, rememberMe }),
            });
            
            if (!response.ok) {
                const errorData = await response.json(); // Capture the error message
                throw new Error(errorData.message || 'Login failed. Please check your credentials.');
            }
    
            const data = await response.json();
            console.log(data);
            
            if (data.success) {
                localStorage.setItem('token', data.token);
                navigate('/Homepage');
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
            alert(`An error occurred: ${error.message}`);
        }
    };

    const handleCheckboxChange = () => {
        setRememberMe(!rememberMe);
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
                    <h1 className='text-6xl text-[#112d4e] text-center mt-[100px]'>Login</h1>
                    <div className='ml-[100px] mt-[40px] w-[550px] text-[#112d4e] justify-center'>
                        <form onSubmit={handleLogin}>  {/* Add onSubmit here */}
                            <p className='mb-1'>Enter Email Address</p>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full mb-6 p-2 border rounded"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <p className='mb-1'>Enter password</p>
                            <input
                                type="password"
                                placeholder="Password"
                                className="w-full mb-5 p-2 border rounded"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div className='flex'>
                                <div className="flex items-center mb-1">
                                    <input
                                        type="checkbox"
                                        id="rememberMe"
                                        checked={rememberMe}
                                        onChange={handleCheckboxChange}
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="rememberMe" className="ml-2 text-gray-700">
                                        Remember Me
                                    </label>
                                </div>
                                <div className="mt-0.5 flex ml-auto justify-center items-center mb-1">
                                    <p className="text-base text-[#112d4e]">Forgot Password?</p>
                                    <Link to="/Resetpassword">
                                        <p className="text-blue-400 hover:underline pl-[4px]">Reset it</p>
                                    </Link>
                                </div>
                            </div>
                            <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                                Login
                            </button>
                        </form>
                        <div className="mt-2 flex">
                            <p className="text-base text-[#112d4e]">Don't have an Account?</p>
                            <Link to="/Register">
                                <p className="text-blue-400 hover:underline pl-[4px]">Register</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
