import React from 'react'
import Navbar from '../Components/NavbarHome';
import Footer from '../Components/Footer';
//import SecondaryNavbar from '../Components/SecondaryNavbar.jsx';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Box, Divider } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MessageIcon from '@mui/icons-material/Message';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import { useLocation } from 'react-router-dom';

import Applicant1 from '../images/applicant1.png';
import Applicant2 from '../images/applicant2.png';
import Applicant3 from '../images/applicant3.png';
import './ApplicationStatus.css';


const ApplicationStatu= () => {
     const location = useLocation();
    const sidebarItems = [
        { text: 'Dashboard', icon: <DashboardIcon />, path: '/Jobseekerdashboard' },
        { text: 'Messages', icon: <MessageIcon />, path: '/messages' },
        { text: 'Profile', icon: <AccountBoxIcon />, path: '/Jobseeker-profile' },
        { text: 'All Applications', icon: <PeopleIcon />, path: '/all-applications' },
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
        <div className="flex-grow p-4">
                   
                     <div className="containera">
            <div className="flex items-start">
                <div className="w-1-3">
                    <div className="flex items-center mb-4">
                        <img src={Applicant1} alt="Profile  of Jerome Bell" className="rounded-full mr-4" />
                        <div>
                            <h2 className="text-xl font-semibold">Jerome Bell</h2>
                            <p className="text-gray-500">Product Designer</p>
                            <div className="flex items-center mt-2">
                                <i className="fas fa-star text-yellow-500"></i>
                                <span className="ml-2 text-gray-700 font-medium">4.0</span>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-gray-700 font-semibold">Applied Jobs</h3>
                        <p className="text-gray-500">2 days ago</p>
                        <p className="text-gray-700">Product Development</p>
                        <p className="text-gray-500">Marketing • Full-Time</p>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-gray-700 font-semibold">Stage</h3>
                        <div className="items-center mt-2">
                            <div className="w-full bg-gray-200 rounded-full h-2-5">
                                <div className="bg-blue-600 h-2-5 rounded-full" style={{ width: '50%' }}></div>
                            </div>
                            <span className="ml-2 text-gray-700">Interview</span>
                        </div>
                        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg">Schedule Interview</button>
                    </div>
                    <div>
                        <h3 className="text-gray-700 font-semibold">Contact</h3>
                        <p className="text-gray-500 mt-2"><i className="fas fa-envelope mr-2"></i>jeromeBell45@email.com</p>
                        <p className="text-gray-500 mt-2"><i className="fas fa-phone mr-2"></i>+44 1245 572 135</p>
                        <p className="text-gray-500 mt-2"><i className="fab fa-instagram mr-2"></i>instagram.com/jeromebell</p>
                        <p className="text-gray-500 mt-2"><i className="fab fa-twitter mr-2"></i>twitter.com/jeromebell</p>
                        <p className="text-gray-500 mt-2"><i className="fas fa-globe mr-2"></i>www.jeromebell.com</p>
                    </div>
                </div>
                <div className="w-2-3 pl-6">
                    <div className=" items-center mb-4">
                        <h2 className="text-xl font-semibold">Applicant Details</h2>
                    </div>
                    <div className="space-x-4 mb-4">
                        <button className="text-blue-600 font-semibold">Applicant Profile</button>
                        <button className="text-blue-600 font-semibold">Resume</button>
                        <button className="text-blue-600 font-semibold border-b-2 border-blue-600">Hiring Progress</button>
                        <button className="text-blue-600 font-semibold">Interview Schedule</button>
                        <button className="text-blue-600 font-semibold">Give Rating</button>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-gray-700 font-semibold">Current Stage</h3>
                        <div className="space-x-2 mt-2">
                            <button className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full">In-Review</button>
                            <button className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full">Shortlisted</button>
                            <button className="bg-blue-600 text-white py-1 px-3 rounded-full">Interview</button>
                            <button className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full">Hired / Declined</button>
                        </div>
                    </div>
                    <div className="mb-4">
                        <h3 className="text-gray-700 font-semibold">Stage Info</h3>
                        <p className="text-gray-500 mt-2">Interview Date</p>
                        <p className="text-gray-700">10 - 13 July 2021</p>
                        <p className="text-gray-500 mt-2">Interview Location</p>
                        <p className="text-gray-700">Silver Crysta Room, Nomad Office</p>
                        <p className="text-gray-700">3517 W. Gray St. Utica, Pennsylvania 57867</p>
                        <p className="text-gray-500 mt-2">Interview Status</p>
                        <p className="bg-yellow-100 text-yellow-700 py-1 px-3 rounded-full inline-block">On Progress</p>
                        <p className="text-gray-500 mt-2">Assigned to</p>
                        <div className="flex items-center mt-2">
                            <img src={Applicant2} alt="Profile of assigned person 1" className="rounded-full mr-2" />
                            <img src={Applicant3} alt="Profile  of assigned person 2" className="rounded-full mr-2" />
                            
                            <button className="bg-gray-200 text-gray-700 py-1 px-3 rounded-full">Move To Next Step</button>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-gray-700 font-semibold">Notes</h3>
                        <div className="mt-2">
                            <p className="text-gray-700 font-medium">Maria Kelly</p>
                            <p className="text-gray-500">10 July, 2021 • 11:30 AM</p>
                            <p className="text-gray-700 mt-2">Please, do an interview stage immediately. The design division needs more new employee now</p>
                            <button className="text-blue-600 font-semibold mt-2">2 Replies</button>
                            <button className="text-blue-600 font-semibold mt-2 ml-4">+ Add Notes</button>
                        </div>
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

export default ApplicationStatu;
