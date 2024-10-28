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
    variant="permanent"
    anchor="left"
    sx={{
      width: 240,
      flexShrink: 0,
      position: 'absolute', // Changed from 'fixed' to 'absolute'
      top: '64px', // Space from the top, assuming navbar height is 64px
      height: 'calc(100vh - 8px)', // Total height excluding navbar and footer (assuming each is 64px)
      [`& .MuiDrawer-paper`]: {
          width: 240,
          boxSizing: 'border-box',
          height: 'calc(100vh - 128px)', // Same calculation to set the paper height
          overflowY: 'auto', // Enables scrolling if content overflows
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
  );
};

export default Sidebar;
