import React, {useEffect,useState} from 'react'
import Navbar from '../Components/Bars/NavbarCompany';
import Footer from '../Components/Footer';
import SecondaryNavbar from '../Components/Bars/SecondaryNavbar.jsx';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Box, Divider,Typography,Card,CardContent,IconButton } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MessageIcon from '@mui/icons-material/Message';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import { useLocation } from 'react-router-dom'; 
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';


const Notifications = () => {
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
            {/* Navbar */}
            <Navbar />

            {/* Content Section with Sidebar and Main Content */}
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
                                    color: location.pathname === item.path ? 'blue' : 'inherit', // Change color to blue if active
                                    backgroundColor: location.pathname === item.path ? 'rgba(0, 0, 255, 0.1)' : 'transparent', // Add a light blue background if active
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
                <div className="flex-grow p-4">
                    <SecondaryNavbar />
                    <h1 className="text-3xl font-bold my-2">Notifications</h1>
                    <div className="container mx-auto flex justify-between items-center ">
                        <p>Here you can see all the notifications that have been sent to you.</p>
                        <button className='bg-[#f3f3f3] text-red-600 inline-flex items-center gap-0.5 hover:bg-red-500 hover:text-white py-1 rounded px-2.5'>Clear all</button>
                    </div>
                    <div>
                    <Card key={Notifications} sx={{ marginBottom: '20px' }} className='mt-2 '>
                    <CardContent className='container mx-auto flex justify-between items-center hover:bg-[#DEE4EF]'>
                      <Typography variant="body2">Notification 1</Typography>
                      <IconButton>
                        <DeleteIcon className='hover:text-red-600'/>
                      </IconButton>
                    </CardContent>
                  </Card>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Notifications
