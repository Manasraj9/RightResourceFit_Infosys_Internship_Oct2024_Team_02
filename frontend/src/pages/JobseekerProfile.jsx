import React, { useState, useRef, useEffect } from 'react';
import Navbar from '../Components/Bars/NavbarCompany';
import Footer from '../Components/Footer';
import Sidebar from '../Components/side__bar.jsx';
import { Box, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MessageIcon from '@mui/icons-material/Message';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import { toast } from 'react-toastify';

const JobseekerProfile = () => {
    const location = useLocation();
    const fileInputRef = useRef(null);
    const [previewImage, setPreviewImage] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        dateOfBirth: '',
        address: '',
        gender: '',
        profileImage: null,
    });

    useEffect(() => {
        // Get the userId from localStorage
        const userId = localStorage.getItem('userId');
        if (userId) {
            // Fetch existing user data (for example, via an API call)
            axios.get(`http://localhost:1000/jobseeker-profile/${userId}`)
                .then((response) => {
                    const userProfile = response.data; // assuming response has the user profile data
                    setFormData({
                        ...formData,
                        name: userProfile.name || '',
                        email: userProfile.email || '',
                        phoneNumber: userProfile.phoneNumber || '',
                        dateOfBirth: userProfile.dateOfBirth || '',
                        address: userProfile.address || '',
                        gender: userProfile.gender || '',
                        profileImage: userProfile.profileImage || null,
                    });
                    // Set profile image preview if available
                    if (userProfile.profileImage) {
                        setPreviewImage(userProfile.profileImage);
                    }
                })
                .catch((error) => {
                    console.error('Error fetching user profile:', error);
                    toast.error('Error fetching user profile data.');
                });
        }
    }, []);

    const handleClick = () => {
        fileInputRef.current.click();
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'profileImage') {
            setFormData((prevState) => ({ ...prevState, profileImage: files[0] }));
            // Show image preview
            const reader = new FileReader();
            reader.onloadend = () => setPreviewImage(reader.result);
            if (files[0]) reader.readAsDataURL(files[0]);
        } else {
            setFormData((prevState) => ({ ...prevState, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate required fields
        if (!formData.name || !formData.email || !formData.phoneNumber || !formData.dateOfBirth || !formData.address || !formData.gender || !formData.profileImage) {
            toast.error('Please fill out all required fields and upload an image.', {
                position: 'top-right',
                autoClose: 5000,
            });
            return;
        }

        const formDataToSend = new FormData();
        formDataToSend.append('userId', localStorage.getItem('userId'));
        formDataToSend.append('name', formData.name);
        formDataToSend.append('email', formData.email);
        formDataToSend.append('phoneNumber', formData.phoneNumber);
        formDataToSend.append('dob', formData.dateOfBirth);
        formDataToSend.append('address', formData.address);
        formDataToSend.append('gender', formData.gender);
        formDataToSend.append('profileImage', formData.profileImage);

        try {
            const response = await axios.post('http://localhost:1000/jobseeker-profile/save', formDataToSend, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            if (response.data.success) {
                toast.success('Profile submitted successfully', {
                    position: 'top-right',
                    autoClose: 5000,
                });
            }
        } catch (error) {
            if (error.response) {
                toast.error(error.response.data.message || 'Unexpected error. Please try again.', {
                    position: 'top-right',
                    autoClose: 5000,
                });
            } else {
                toast.error('Unexpected error. Please try again.', {
                    position: 'top-right',
                    autoClose: 5000,
                });
            }
        }
    };

    const sidebarItems = [
        { text: 'Dashboard', icon: <DashboardIcon />, path: '/Jobseekerdashboard' },
        { text: 'Messages', icon: <MessageIcon />, path: '/notifications/:userId' },
        { text: 'Profile', icon: <AccountBoxIcon />, path: '/Jobseekerprofile' },
        { text: 'All Applications', icon: <PeopleIcon />, path: '/AllApplications' },
        { text: 'My Schedule', icon: <ScheduleIcon />, path: '/my-schedule' },
        { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
        { text: 'Help Center', icon: <HelpIcon />, path: '/help-center' },
    ];

    return (
        <div>
            <Navbar />
            <div className="grid grid-cols-1 md:grid-cols-5">
                <Box
                    sx={{
                        width: 240,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: {
                            width: 240,
                            boxSizing: 'border-box',
                            position: 'relative',
                            top: '64px',
                            height: 'calc(100vh - 64px)',
                            overflowY: 'auto',
                        },
                    }}
                >
                    <List>
                        {sidebarItems.map((item) => (
                            <ListItem
                                button
                                key={item.text}
                                component="a"
                                href={item.path}
                                sx={{
                                    color: location.pathname === item.path ? 'blue' : 'inherit',
                                    backgroundColor: location.pathname === item.path ? 'rgba(0, 0, 255, 0.1)' : 'transparent',
                                }}
                            >
                                <ListItemIcon sx={{ color: location.pathname === item.path ? 'blue' : 'inherit' }}>
                                    {item.icon}
                                </ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                </Box>

                <div className="col-span-4 p-4">
                    <p className="text-3xl font-bold">Basic Info</p>
                    <p>This is the user info you can update anytime</p>
                    <br />
                    <hr style={{ backgroundColor: 'black', height: '2px' }} />
                    <br />

                    <div className="flex gap-20">
                        <div className="max-w-80">
                            <p className="text-3xl font-bold">User Profile</p>
                            <p>This image will be shown publicly as the user profile</p>
                        </div>
                        <form className="flex items-center gap-4">
                            <input
                                type="file"
                                accept=".png, .jpg, .jpeg, .svg"
                                onChange={handleChange}
                                ref={fileInputRef}
                                style={{ display: 'none' }}
                            />
                            <button
                                type="button"
                                onClick={handleClick}
                                className="h-36 w-60 border-2 text-sm border-dotted border-gray-400 p-4 py-2 bg-white text-[#112D4E] rounded-lg shadow-md hover:bg-[#3F72AF] hover:text-white"
                            >
                                Click to replace or drag and drop
                                <p className="text-xs text-gray-500">
                                    SVG, PNG, JPG or GIF (max. 400 x 400px)
                                </p>
                            </button>
                        </form>

                        {/* Image Preview */}
                        {previewImage && (
                            <div className="mt-4">
                                <img
                                    src={previewImage}
                                    alt="Preview"
                                    className="w-36 h-36 object-cover border rounded"
                                />
                            </div>
                        )}
                    </div>

                    <br />
                    <hr style={{ backgroundColor: 'black', height: '2px' }} />
                    <br />

                    <div className="flex gap-20">
                        <form className="w-3.5/5" style={{ width: '500px' }}>
                            <p className="pb-1">User Name</p>
                            <input
                                type="text"
                                placeholder="User Name"
                                className="w-full mb-6 p-2 border rounded"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            />

                            <p className="pb-1">Enter Email Address</p>
                            <input
                                type="text"
                                placeholder="Enter User Email Address"
                                className="w-full mb-6 p-2 border rounded"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />

                            <p className="pb-1">Phone Number</p>
                            <input
                                type="tel"
                                placeholder="Enter Phone Number"
                                className="w-full mb-6 p-2 border rounded"
                                value={formData.phoneNumber}
                                onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                            />

                            <p className="pb-1">Date of Birth</p>
                            <input
                                type="date"
                                className="w-full mb-6 p-2 border rounded"
                                value={formData.dateOfBirth}
                                onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })}
                            />

                            <p className="pb-1">Address</p>
                            <textarea
                                placeholder="Enter Address"
                                className="w-full mb-6 p-2 border rounded"
                                value={formData.address}
                                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                            />

                            <p className="pb-1">Gender</p>
                            <select
                                className="w-full mb-6 p-2 border rounded"
                                value={formData.gender}
                                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </form>
                    </div>

                    <div className="mt-4">
                        <button
                            type="submit"
                            onClick={handleSubmit}
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

export default JobseekerProfile;
