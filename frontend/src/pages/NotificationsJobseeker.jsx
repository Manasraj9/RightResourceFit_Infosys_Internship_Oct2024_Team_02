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


const NotificationsJobseeker = () => {
    const location = useLocation();
    const [notifications, setNotifications] = useState([]);
    const userId = "userId";  // Replace with dynamic user ID from state or props
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await axios.get(`http://localhost:1000/notifications/${userId}`);
                setNotifications(response.data); // Store notifications in state
            } catch (err) {
                setError('Error fetching notifications');
            } finally {
                setLoading(false);
            }
        };

        fetchNotifications();
    }, [userId]);

    const markAsRead = async (notificationId) => {
        try {
            // Mark the notification as read by sending a PUT request to the backend
            await axios.put(`http://localhost:1000/notifications/${notificationId}/read`);

            // Update local state to reflect the change
            setNotifications((prevNotifications) =>
                prevNotifications.map((notif) =>
                    notif._id === notificationId ? { ...notif, status: 'read' } : notif
                )
            );
        } catch (err) {
            setError('Error marking notification as read');
        }
    };

    if (loading) {
        return <div>Loading notifications...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    const handleDelete = (notificationId) => {
        axios.delete(`/api/notifications/${notificationId}`)
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
                        {notifications.length === 0 ? (
                            <p>No new notifications.</p>
                        ) : (
                            <ul>
                                {notifications.map((notification) => (
                                    <li
                                        key={notification._id}
                                        onClick={() => markAsRead(notification._id)} /* Mark as read on click */
                                        style={{
                                            cursor: 'pointer',
                                            backgroundColor: notification.status === 'read' ? '#f0f0f0' : '#fff',
                                            padding: '10px',
                                            marginBottom: '5px',
                                            borderRadius: '5px',
                                        }}
                                    >
                                        <p>{notification.message}</p>
                                        <p>Status: {notification.status}</p>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default NotificationsJobseeker
