import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Register = () => {
    // State to track whether "Job Seeker" or "Company" is selected
    const [selectedOption, setSelectedOption] = useState('jobSeeker'); // Default is 'jobSeeker'
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Register handler that sends the data to the backend
    const handleRegister = async (event) => {
        event.preventDefault(); // Prevent form from submitting normally
        try {
            const response = await fetch('http://localhost:1000/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password, userType: selectedOption }), // Include user type
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            console.log(data);
            setSuccess('Registered successfully!'); // Set success message
            setError(''); // Clear any previous errors
        } catch (error) {
            console.error('Error:', error);
            setError('Register failed. Please try again.'); // Set error message
        }
    };

    return (
        <div>
            <Navbar />
            <div className='flex'>
                {/* Header Image */}
                <div className='bg-white flex justify-center'>
                    <img src="/images/Login.svg" alt="page for Register" className="w-[780px] h-[650px]" />
                </div>
                <div className='w-[750px] bg-[#dbe2ef] text-[#112d4e]'>
                    {/* Toggle Between Job Seeker and Company */}
                    <div className='flex justify-center pt-8'>
                        <div
                            onClick={() => setSelectedOption('jobSeeker')} // Switch to Job Seeker form
                            className={`h-10 px-3 py-[7px] ${selectedOption === 'jobSeeker' ? 'bg-white' : 'bg-[#dbe2ef]'} cursor-pointer justify-center items-center gap-2.5 inline-flex`}
                        >
                            <div className={`text-base font-semibold font-['Epilogue'] leading-relaxed ${selectedOption === 'jobSeeker' ? 'text-[#3f72af]' : 'text-gray-500'}`}>Job Seeker</div>
                        </div>
                        <div
                            onClick={() => setSelectedOption('company')} // Switch to Company form
                            className={`h-10 px-3 py-[7px] ${selectedOption === 'company' ? 'bg-white' : 'bg-[#dbe2ef]'} cursor-pointer justify-center items-center gap-2.5 inline-flex`}
                        >
                            <div className={`text-base font-semibold font-['Epilogue'] leading-relaxed ${selectedOption === 'company' ? 'text-[#3f72af]' : 'text-gray-500'}`}>Company</div>
                        </div>
                    </div>

                    {/* Form Section */}
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
                            /> // Pass props to Job Seeker form
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
                            /> // Pass props to Company form
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};


// Job Seeker Form Component
const JobSeekerForm = ({ name, email, password, setName, setEmail, setPassword, handleRegister, error, success }) => {
    return (
        <div className='w-[550px] text-[#112d4e]'>
            <h2 className="text-center text-5xl font-semibold mb-6">Register as Job Seeker</h2>
            <form onSubmit={handleRegister}> {/* Call handleRegister on form submit */}
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
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full mb-6 p-2 border rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                    Register
                </button>
                {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
                {success && <p className="text-green-500">{success}</p>} {/* Display success message */}
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
const CompanyForm = ({ name, email, password, setName, setEmail, setPassword, handleRegister, error, success }) => {
    return (
        <div className='w-[550px] text-[#112d4e]'>
            <h2 className="text-center text-5xl font-semibold mb-5">Register as Company</h2>
            <form onSubmit={handleRegister}> {/* Call handleRegister on form submit */}
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
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full mb-6 p-2 border rounded"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                    Register
                </button>
                {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
                {success && <p className="text-green-500">{success}</p>} {/* Display success message */}
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

