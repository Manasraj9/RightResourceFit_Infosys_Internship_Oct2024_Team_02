import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Components/Bars/NavbarCompany';
import Footer from '../Components/Footer';
import { useParams, Link } from "react-router-dom";
import { Box, Divider } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MessageIcon from '@mui/icons-material/Message';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import { useLocation } from 'react-router-dom';
import jobsearchIcon from '../images/jobsearch.png';
import joblocationIcon from '../images/joblocation.png';
import jobskillsIcon from '../images/jobskills.png';


const Report = () => {
  const location = useLocation();
  const [, setApplication] = useState([]);
  const [, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { id } = useParams();
  const [jobs, setJobs] = useState([]);
  const [title, setTitle] = useState('');
  const [joblocations, setJoblocations] = useState('');
  const [skills, setSkills] = useState('');
  const [employmentType, setemploymentType] = useState('');
  const [salaryRange] = useState('');
  const [showAllJobs] = useState(false);

  // Fetch job details

  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const response = await axios.get(`http://localhost:1000/applications/${id}`);
        setApplication(response.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch application. Please try again.");
        setLoading(false);
      }
    };
    fetchApplication();
  }, [id]);
  const fetchJobs = async () => {
    console.log("Fetching jobs with parameters:", {
        title,
        joblocations,
        skills,
        employmentType,
        salaryRange,
        showAllJobs
    });

    try {
        const response = await axios.get('http://localhost:1000/jobs', {
            params: showAllJobs
                ? {} // Empty params fetches all jobs
                : { title, joblocations, skills, employmentType, salaryRange }
        });

        console.log("Response data:", response.data);
        setJobs(response.data);
    } catch (error) {
        console.error('Error fetching jobs:', error);
    }
};
  // Handle form submission for job search
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search criteria:", { title, joblocations, skills });
    fetchJobs();
};

useEffect(() => {
    fetchJobs(); // Initial job fetch on component mount
}, []);

  // Define the sidebar items with their paths
  const sidebarItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/Dashboardcompany' },
    { text: 'Messages', icon: <MessageIcon />, path: '/Notifications' },
    { text: 'Company Profile', icon: <AccountBoxIcon />, path: '/Companyprofile' },
    { text: 'All Applicants', icon: <PeopleIcon />, path: '/ApplicantStatus1' },
    { text: 'Job Listing', icon: <WorkIcon />, path: '/joblisting' },
    { text: 'My Schedule', icon: <ScheduleIcon />, path: '/my-schedule' },
    { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
    { text: 'Help Center', icon: <HelpIcon />, path: '/help-center' },
  ];

  return (
    <div>
      <Navbar />


      <div className="flex">
        {/* Sidebar */}
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

        {/* Main Content */}
        <div className='flex'>
        <div className="main-content-container p-4">
        {/* Search Bar Section */}
        <div className="searchbox-container flex items-center justify-center">
            <ul className="flex justify-center items-center text-white gap-12">
            <li className="flex flex-col items-center">
                <img src={jobsearchIcon} alt="Search Icon" className="icon icon-search" />
                <input
                type="text"
                placeholder="Enter job title"
                className="inputfield1"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            </li>
            <li className="flex flex-col items-center">
                <img src={joblocationIcon} alt="Location Icon" className="icon icon-location" />
                <input
                type="text"
                placeholder="Enter location"
                className="inputfield2"
                value={joblocations}
                onChange={(e) => setJoblocations(e.target.value)}
                />
            </li>
            <li className="flex flex-col items-center">
                <img src={jobskillsIcon} alt="Skills Icon" className="icon icon-skills" />
                <input
                type="text"
                placeholder="Enter skills (comma-separated)"
                className="inputfield3"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                />
            </li>
            </ul>
            <div className="flex items-center gap-1 pl-4">
            <button onClick={handleSearch} className="searchbutton">Search</button>
            <button onClick={() => { setTitle(''); setJoblocations(''); setSkills(''); setJobs([]); }} className="clearbutton">Clear All</button>
            </div>
        </div>

        {/* Company and Job Details Section */}
        <div className="company-job-details flex flex-col items-start mt-4">
            <h1 className="text-2xl font-bold">Right Resource Fit</h1>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6 w-full">
            <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                <i className="fab fa-spotify text-white text-2xl"></i>
                </div>
                <div className="ml-4">
                <h1 className="text-2xl font-bold">Unity Developer</h1>
                <p className="text-gray-600"><i className="fas fa-map-marker-alt"></i> San Francisco, CA</p>
                </div>
            </div>
            </div>

            <div className="flex gap-2 mb-4">
                <div className="bg-gray-200 p-2 rounded-full flex justify-center">
                    <div className='p-4 text-gray-800 font-medium'>No. of Applicants for the job</div>
                    <div className='bg-white rounded-full p-4'>21</div>
                </div>
                <div className="bg-gray-200 p-2 rounded-full flex justify-center">
                    <div className='p-4 text-gray-800 font-medium'>Last Active</div>
                    <div className='bg-white rounded-full p-4'>21/10/2023</div>
                </div>
                <div className="bg-gray-200 p-2 rounded-full flex justify-center">
                    <div className='p-4 text-gray-800 font-medium'>Status</div>
                    <div className='bg-white rounded-full p-4'>Closed</div>
                </div>
            </div>

            {/* Applicants List */}
            <h2 className="text-xl font-bold mb-4">Applicants List</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[1, 2, 3, 4].map((_, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center mb-4">
                    <img src="https://placehold.co/50x50" alt="Profile picture of John David" className="w-12 h-12 rounded-full" />
                    <div className="ml-4">
                        <h3 className="text-lg font-bold">John David</h3>
                        <p className="text-gray-600">johndavid@gmail.com</p>
                    </div>
                    <div className="ml-auto text-right">
                        <p className="text-gray-600">Applied on <span className="text-blue-500">Oct 26, 2023</span></p>
                    </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">UI</span>
                    <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">Ux</span>
                    <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">Website Design</span>
                    <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">Mobile Design</span>
                    <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">Design Wireframes</span>
                    <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">Webflow</span>
                    <span className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">8+</span>
                </div>
                <div className="flex justify-between">
                    <button className="bg-blue-100 text-blue-500 font-medium px-4 py-2 rounded-full">View Profile</button>
                    <button className="bg-purple-100 text-purple-500 font-medium px-4 py-2 rounded-full">Download CV</button>
                    <button className="bg-gradient-to-r from-purple-400 to-blue-500 text-white font-medium px-4 py-2 rounded-full">Watch video</button>
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
        </div><br />       

    </div>
      <Footer />
    </div>
  );
};

export default Report;