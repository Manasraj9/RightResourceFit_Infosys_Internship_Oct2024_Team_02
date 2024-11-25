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
import { Box, Divider, Typography, Card, CardContent, IconButton, Button } from '@mui/material';
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

const NotificationsCompany = () => {
    const location = useLocation();
    const companyId = "673c1fbeaacceddd71eb61a6";
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                // Log the companyId to make sure it's correct
                console.log('Company ID:', companyId);

                const response = await axios.get(
                    `http://localhost:1000/notifications/${companyId}?type=new-message`
                );
                setNotifications(response.data);
                setError(null); // Reset error on successful fetch
            } catch (error) {
                console.error('Error fetching notifications:', error);
                setError('Failed to fetch notifications. Please try again later.');
            } finally {
                setLoading(false);
            }
        };

        if (companyId) {
            fetchNotifications();
        }
    }, []);

    const markAsRead = async (notificationId) => {
        try {
            await axios.put(`http://localhost:1000/notifications/${notificationId}/read`);
            setNotifications((prevNotifications) =>
                prevNotifications.map((notif) =>
                    notif._id === notificationId ? { ...notif, isRead: true } : notif
                )
            );
        } catch (error) {
            console.error('Error marking notification as read:', error);
        }
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

    if (loading) {
        return <div>Loading...</div>;
    }

    // Sidebar items with their paths
    const sidebarItems = [
        { text: 'Dashboard', icon: <DashboardIcon />, path: '/Dashboardcompany' },
        { text: 'Messages', icon: <MessageIcon />, path: '/notifications/${companyId}' },
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
                            <Link key={item.text} to={item.path}>
                                <ListItem
                                    button
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
                            </Link>
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
};

export default NotificationsCompany;