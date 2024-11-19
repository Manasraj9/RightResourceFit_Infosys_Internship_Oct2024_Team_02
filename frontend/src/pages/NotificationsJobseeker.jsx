import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Bars/NavbarCompany.jsx';
import Footer from '../Components/Footer.jsx';
import SecondaryNavbar from '../Components/Bars/SecondaryNavbar.jsx';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Box, Divider, Typography, Card, CardContent, IconButton } from '@mui/material';
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
import { useParams } from 'react-router-dom';


const NotificationsJobseeker = () => {
    const location = useLocation();
    const { userId } = useParams(); // Extract userId from URL params
    const [notifications, setNotifications] = useState([]);

    // Check if userId is valid
    useEffect(() => {
        if (!userId) {
            console.error("User ID is missing or undefined");
            return;
        }

        // Fetch notifications using the userId
        axios.get(`/api/notifications/${userId}`)
            .then(response => {
                setNotifications(response.data);
            })
            .catch(error => {
                console.error('Error fetching notifications:', error);
            });
    }, [userId]);

    const markAsRead = (notificationId) => {
        axios.put(`/api/notifications/${notificationId}/read`)
            .then(() => {
                setNotifications(notifications.map(notification =>
                    notification._id === notificationId
                        ? { ...notification, isRead: true }
                        : notification
                ));
            })
            .catch(error => {
                console.error('Error marking notification as read:', error);
            });
    };

    const handleDelete = (notificationId) => {
        axios.delete(`http://localhost:1000/notifications/${notificationId}`)
            .then(() => {
                setNotifications(notifications.filter(notification => notification._id !== notificationId));
            })
            .catch((error) => {
                console.error('Error deleting notification', error);
            });
    };

    // Define the sidebar items with their paths
    const sidebarItems = [
        { text: 'Dashboard', icon: <DashboardIcon />, path: '/Dashboardcompany' },
        { text: 'Messages', icon: <MessageIcon />, path: '/NotificationsJobseeker' },
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
                    <div>
                        <h2>Your Notifications</h2>
                        <ul>
                            {notifications.map(notification => (
                                <li
                                    key={notification._id}
                                    style={{ fontWeight: notification.isRead ? 'normal' : 'bold' }}
                                    onClick={() => markAsRead(notification._id)}
                                >
                                    {notification.message}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default NotificationsJobseeker
