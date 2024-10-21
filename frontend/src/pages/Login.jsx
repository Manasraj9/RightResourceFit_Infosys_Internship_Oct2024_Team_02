import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';  // Importing icons from react-icons
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
    const [rememberMe, setRememberMe] = useState(false);
    const [isTyping, setIsTyping] = useState(false); // Track if user has started typing in password field
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost:1000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Login failed. Please check your credentials.');
            }
    
            const data = await response.json();
            console.log('Login Response:', data);
            
            // Check if the token is received correctly
            if (data.token) {
                // Save the token to localStorage
                localStorage.setItem('token', data.token);
                console.log('Token stored successfully:', data.token);
                
                // Navigate to the homepage or desired route
                navigate('/Homepage');
            } else {
                alert(data.message || 'Unexpected error. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert(`An error occurred: ${error.message}`);
        }
    };
    

    const handleCheckboxChange = () => {
        setRememberMe(!rememberMe);
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        setIsTyping(e.target.value.length > 0); // Set typing state when user types
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
                        <form onSubmit={handleLogin}>
                            <p className='mb-1'>Enter Email Address</p>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full mb-6 p-2 border rounded"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <p className='mb-1'>Enter password</p>
                            <div className="relative w-full mb-5">
                                <input
                                    type="text"  // Always use type="text"
                                    placeholder="Password"
                                    className="w-full p-2 border rounded"
                                    value={password}  // Always use the actual password value
                                    onChange={handlePasswordChange} // Handle user typing
                                    style={{ WebkitTextSecurity: showPassword ? 'none' : 'disc' }} // Mask password with dots when not showing
                                />
                                {/* Eye icon - always visible */}
                                <span
                                    onClick={togglePasswordVisibility}
                                    className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                                >
                                    {isTyping ? (
                                        showPassword ? (
                                            // Show AiFillEyeInvisible when password is visible
                                            <AiFillEyeInvisible size={24} />
                                        ) : (
                                            // Show AiFillEye when password is hidden
                                            <AiFillEye size={24} />
                                        )
                                    ) : (
                                        // Default eye icon when no typing
                                        <AiFillEye size={24} />
                                    )}
                                </span>
                            </div>
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
