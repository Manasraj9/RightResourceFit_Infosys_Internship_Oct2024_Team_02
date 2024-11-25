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
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LanguageIcon from '@mui/icons-material/Language';
import StarRateIcon from '@mui/icons-material/StarRate';
import { yellow } from '@mui/material/colors';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { toast } from 'react-toastify';

const CurrentStage = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Current Stage</h2>
        <button className="text-purple-600 font-medium flex items-center">
          <span className="mr-2">Give Rating</span>
          <i className="fas fa-chevron-down"></i>
        </button>
      </div>
      {/* Additional content goes here */}
    </div>
  );
};

const ApplicationStatus4 = ({ applicationId, initialStatus }) => {
  const [applications, setApplications] = useState([]);
  const location = useLocation();
  const [application, setApplication] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { id } = useParams();
  const [jobTitles, setJobTitles] = useState({}); // State to hold job titles
  const [fetchedJobIds, setFetchedJobIds] = useState(new Set()); // To track fetched job IDs
  const [jobTitle, setJobTitle] = useState("");
  const [status, setStatus] = useState(initialStatus); // Track the current status
  const [job, setJob] = useState({}); // Track the job details




  useEffect(() => {
    const fetchApplication = async () => {
      try {
        const response = await axios.get(`http://localhost:1000/applications/${id}`);
        setApplication(response.data);
        setLoading(false);

        // Fetch job details only if the application is available
        if (response.data.jobId && !fetchedJobIds.has(response.data.jobId)) {
          setFetchedJobIds((prev) => new Set(prev.add(response.data.jobId))); // Mark job as fetched
          fetchJobDetails(response.data.jobId); // Call fetchJobDetails if jobId is available
        }
      } catch (err) {
        setError("Failed to fetch application. Please try again.");
        setLoading(false);
      }
    };

    fetchApplication();
  }, [id, fetchedJobIds]); // Add fetchedJobIds to ensure job is not refetched unnecessarily

  const fetchJobDetails = async (jobId) => {
    try {
      const response = await axios.get(`http://localhost:1000/jobs/${jobId}`);
      setJob(response.data); // Set job details in state
      setJobTitle(response.data.title); // Optionally store the title if needed
    } catch (error) {
      console.error('Error fetching job details:', error);
    }
  };
  const handleStatusChange = async (newStatus) => {
    try {
      // Log the data being sent
      console.log('Sending data:', { id, newStatus });

      // Send the request to update the application status
      const updateResponse = await axios.put(`http://localhost:1000/applications/${id}`, { status: newStatus });
      console.log('Status Update Response:', updateResponse);

      if (updateResponse.status === 200 || updateResponse.data.message === 'Status updated successfully') {
        toast.success('Application status updated successfully', {
          position: "top-right",
          autoClose: 5000,
        });

        // Ensure job data and user data are available before proceeding with the notification
        if (!job || !job._id || !job.companyId || !application || !application.userId) {
          console.error('Job or Application data is missing:', job, application);
          toast.error('Failed to send notification: Missing data.', {
            position: "top-right",
            autoClose: 5000,
          });
          return; // Skip notification if data is missing
        }

        // Proceed with the notification after data confirmation
        const notificationData = {
          jobId: job._id,               // Job ID
          companyId: job.companyId,     // Employer's company ID
          message: `The status of your application for the job "${job.title}" has been updated.`,  // Notification message
          userId: application.userId, // User ID (the applicant)
          type: 'status-update', // Type of notification
        };

        console.log('Notification Data:', notificationData);

        const notificationResponse = await axios.post('http://localhost:1000/notifications', notificationData);

        // Log the response from the notification post
        console.log('Notification Response:', notificationResponse);

        if (notificationResponse.data.success) {
          toast.success('Notification sent to the employer!', {
            position: "top-right",
            autoClose: 5000,
          });
        } else {
          toast.error('Failed to send notification to the employer.', {
            position: "top-right",
            autoClose: 5000,
          });
        }
      } else {
        toast.error('Failed to update the application status.', {
          position: "top-right",
          autoClose: 5000,
        });
      }
    } catch (error) {
      console.error('Error updating status:', error);
      const errorMessage = error.response?.data?.message || 'An error occurred while updating the application status.';
      toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };


  const sidebarItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/Jobseekerdashboard' },
    { text: 'Messages', icon: <MessageIcon />, path: '/messages' },
    { text: 'Company Profile', icon: <AccountBoxIcon />, path: '/ComapnyProfile' },
    { text: 'All Applicants', icon: <PeopleIcon />, path: '/all-applications' },
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
        <div className="bg-gray-100 p-8 flex-grow w-3/4 mx-auto bg-white rounded-lg shadow-lg">
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
                <Link to={`/ApplicationStatus3/${application._id}`}>
                  <button className="py-2 px-4 text-gray-600">Resume</button>
                </Link>

                <button className="py-2 px-4 text-blue-600 border-b-2 border-blue-600">Hiring Progress</button>

                <Link to={`/ApplicationStatus5/${application._id}`}>
                  <button className="py-2 px-4 text-gray-600">Interview Schedule</button>
                </Link>
              </div>

              <div className='p-4'>
                <div class="flex justify-between items-center mb-6">
                  <h2 class="text-xl font-semibold text-gray-800">Current Stage</h2>
                  <button class="flex items-center text-blue-600 font-bold border-2 p-3">
                    <KeyboardArrowDownIcon /><span class="mr-2 px-1">Give Rating</span>
                  </button>
                </div>
                <div className="flex space-x-4 mb-6">
                  <button
                    onClick={() => handleStatusChange('Applied')}
                    className={`px-4 py-2 ${status === 'Applied' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-blue-600'} rounded-md`}
                  >
                    Applied
                  </button>
                  <button
                    onClick={() => handleStatusChange('Under-review')}
                    className={`px-4 py-2 ${status === 'Under-review' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-blue-600'} rounded-md`}
                  >
                    Under-review
                  </button>
                  <button
                    onClick={() => handleStatusChange('Shortlisted')}
                    className={`px-4 py-2 ${status === 'Shortlisted' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-blue-600'} rounded-md`}
                  >
                    Shortlisted
                  </button>
                  <button
                    onClick={() => handleStatusChange('Rejected')}
                    className={`px-4 py-2 ${status === 'Rejected' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'} rounded-md`}
                  >
                    Rejected
                  </button>
                  <button
                    onClick={() => handleStatusChange('Hired')}
                    className={`px-4 py-2 ${status === 'Hired' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-600'} rounded-md`}
                  >
                    Hired
                  </button>
                </div>
                <div class="mb-6">
                  <h3 class="text-lg font-medium text-gray-800 mb-4">Stage Info</h3>
                  <div class="grid grid-cols-2 gap-4">
                    <div>
                      <p class="text-gray-600 mb-1">Interview Date</p>
                      <p class="text-gray-800 font-bold">10 - 13 July 2021</p>
                    </div>
                    <div>
                      <p class="text-gray-600 mb-1">Interview Status</p>
                      <span class="inline-block px-3 py-1 text-sm font-medium text-orange-600 bg-orange-100 rounded-full">On Progress</span>
                    </div>
                    <div>
                      <p class="text-gray-600 mb-1">Interview Location</p>
                      <p class="text-gray-800 font-bold">Silver Crysta Room, Nomad Office<br />3517 W. Gray St. Utica,<br />Pennsylvania 57867</p>
                    </div>
                    <div>
                      <p class="text-gray-600 mb-1">Assigned to</p>
                      <div class="flex space-x-2">
                        <img src="https://placehold.co/32x32" alt="Profile picture of assigned person 1" class="w-8 h-8 rounded-full" />
                        <img src="https://placehold.co/32x32" alt="Profile picture of assigned person 2" class="w-8 h-8 rounded-full" />
                        <img src="https://placehold.co/32x32" alt="Profile picture of assigned person 3" class="w-8 h-8 rounded-full" />
                      </div>
                    </div>
                  </div>
                </div>
                <button class="p-4 bg-gray-100 text-gray-600 rounded-md mb-6 border-2">Move To Next Step</button><hr /><br />
                <div className='flex justify-between'>
                  <h3 class="text-lg font-medium text-gray-800 mb-4 ">Notes</h3>
                  <button class="flex items-center p-2 text-blue-600 font-bold">
                    <AddIcon /><span>Add Notes</span>
                  </button>
                </div>
                <div className='border-2 p-6'>
                  <div className='flex justify-between'>
                    <div class="flex items-center">
                      <img src="https://placehold.co/40x40" alt="Profile picture of Maria Kelly" class="w-10 h-10 rounded-full mr-3" />
                      <div>
                        <p class="text-gray-800 font-medium">Maria Kelly</p>
                      </div>
                    </div>
                    <p class="text-gray-600 text-sm">10 July, 2021 &bull; 11:30 AM</p><br />
                  </div>
                  <div className='pl-12'>
                    <p class="text-gray-800 mb-2">Please, do an interview stage immediately. The design division needs more new employee now</p>
                    <button class="text-blue-600 font-bold">2 Replies</button>
                  </div>
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

export default ApplicationStatus4;

