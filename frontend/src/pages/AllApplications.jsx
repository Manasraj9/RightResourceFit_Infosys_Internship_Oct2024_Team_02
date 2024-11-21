import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Bars/NavbarCompany';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import { Box, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SecondaryNavbar from '../Components/Bars/SecondaryNavbar';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MessageIcon from '@mui/icons-material/Message';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';

const AllApplications = () => {
    const location = useLocation();
    const navigate = useNavigate(); // Hook for navigation
    const [applications, setApplications] = useState([]);
    const [jobDetails, setJobDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const userId = localStorage.getItem('userId');
    console.log("User ID:", userId);

    useEffect(() => {
        if (!userId) {
            setError('User is not logged in.');
            setLoading(false);
            return;
        }

        const fetchApplications = async () => {
            try {
                const response = await axios.get(`http://localhost:1000/user/${userId}/applications`);
                console.log(response.data);  // Log response here to inspect the data

                if (response.data && Array.isArray(response.data)) {
                    setApplications(response.data);  // Set the applications array
                } else {
                    setApplications([]);  // Fallback to empty array
                }

                // Now fetch job details for each jobId
                const jobIds = response.data.map(app => app.jobId);
                const jobRequests = jobIds.map(id => axios.get(`http://localhost:1000/jobs/${id}`));  // Request to fetch jobs by ID
                const jobResponses = await Promise.all(jobRequests);

                const jobs = jobResponses.reduce((acc, res) => {
                    acc[res.data._id] = res.data;  // Store job details using jobId as the key
                    return acc;
                }, {});

                setJobDetails(jobs);  // Set all job details
                setLoading(false);

            } catch (err) {
                console.error('Error fetching applications:', err);
                setError('There was an error fetching your applications.');
                setLoading(false);
            }
        };

        fetchApplications();
    }, [userId]);

    const handleDelete = async (applicationId) => {
        try {
            await axios.delete(`http://localhost:1000/applications/${applicationId}`);
            // Remove the deleted application from the state
            setApplications((prevApplications) => prevApplications.filter(app => app._id !== applicationId));
        } catch (err) {
            console.error('Error deleting application:', err);
            setError('There was an error deleting the application.');
        }
    };
    if (loading) {
        return <p>Loading your applications...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    const sidebarItems = [
        { text: 'Dashboard', icon: <DashboardIcon />, path: '/Dashboardcompany' },
        { text: 'Messages', icon: <MessageIcon />, path: '/Notifications' },
        { text: 'Company Profile', icon: <AccountBoxIcon />, path: '/Companyprofile' },
        { text: 'All Applications', icon: <PeopleIcon />, path: '/AllApplications' },
        { text: 'Job Listing', icon: <WorkIcon />, path: '/joblisting' },
        { text: 'My Schedule', icon: <ScheduleIcon />, path: '/my-schedule' },
        { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
        { text: 'Help Center', icon: <HelpIcon />, path: '/help-center' },
    ];

    return (
        <div>
            <Navbar />
            <div className="flex flex-grow">
                <Box sx={{ width: 240, flexShrink: 0, [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box', position: 'relative', top: '64px', height: 'calc(100vh - 64px)', overflowY: 'auto' } }}>
                    <List>
                        {sidebarItems.map((item) => (
                            <ListItem button key={item.text} component="a" href={item.path} sx={{ color: location.pathname === item.path ? 'blue' : 'inherit', backgroundColor: location.pathname === item.path ? 'rgba(0, 0, 255, 0.1)' : 'transparent' }}>
                                <ListItemIcon sx={{ color: location.pathname === item.path ? 'blue' : 'inherit' }}>{item.icon}</ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                </Box>

                <div className="flex w-full">
                    <div className="flex-grow p-4">
                        <SecondaryNavbar />
                        <div className="container mx-auto p-4">
                            <h1 className="text-2xl font-bold mb-4">All Your Applications</h1>
                            <h6 className="text-2xl font-bold">You All Applications: {applications.length}</h6>

                            {applications.map((application) => {
                                const job = jobDetails[application.jobId];
                                return (
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }} key={application._id} className="w-full bg-[#f5f6ff] p-4 rounded-lg shadow-md flex mt-5">
                                        <div style={{ textAlign: 'left' }}>
                                            <h3 className="text-xl font-semibold">{job ? job.title : 'Loading job title...'}</h3>
                                            <p className="text-gray-700">{job ? job.companyName : 'Loading company name...'}</p>
                                            <p className="text-gray-500">
                                                {job && Array.isArray(job.joblocations)
                                                    ? job.joblocations.join(', ')
                                                    : 'No locations available'}
                                            </p>
                                            <p className="mt-2">{application.status || 'Application Pending'}</p>
                                        </div>
                                        <div className='pt-10'>
                                            {job.salaryRange ? `Salary: ${job.salaryRange.min} - ${job.salaryRange.max}` : 'Salary Range Not Provided'}
                                        </div >
                                        <div style={{ textAlign: 'right' }} className='flex gap-2 items-center'>
                                            {/* Navigate to Job Description page when clicking the button */}
                                            <Link to={`/job/${job._id}`}>
                                                <button className="bg-[#3f72af] text-white px-4 py-2 rounded-md hover:bg-[#3f72af]">View Details</button>
                                            </Link>
                                            <button
                                                variant="contained"
                                                color="secondary"
                                                onClick={() => handleDelete(application._id)}
                                                className='bg-red-500 text-white px-2 py-2 rounded-md hover:bg-red-700 ml-2'
                                            >
                                                Delete 
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AllApplications;

