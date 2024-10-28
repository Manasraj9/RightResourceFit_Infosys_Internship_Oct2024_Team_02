import React from 'react'
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MessageIcon from '@mui/icons-material/Message';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';

const Sec_Bar = () => {
    const handleNotificationClick = () => {
        console.log('Notification clicked');
    };
    return (
        <div>
            <div className='flex flex-col md:flex-row'>
                <div>
                    <Drawer
                        variant="permanent"
                        anchor="left"
                        sx={{
                            width: 240,
                            flexShrink: 0,
                            position: 'fixed',
                            top: '64px', // Adjusts so it appears below a navbar of 64px height
                            height: 'calc(100vh - 64px - 64px)', // Assuming the footer height is also 64px
                            [`& .MuiDrawer-paper`]: {
                                width: 240,
                                boxSizing: 'border-box',
                                height: 'calc(100vh - 64px - 64px)', // Ensures it does not overflow past the footer
                                overflowY: 'auto', // Make sidebar scrollable if content overflows
                            },
                        }}
                    >

                        <List>
                            {[
                                { text: 'Dashboard', icon: <DashboardIcon /> },
                                { text: 'Messages', icon: <MessageIcon /> },
                                { text: 'Company Profile', icon: <AccountBoxIcon /> },
                                { text: 'All Applicants', icon: <PeopleIcon /> },
                                { text: 'Job Listing', icon: <WorkIcon /> },
                                { text: 'My Schedule', icon: <ScheduleIcon /> },
                            ].map((item) => (
                                <ListItem button key={item.text} component="a" href={`/${item.text.replace(/\s+/g, '-').toLowerCase()}`}>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItem>
                            ))}
                        </List>
                        <Divider />
                        <List>
                            {[
                                { text: 'Settings', icon: <SettingsIcon /> },
                                { text: 'Help Center', icon: <HelpIcon /> },
                            ].map((item) => (
                                <ListItem button key={item.text} component="a" href={`/${item.text.replace(/\s+/g, '-').toLowerCase()}`}>
                                    <ListItemIcon>{item.icon}</ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItem>
                            ))}
                        </List>
                    </Drawer>
                </div>
                <div>
                    <AppBar className="max-w-[1295px]" position="static" sx={{ backgroundColor: 'white' }}> {/* Set background color to white */}
                        <Toolbar className="flex justify-between">
                            <Typography variant="h6" sx={{ color: 'black' }}> {/* Set text color to black */}
                                Good Morning, [Your Name] {/* Replace with dynamic name if needed */}
                            </Typography>
                            <IconButton onClick={handleNotificationClick} sx={{ color: 'black' }}> {/* Set icon color to black */}
                                <NotificationsIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                </div>
            </div>
        </div>
    )
}

export default Sec_Bar
