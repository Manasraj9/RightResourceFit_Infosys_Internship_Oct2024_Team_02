import React from 'react';
import { FaHome, FaUser } from 'react-icons/fa'; 
import Navbar from '../Components/Bars/NavbarJobseeker';
import Footer from '../Components/Footer';

const UserProfile = () => {
    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-1 md:grid-cols-5">
                {/* Sidebar */}
                <div className="bg-gray-100 p-4">
                    <ul className="space-y-4">
                        <li className="flex items-center gap-2">
                            <FaHome className="text-blue-500 h-8 w-8" />
                            <span className="text-gray-700 font-medium mt-2 ml-4">Dashboard</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <FaUser className="text-blue-500 h-8 w-8" />
                            <span className="text-gray-700 font-medium mt-2 ml-4">User Profile</span>
                        </li>
                    </ul>
                </div>

                {/* Main Content */}
                <div className="col-span-4 p-4">
                    <p className='text-3xl font-bold'>Basic Info</p>
                    <p>This is the user info you can update anytime</p>
                    <br /><hr style={{backgroundColor:'black', height: '2px'}}/><br />

                    <div className="flex gap-20">
                        <div className='max-w-80'>
                            <p className='text-3xl font-bold'>User Profile</p>
                            <p>This image will be shown publicly as the user profile</p>
                        </div>
                        <form className="flex items-center gap-4">
                            <button className="h-36 w-60 border-2 text-sm border-dotted border-gray-400 p-4 py-2 bg-white text-[#112D4E] rounded-lg shadow-md hover:bg-[#3F72AF] hover:text-white">
                                Click to replace or drag and drop
                                <p className='text-xs text-gray-500'>SVG, PNG, JPG or GIF (max. 400 x 400px)</p>
                            </button>
                        </form>
                    </div>
                    <br /><hr style={{backgroundColor:'black', height: '2px'}}/><br />

                    <div className='flex gap-20'>
                        <form className='w-3.5/5'style={{ width: '500px' }}>
                            <p className='pb-1'>User Name</p>
                            <input
                                type="text"
                                placeholder="User Name"
                                className="w-full mb-6 p-2 border rounded"
                            />

                            <p className='pb-1'>Enter Email Address</p>
                            <input
                                type="text"
                                placeholder="Enter User Email Address"
                                className="w-full mb-6 p-2 border rounded"
                            />

                            <p className="pb-1">Phone Number</p>
                            <input
                                type="tel"
                                placeholder="Enter Phone Number"
                                className="w-full mb-6 p-2 border rounded"
                            />

                            <p className="pb-1">Date of Birth</p>
                            <input
                                type="date"
                                className="w-full mb-6 p-2 border rounded"
                            />

                            <p className="pb-1">Address</p>
                            <textarea
                                placeholder="Enter Address"
                                className="w-full mb-6 p-2 border rounded"
                            />

                            <p className="pb-1">Gender</p>
                            <select className="w-full mb-6 p-2 border rounded">
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>

                            <p className="pb-1">Role</p>
                            <select className="w-full mb-6 p-2 border rounded">
                                <option value="user">User</option>
                                <option value="admin">Admin</option>
                            </select>

                        </form>
                    </div>
                    
                    <div className="mt-4">
                        <button
                        type="submit"
                        className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        >
                        Save
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default UserProfile;
