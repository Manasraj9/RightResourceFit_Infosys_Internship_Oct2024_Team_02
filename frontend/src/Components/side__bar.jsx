// Sidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MessageIcon from '@mui/icons-material/Message';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent" // Change to "temporary" if you want it to be responsive
      anchor="left"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 240,
          height: '100vh', // Full height of the viewport
          top: '64px', // Adjust this if you have a navbar
          boxSizing: 'border-box',
        },
      }}
    >
      <List>
        {/* Main sidebar items */}
        {[
          { text: 'Dashboard', icon: <DashboardIcon /> },
          { text: 'Messages', icon: <MessageIcon /> },
          { text: 'Company Profile', icon: <AccountBoxIcon /> },
          { text: 'All Applicants', icon: <PeopleIcon /> },
          { text: 'Job Listing', icon: <WorkIcon /> },
          { text: 'My Schedule', icon: <ScheduleIcon /> },
        ].map((item) => (
          <ListItem button key={item.text} component="a" href={`/${item.text.replace(/\s+/g, '-').toLowerCase()}`}> {/* Adjust link for navigation */}
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {/* Additional sidebar items */}
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
  );
};

export default Sidebar;
