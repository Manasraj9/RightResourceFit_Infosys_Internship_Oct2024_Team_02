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

const ApplicantStatus2 = () => {
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
                  <h2 className="text-xl font-bold">Jerome Bell</h2>
                  <p className="text-gray-600">Product Designer</p>
                  <div className="flex items-center mt-2">
                    <i className="fas fa-star text-yellow-500"></i>
                    <span className="ml-2 text-gray-600">4.0</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <div className='flex space-x-64'>
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
                      <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '50%' }}></div>
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
                <div className="flex items-center">
                  <i className="fas fa-envelope text-gray-600 mr-2"></i>
                  <p className="text-gray-600">Email</p>
                  </div>
                  <span className="ml-6">jeromeBell45@email.com</span>
                </div>

                <div className="flex flex-col items-start mb-2">
                <div className="flex items-center">
                  <i className="fas fa-envelope text-gray-600 mr-2"></i>
                  <p className="text-gray-600">Phone</p>
                  </div>
                  <span className="ml-6">+44 2113 548 255</span>
                </div>
                <div className="flex flex-col items-start mb-2">
                <div className="flex items-center">
                  <i className="fas fa-envelope text-gray-600 mr-2"></i>
                  <p className="text-gray-600">Instagram</p>
                  </div>
                  <span className="ml-6">instagram.com/jeromebell</span>
                </div>
                <div className="flex flex-col items-start mb-2">
                <div className="flex items-center">
                  <i className="fas fa-envelope text-gray-600 mr-2"></i>
                  <p className="text-gray-600">Twitter</p>
                  </div>
                  <span className="ml-6">twitter.com/jeromebell</span>
                </div>
                <div className="flex flex-col items-start mb-2">
                <div className="flex items-center">
                  <i className="fas fa-envelope text-gray-600 mr-2"></i>
                  <p className="text-gray-600">Website</p>
                  </div>
                  <span className="ml-6">www.jeromebell.com</span>
                </div>
              </div>
            </div>

            {/* Right Sidebar - Professional Info */}
            <div className="w-2/3 p-4 border m-4">
              {/* Tabs */}
              <div className="flex border-b mb-4">
                <button className="py-2 px-4 text-blue-600 border-b-2 border-blue-600">
                  Applicant Profile
                </button>
                <button className="py-2 px-4 text-gray-600">Resume</button>
                <button className="py-2 px-4 text-gray-600">Hiring Progress</button>
                <button className="py-2 px-4 text-gray-600">Interview Schedule</button>
              </div>

              <div>
                {/* Personal Info */}
                <h3 className="text-lg font-bold mb-4">Personal Info</h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-gray-600">Full Name</p>
                    <p className="font-bold">Jerome Bell</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Gender</p>
                    <p className="font-bold">Male</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Date of Birth</p>
                    <p className="font-bold">March 23, 1995</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Language</p>
                    <p className="font-bold">English, French, Bahasa</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Address</p>
                    <p className="font-bold">4517 Washington Ave.<br />Manchester, Kentucky 39495</p>
                  </div>
                  {/* Additional fields */}
                </div>
              </div>
              <hr /><br />
              <div>
                {/* Professional Info */}
                <h3 className="text-lg font-bold mb-4">Professional Info</h3>
                  <div>
                    <p className="text-gray-600">About me</p>
                    <p className="font-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, laudantium amet fuga dolorem ad error odit ratione assumenda aspernatur. Quae, dolorem. Nemo vero at suscipit dicta odit delectus esse blanditiis!
                    Quos totam dolore placeat accusantium, incidunt dolor aliquam sed minus maxime omnis, amet quia vitae nam. Cumque molestias, nisi dolorum aliquam necessitatibus amet laudantium sint dignissimos quas, sit vero repudiandae?
                    Odio quia pariatur nam neque! <br /><br /> Obcaecati, natus.
                    Quaerat incidunt totam, eos atque doloremque doloribus veniam laboriosam modi cumque reprehenderit aspernatur iure nesciunt sed officiis id tempora quis dolores ipsam fugit possimus ducimus voluptatibus nihil. Aliquid, inventore at.</p>
                  </div>
                  <br />
                  <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-gray-600">Current Job</p>
                    <p className="font-bold">Product Designer</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Experience in Years</p>
                    <p className="font-bold">4 Years</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Highest Qualification Held</p>
                    <p className="font-bold">Bachelors in Engineering</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Skills set</p>
                    <button className='bg-slate-100 text-violet-800 p-1.5 m-1'>Project Management</button>
                    <button className='bg-slate-100 text-violet-800 p-1.5 m-1'>Copywriting</button>
                    <button className='bg-slate-100 text-violet-800 p-1.5 m-1'>English</button>
                  </div>
                  {/* Additional fields */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ApplicantStatus2;
