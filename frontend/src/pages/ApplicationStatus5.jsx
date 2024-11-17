import React from 'react';
import Navbar from '../Components/Bars/NavbarCompany';
import Footer from '../Components/Footer';
import { Box, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
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
import profileImg from '../images/profile.png';
import ellipsisIcon from '../images/ellipsis.png';

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
                <button className="py-2 px-4 text-gray-600">Applicant Profile</button>
                <button className="py-2 px-4 text-gray-600">Resume</button>
                <button className="py-2 px-4 text-gray-600">Hiring Progress</button>
                <button className="py-2 px-4 text-blue-600 border-b-2 border-blue-600">Interview Schedule</button>
              </div>

              <div>
                {/* Interview Schedule */}
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className='font-bold text-[#25324B]'>Interview List</div>
                    <div className='ml-36 text-[#4640DE]'>
                        <Link>+ Add Schedule Interview</Link>
                    </div>
                </div><br />

                <p className='text-[#7C8493]'>Tomorrow - 10 December, 2024</p>
                <div style={{height:'70px', width:'700px', border:'2px solid #D6DDEB'}}>
                    <div className='grid grid-cols-1 md:grid-cols-3'>
                        <div>
                            <img src={profileImg} style={{height:'50px', width:'50px'}} className='ml-8 mt-2' />
                            <p className='ml-28 text-[#25324B] font-bold' style={{marginTop:'-48px'}}>Kathryn</p>
                            <p className='ml-28 text-[#7C8493]'>Written Test</p>
                        </div>
                        <div>
                            <p className='ml-28 text-[#25324B] font-bold' style={{marginTop:'10px', marginLeft:'20px'}}>10:00 AM - 11:30 AM</p>
                            <p className='ml-28 text-[#7C8493]' style={{marginLeft:'20px'}}>Silver Crysta Room, Nomad</p>
                        </div>
                        <div>
                            <Link>
                                <div className='text-[#4640DE]' style={{height:'45px', width:'150px', border:'2px solid #D6DDEB', marginTop:'10px', marginLeft:'30px'}}>
                                    <div className='mt-2 ml-4'>Add Feedback</div>
                                </div>
                            </Link>
                            <img src={ellipsisIcon} style={{height:'25px', width:'25px', marginLeft:'194px', marginTop:'-33px'}} />
                        </div>
                    </div>
                </div><br />

                <p className='text-[#7C8493]'>11 December, 2024</p>
                <div style={{height:'70px', width:'700px', border:'2px solid #D6DDEB'}}>
                    <div className='grid grid-cols-1 md:grid-cols-3'>
                        <div>
                            <img src={profileImg} style={{height:'50px', width:'50px'}} className='ml-8 mt-2' />
                            <p className='ml-28 text-[#25324B] font-bold' style={{marginTop:'-48px'}}>Jenny Wilson</p>
                            <p className='ml-28 text-[#7C8493]'>Written Test 2</p>
                        </div>
                        <div>
                            <p className='ml-28 text-[#25324B] font-bold' style={{marginTop:'10px', marginLeft:'20px'}}>10:00 AM - 11:00 AM</p>
                            <p className='ml-28 text-[#7C8493]' style={{marginLeft:'20px'}}>Silver Crysta Room, Nomad</p>
                        </div>
                        <div>
                            <Link>
                                <div className='text-[#4640DE]' style={{height:'45px', width:'150px', border:'2px solid #D6DDEB', marginTop:'10px', marginLeft:'30px'}}>
                                    <div className='mt-2 ml-4'>Add Feedback</div>
                                </div>
                            </Link>
                            <img src={ellipsisIcon} style={{height:'25px', width:'25px', marginLeft:'194px', marginTop:'-33px'}} />
                        </div>
                    </div>
                </div><br />

                <p className='text-[#7C8493]'>12 December, 2024</p>
                <div style={{height:'70px', width:'700px', border:'2px solid #D6DDEB'}}>
                    <div className='grid grid-cols-1 md:grid-cols-3'>
                        <div>
                            <img src={profileImg} style={{height:'50px', width:'50px'}} className='ml-8 mt-2' />
                            <p className='ml-28 text-[#25324B] font-bold' style={{marginTop:'-48px'}}>Thad Eddings</p>
                            <p className='ml-28 text-[#7C8493]'>Skill Test</p>
                        </div>
                        <div>
                            <p className='ml-28 text-[#25324B] font-bold' style={{marginTop:'10px', marginLeft:'20px'}}>10:00 AM - 11:00 AM</p>
                            <p className='ml-28 text-[#7C8493]' style={{marginLeft:'20px'}}>Silver Crysta Room, Nomad</p>
                        </div>
                        <div>
                            <Link>
                                <div className='text-[#4640DE]' style={{height:'45px', width:'150px', border:'2px solid #D6DDEB', marginTop:'10px', marginLeft:'30px'}}>
                                    <div className='mt-2 ml-4'>Add Feedback</div>
                                </div>
                            </Link>
                            <img src={ellipsisIcon} style={{height:'25px', width:'25px', marginLeft:'194px', marginTop:'-33px'}} />
                        </div>
                    </div>
                </div><br />

                <p className='text-[#7C8493]'>13 December, 2024</p>
                <div style={{height:'70px', width:'700px', border:'2px solid #D6DDEB'}}>
                    <div className='grid grid-cols-1 md:grid-cols-3'>
                        <div>
                            <img src={profileImg} style={{height:'50px', width:'50px'}} className='ml-8 mt-2' />
                            <p className='ml-28 text-[#25324B] font-bold' style={{marginTop:'-48px'}}>Darrell Steward</p>
                            <p className='ml-28 text-[#7C8493]'>Final Test</p>
                        </div>
                        <div>
                            <p className='ml-28 text-[#25324B] font-bold' style={{marginTop:'10px', marginLeft:'20px'}}>10:00 AM - 11:00 AM</p>
                            <p className='ml-28 text-[#7C8493]' style={{marginLeft:'20px'}}>Silver Crysta Room, Nomad</p>
                        </div>
                        <div>
                            <Link>
                                <div className='text-[#4640DE]' style={{height:'45px', width:'150px', border:'2px solid #D6DDEB', marginTop:'10px', marginLeft:'30px'}}>
                                    <div className='mt-2 ml-4'>Add Feedback</div>
                                </div>
                            </Link>
                            <img src={ellipsisIcon} style={{height:'25px', width:'25px', marginLeft:'194px', marginTop:'-33px'}} />
                        </div>
                    </div>
                </div><br />
              </div>
            </div>
          </div>
        </div>
      </div>

            <Footer />
        </div>
    );
};

export default ApplicantStatus5;