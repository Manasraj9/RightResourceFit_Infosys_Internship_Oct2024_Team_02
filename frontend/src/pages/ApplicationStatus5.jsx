import React from 'react';
import Navbar from '../Components/Bars/NavbarCompany';
import Footer from '../Components/Footer';
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
import { blue, yellow } from '@mui/material/colors';
import AddIcon from '@mui/icons-material/Add';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

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

const ApplicantStatus5 = () => {
  const location = useLocation();

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
                  <h2 className="text-xl font-bold">Jerome Bell</h2>
                  <p className="text-gray-600">Product Designer</p>
                  <div className="flex items-center mt-2">
                    <StarRateIcon sx={{ color: yellow[800] }} />
                    <span className="ml-2 text-gray-600">4.0</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <div className='flex justify-between'>
                <h3 className="text-gray-600 mb-2">Applied Jobs</h3>
                <p className="text-gray-600 text-sm mb-2">2 days ago</p>
                </div>
                <hr /><br />
                <p className="font-bold">Product Development</p>
                <p className="text-gray-600 text-sm">Marketing • Full-Time</p>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <div className="mt-4">
                  <h4 className="text-gray-600 mb-2">Stage</h4>
                  <div className="flex items-center">
                    <div className="w-full bg-gray-300 rounded-full h-2.5 mr-2">
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '65%' }}></div>
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
                  <span className="ml-8">jeromeBell45@email.com</span>
                </div>

                <div className="flex flex-col items-start mb-2">
                <div className="flex items-center space-x-2">
                  <PhoneAndroidIcon /><p className="text-gray-600">Phone</p>
                  </div>
                  <span className="ml-8">+44 2113 548 255</span>
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
                <button className="py-2 px-4 text-gray-600">Applicant Profile</button>
                <button className="py-2 px-4 text-gray-600">Resume</button>
                <button className="py-2 px-4 text-gray-600">Hiring Progress</button>
                <button className="py-2 px-4 text-blue-600 border-b-2 border-blue-600">Interview Schedule</button>
              </div>
              
              <div className='p-4'>
                <div class="flex justify-between items-center mb-6">
                  <h2 class="text-xl font-semibold text-gray-800">Interview List</h2>
                  <button class="flex items-center text-blue-600 font-bold border-2 p-3">
                  <AddIcon /><span class="mr-2 px-1">Add Schedule Interview</span>
                  </button>
                </div>
                <div className='text-gray-800'><p>11 July, 2024</p>
                <div className="flex items-center justify-between bg-white p-4 shadow-sm mb-2 border-2">
                        <div className="flex items-center">
                            <img src="https://placehold.co/32x32" alt="profile-img" className="w-12 h-12 rounded-full mr-4" />
                            <div>
                                <div className="font-semibold">Jenny Wilson</div>
                                <div className="text-gray-500">Test type</div>
                            </div>
                        </div>
                        <div className="text-start">
                            <div className="font-semibold">10.00 AM - 11.00 AM</div>
                            <div className="text-gray-500">Location</div>
                        </div>
                        <div className="flex items-center	">
                            <button className="flex justify-center text-blue-500 border border-blue-500 rounded-lg p-2 mr-2 w-48">
                                <CreateOutlinedIcon sx={{ color: blue[800] }}/>Add Feedback
                            </button>
                            <button className='px-3'><MoreHorizOutlinedIcon /></button>
                        </div>
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

export default ApplicantStatus5;