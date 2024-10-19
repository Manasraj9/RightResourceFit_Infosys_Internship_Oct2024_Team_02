import React, { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'; // Importing icons from react-icons
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Register = () => {
    const [selectedOption, setSelectedOption] = useState('jobSeeker'); // Default is 'jobSeeker'
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

    const handleRegister = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:1000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password, userType: selectedOption }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);
            setSuccess('Registered successfully!');
            setError('');
        } catch (error) {
            console.error('Error:', error);
            setError('Register failed. Please try again.');
        }
    };

    return (
        <div>
            <Navbar />
            <div className='flex'>
                <div className='bg-white flex justify-center'>
                    <img src="/images/Login.svg" alt="page for Register" className="w-[780px] h-[650px]" />
                </div>
                <div className='w-[750px] bg-[#dbe2ef] text-[#112d4e]'>
                    <div className='flex justify-center pt-8'>
                        <div
                            onClick={() => setSelectedOption('jobSeeker')}
                            className={`h-10 px-3 py-[7px] ${selectedOption === 'jobSeeker' ? 'bg-white' : 'bg-[#dbe2ef]'} cursor-pointer justify-center items-center gap-2.5 inline-flex`}
                        >
                            <div className={`text-base font-semibold font-['Epilogue'] leading-relaxed ${selectedOption === 'jobSeeker' ? 'text-[#3f72af]' : 'text-gray-500'}`}>Job Seeker</div>
                        </div>
                        <div
                            onClick={() => setSelectedOption('company')}
                            className={`h-10 px-3 py-[7px] ${selectedOption === 'company' ? 'bg-white' : 'bg-[#dbe2ef]'} cursor-pointer justify-center items-center gap-2.5 inline-flex`}
                        >
                            <div className={`text-base font-semibold font-['Epilogue'] leading-relaxed ${selectedOption === 'company' ? 'text-[#3f72af]' : 'text-gray-500'}`}>Company</div>
                        </div>
                    </div>

                    <div className='flex justify-center pt-8'>
                        {selectedOption === 'jobSeeker' ? (
                            <JobSeekerForm 
                                name={name} 
                                email={email} 
                                password={password} 
                                setName={setName} 
                                setEmail={setEmail} 
                                setPassword={setPassword} 
                                handleRegister={handleRegister} 
                                error={error} 
                                success={success} 
                                showPassword={showPassword}
                                setShowPassword={setShowPassword}
                            />
                        ) : (
                            <CompanyForm 
                                name={name} 
                                email={email} 
                                password={password} 
                                setName={setName} 
                                setEmail={setEmail} 
                                setPassword={setPassword} 
                                handleRegister={handleRegister} 
                                error={error} 
                                success={success} 
                                showPassword={showPassword}
                                setShowPassword={setShowPassword}
                            />
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

// Job Seeker Form Component
const JobSeekerForm = ({ name, email, password, setName, setEmail, setPassword, handleRegister, error, success, showPassword, setShowPassword }) => {
    return (
        <div className='w-[550px] text-[#112d4e]'>
            <h2 className="text-center text-5xl font-semibold mb-6">Register as Job Seeker</h2>
            <form onSubmit={handleRegister}>
                <p className='pb-1'>Full Name</p>
                <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full mb-6 p-2 border rounded"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <p className='pb-1'>Enter Email Address</p>
                <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full mb-6 p-2 border rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p className='pb-1'>Enter password</p>
                <div className="relative w-full mb-5">
                    <input
                        type="text" // Always use type="text"
                        placeholder="Password"
                        className="w-full p-2 border rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ WebkitTextSecurity: showPassword ? 'none' : 'disc' }} // Mask password with dots when not showing
                    />
                    {/* Eye icon - always visible */}
                    <span
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                    >
                        {showPassword ? <AiFillEyeInvisible size={24} /> : <AiFillEye size={24} />}
                    </span>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                    Register
                </button>
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}
            </form>
            <div className="mt-2 flex">
                <p className="text-base text-[#112d4e]">Already Have an Account?</p>
                <Link to="/Login">
                    <p className="text-blue-400 hover:underline pl-[4px]">Login</p>
                </Link>  
            </div>
        </div>
    );
};

// Company Form Component
const CompanyForm = ({ name, email, password, setName, setEmail, setPassword, handleRegister, error, success, showPassword, setShowPassword }) => {
    return (
        <div className='w-[550px] text-[#112d4e]'>
            <h2 className="text-center text-5xl font-semibold mb-5">Register as Company</h2>
            <form onSubmit={handleRegister}>
                <p className='pb-1'>Full Name</p>
                <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full mb-6 p-2 border rounded "
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <p className='pb-1'>Enter Email Address</p>
                <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full mb-6 p-2 border rounded"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <p className='pb-1'>Enter password</p>
                <div className="relative w-full mb-5">
                    <input
                        type="text" // Always use type="text"
                        placeholder="Password"
                        className="w-full p-2 border rounded"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ WebkitTextSecurity: showPassword ? 'none' : 'disc' }} // Mask password with dots when not showing
                    />
                    <span
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                    >
                        {showPassword ? <AiFillEyeInvisible size={24} /> : <AiFillEye size={24} />}
                    </span>
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                    Register
                </button>
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}
            </form>
            <div className="mt-2 flex">
                <p className="text-base text-[#112d4e]">Already Have an Account?</p>
                <Link to="/Login">
                    <p className="text-blue-400 hover:underline pl-[4px]">Login</p>
                </Link>
            </div>
        </div>
    );
};

export default Register;
