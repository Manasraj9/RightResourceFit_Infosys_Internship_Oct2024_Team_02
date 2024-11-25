import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useLocation, Link } from 'react-router-dom';
import Navbar from '../Components/Bars/NavbarCompany.jsx';
import Footer from '../Components/Footer.jsx';
import SecondaryNavbar from '../Components/Bars/SecondaryNavbar.jsx';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Box, Divider, Typography, Card, CardContent, IconButton, Button} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MessageIcon from '@mui/icons-material/Message';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import DeleteIcon from '@mui/icons-material/Delete';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NotificationsJobseeker = () => {
    const location = useLocation();
    const userId = localStorage.getItem('userId');  // Get userId from local storage
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        if (!userId) {
            console.error("User ID is missing or undefined");
            return;
        }
    
        // Modify the API request to fetch notifications based on the userId and type
        axios.get(`http://localhost:1000/user-notifications`, { params: { userId, type: 'status-update' } })
            .then(response => {
                setNotifications(response.data);  // Set the notifications state
            })
            .catch(error => {
                console.error('Error fetching notifications:', error);
            });
    }, [userId]);
    
    

    const markAsRead = (notificationId) => {
        axios.put(`http://localhost:1000/notifications/${notificationId}/read`)
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

    const deleteNotification = async (notificationId) => {
        try {
            await axios.delete(`http://localhost:1000/notifications/${notificationId}`);
            setNotifications((prevNotifications) =>
                prevNotifications.filter((notif) => notif._id !== notificationId)
            );
        } catch (error) {
            console.error('Error deleting notification:', error);
        }
    };

    // Define the sidebar items with their paths
    const sidebarItems = [
        { text: 'Dashboard', icon: <DashboardIcon />, path: '/Dashboardcompany' },
        { text: 'Messages', icon: <MessageIcon />, path: `/notifications/:userId` },
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
                    <div  className='mt-5'>
                    <Typography variant="h4">Notifications</Typography>
                    {notifications.length > 0 ? (
                        notifications.map((notification) => (
                            <Card key={notification._id} sx={{ backgroundColor: notification.isRead ? 'lightgray' : 'white', marginBottom: '10px',marginTop: '10px' }}>
                                <CardContent className='flex justify-between items-center'>
                                    <Typography variant="body1">{notification.message}</Typography>
                                    <div>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => markAsRead(notification._id)}
                                        disabled={notification.isRead}
                                    >
                                        {notification.isRead ? 'Read' : 'Mark as Read'}
                                    </Button>
                                    <IconButton color="error" onClick={() => deleteNotification(notification._id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                    </div>
                                </CardContent>
                            </Card>
                        ))
                    ) : (
                        <Typography variant="body1">No notifications found</Typography>
                    )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default NotificationsJobseeker;
