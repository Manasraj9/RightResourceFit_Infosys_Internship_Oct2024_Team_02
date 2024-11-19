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

const NotificationsCompany = () => {
    const location = useLocation();
    const { userId } = useParams();
    console.log('userId:', userId);

    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await axios.get(`http://localhost:1000/notifications/${userId}`);
                setNotifications(response.data);
            } catch (error) {
                console.error('Error fetching notifications:', error);
            } finally {
                setLoading(false);
            }
        };
    
        if (userId) {  // Ensure userId exists before making the request
            fetchNotifications();
        }
    }, [userId]);
      

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
        { text: 'Messages', icon: <MessageIcon />, path: '/NotificationsCompany' },
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
                    <Typography variant="h4" component="h1" gutterBottom>
                        Notifications
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Here you can see all the notifications that have been sent to you.
                    </Typography>
                    {notifications.length > 0 ? (
                        notifications.map((notification) => (
                            <Card
                                key={notification._id}
                                sx={{
                                    backgroundColor: notification.isRead ? 'lightgray' : 'white',
                                    marginBottom: '10px',
                                    padding: '10px',
                                    boxShadow: 2,
                                    borderRadius: '5px',
                                }}
                            >
                                <CardContent>
                                    <Typography variant="body1">{notification.message}</Typography>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        onClick={() => markAsRead(notification._id)}
                                        sx={{ marginTop: '10px', marginRight: '10px' }}
                                    >
                                        Mark as Read
                                    </Button>
                                    <IconButton
                                        color="error"
                                        onClick={() => deleteNotification(notification._id)}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </CardContent>
                            </Card>
                        ))
                    ) : (
                        <Typography variant="body1">No notifications found</Typography>
                    )}
                </div>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
};

export default NotificationsCompany;
