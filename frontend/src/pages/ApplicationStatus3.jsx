import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Components/Bars/NavbarCompany';
import Footer from '../Components/Footer';
import { Box, Divider } from '@mui/material';
import { useParams, Link } from "react-router-dom";
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
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import StarRateIcon from '@mui/icons-material/StarRate';
import { yellow } from '@mui/material/colors';

const ApplicantStatus3 = () => {
  const location = useLocation();
  const [application, setApplication] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { id } = useParams();
  const [jobTitles, setJobTitles] = useState({}); // State to hold job titles
  const [fetchedJobIds, setFetchedJobIds] = useState(new Set()); // To track fetched job IDs
  const [jobTitle, setJobTitle] = useState("");
  const [resumeData, setResumeData] = useState(null);

  // Fetch job details
  const fetchJobDetails = async (jobId) => {
    try {
      const response = await axios.get(`http://localhost:1000/jobs/${jobId}`);
      setJobTitles((prevTitles) => ({
        ...prevTitles,
        [jobId]: response.data.title, // Store job title by jobId
      }));
    } catch (error) {
      console.error('Error fetching job details:', error);
    }
  };

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

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const response = await axios.get(`http://localhost:1000/resume/${id}`, { responseType: 'arraybuffer' });

        // Convert the buffer data into a Blob
        const blob = new Blob([response.data], { type: 'application/pdf' });

        // Create an object URL from the Blob
        const pdfUrl = URL.createObjectURL(blob);

        setResumeData(pdfUrl);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch resume.");
        setLoading(false);
      }
    };
    if (id) {
      fetchResume();
    }
  }, [id]);
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

      <div className="flex flex-grow">
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
        <div className="bg-gray-100 p-8 flex-grow w-3/4 mx-auto bg-white rounded-lg shadow-lg ">
          <div className="flex items-center mb-6">
            <h1 className="text-2xl font-bold">Applicant Details</h1>
          </div>
          <div className="flex">
            {/* Left Sidebar - Applicant Info */}
            <div className="w-1/3 p-4 border m-4">
              <div className="flex items-center mb-4">
                <img
                  src="https://placehold.co/80x80"
                  alt="Profile picture of Jerome Bell"
                  className="w-20 h-20 rounded-full mr-4"
                />
                <div>
                  <h2 className="text-xl font-bold">{application.fullName}</h2>
                  <p className="text-gray-600">{application.jobTitle}</p>
                  <div className="flex items-center mt-2">
                    <StarRateIcon sx={{ color: yellow[800] }} /><span className="ml-2 text-gray-600">4.0</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <div className='flex space-x-60'>
                  <h3 className="text-gray-600 mb-2">Applied on</h3>
                  <p className="text-gray-600 text-sm mb-2">{new Date(application.createdAt).toLocaleDateString()}</p>
                </div>
                <hr /><br />
                <p className="font-bold">{jobTitle}</p>
                <p className="text-gray-600 text-sm">Marketing • Full-Time</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <div className="mt-4">
                  <h4 className="text-gray-600 mb-2">Stage</h4>
                  <div className="flex items-center">
                    <div className="w-full bg-gray-300 rounded-full h-2.5 mr-2">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '25%' }}></div>
                    </div>
                    <span className="text-gray-600">Interview</span>
                  </div>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white py-2 rounded-lg mb-4">
                Schedule Interview
              </button>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="text-gray-600 mb-4">Contact</h3>
                <div className="flex flex-col items-start mb-2">
                  <div className="flex items-center space-x-2">
                    <EmailIcon /><p className="text-gray-600">Email</p>
                  </div>
                  <span className="ml-8">{application.email}</span>
                </div>

                <div className="flex flex-col items-start mb-2">
                  <div className="flex items-center space-x-2">
                    <PhoneAndroidIcon /><p className="text-gray-600">Phone</p>
                  </div>
                  <span className="ml-8">{application.phone}</span>
                </div>
                <div className="flex flex-col items-start mb-2">
                  <div className="flex items-center space-x-2">
                    <InstagramIcon /><p className="text-gray-600">Instagram</p>
                  </div>
                  <span className="ml-8">instagram.com/jeromebell</span>
                </div>
                <div className="flex flex-col items-start mb-2">
                  <div className="flex items-center space-x-2">
                    <TwitterIcon /><p className="text-gray-600">Twitter</p>
                  </div>
                  <span className="ml-8">twitter.com/jeromebell</span>
                </div>
                <div className="flex flex-col items-start mb-2">
                  <div className="flex items-center space-x-2">
                    <LanguageIcon /><p className="text-gray-600">Website</p>
                  </div>
                  <span className="ml-8">www.jeromebell.com</span>
                </div>
              </div>
            </div>
            {/* Right Sidebar - Professional Info */}
            <div className="w-2/3 p-4 border m-4">
              {/* Tabs */}
              <div className="flex border-b mb-4">
                <Link to={`/ApplicantStatus2/${application._id}`}>
                  <button className="py-2 px-4 text-gray-600">Applicant Profile</button>
                </Link>
                <button className="py-2 px-4 text-blue-600 border-b-2 border-blue-600">Resume</button>
                <Link to={`/ApplicationStatus4/${application._id}`}>
                  <button className="py-2 px-4 text-gray-600">Hiring Progress</button>
                </Link>
                <Link to={`/ApplicationStatus5/${application._id}`}>
                  <button className="py-2 px-4 text-gray-600">Interview Schedule</button>
                </Link>
              </div>


              <div className='border h-5/6 m-8'>
                {/* Resume */}
                <div className="resume-container">
                  {loading && <p>Loading resume...</p>}
                  {error && <p>{error}</p>}

                  {/* Display Resume */}
                  {resumeData ? (
                    <div>
                      <h3 className="text-xl font-bold mb-4">Resume</h3>
                      <embed
                        src={resumeData}
                        width="100%"
                        height="600px"
                        type="application/pdf"
                      />
                    </div>
                  ) : (
                    <p>No resume available for this applicant.</p>
                  )}
                </div>
              </div>

            </div>

          </div>
          <div className='flex justify-between'>
            <button className='bg-blue-500 text-white rounded px-6 py-2'>Previous</button>
            <button className='bg-blue-500 text-white rounded px-6 py-2'>Next</button>
          </div>

        </div>

      </div>

      <Footer />
    </div>
  );
};

export default ApplicantStatus3;
