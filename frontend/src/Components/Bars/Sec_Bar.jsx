// src/Components/SecondaryNavbar.jsx
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { useLocation } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MessageIcon from '@mui/icons-material/Message';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';

const Sec_Bar = () => {
    const location = useLocation();

    // Sidebar items with paths and icons
    const sidebarItems = [
        { text: 'Dashboard', icon: <DashboardIcon />, path: '/Dashboardcompany' },
        { text: 'Messages', icon: <MessageIcon />, path: '/messages' },
        { text: 'Company Profile', icon: <AccountBoxIcon />, path: '/company-profile' },
        { text: 'All Applicants', icon: <PeopleIcon />, path: '/all-applicants' },
        { text: 'Job Listing', icon: <WorkIcon />, path: '/joblisting' },
        { text: 'My Schedule', icon: <ScheduleIcon />, path: '/my-schedule' },
    ];

    const settingsItems = [
        { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
        { text: 'Help Center', icon: <HelpIcon />, path: '/help-center' },
    ];

    return (
        <Drawer
            variant="permanent"
            anchor="left"
            sx={{
                width: 240,
                flexShrink: 0,
                position: 'fixed',
                top: '64px',
                height: 'calc(100vh - 64px - 64px)',
                [`& .MuiDrawer-paper`]: {
                    width: 240,
                    boxSizing: 'border-box',
                    height: 'calc(100vh - 64px - 64px)',
                    overflowY: 'auto',
                },
            }}
        >
            {/* Main Navigation Items */}
            <List>
                {sidebarItems.map((item) => (
                    <ListItem
                        button
                        key={item.text}
                        component="a"
                        href={item.path}
                        sx={{
                            color: location.pathname === item.path ? 'blue' : 'inherit', // Blue text if active
                            backgroundColor: location.pathname === item.path ? 'rgba(0, 0, 255, 0.1)' : 'transparent', // Light blue background if active
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

            {/* Settings and Help Center */}
            <List>
                {settingsItems.map((item) => (
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
        </Drawer>
    );
};

export default Sec_Bar;
