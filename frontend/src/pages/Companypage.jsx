import React from 'react';
import Navbar from '../Components/NavbarCompany';
import Footer from '../Components/Footer';
import Sidebar from '../Components/side__bar.jsx'; // Assuming this includes the Drawer
import SecondaryNavbar from '../Components/SecondaryNavbar.jsx';
import Dashboard from '../Components/dashboard.jsx';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Box, Divider } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MessageIcon from '@mui/icons-material/Message'; // Ensure you import this
import AccountBoxIcon from '@mui/icons-material/AccountBox'; // Ensure you import this
import PeopleIcon from '@mui/icons-material/People'; // Ensure you import this
import WorkIcon from '@mui/icons-material/Work'; // Ensure you import this
import ScheduleIcon from '@mui/icons-material/Schedule'; // Ensure you import this
import SettingsIcon from '@mui/icons-material/Settings'; // Ensure you import this
import HelpIcon from '@mui/icons-material/Help'; // Ensure you import this

export const Companypage = () => {
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
              position: 'relative', // Make it not fixed
              top: '64px', // Adjust for Navbar height
              height: 'calc(100vh - 64px)', // Ensure it does not overlap footer
              overflowY: 'auto', // Make it scrollable
            },
          }}
        >
          <List>
            {/* Main Navigation Items */}
            {[
              { text: 'Dashboard', icon: <DashboardIcon /> },
              { text: 'Messages', icon: <MessageIcon /> },
              { text: 'Company Profile', icon: <AccountBoxIcon /> },
              { text: 'All Applicants', icon: <PeopleIcon /> },
              { text: 'Job Listing', icon: <WorkIcon /> },
              { text: 'My Schedule', icon: <ScheduleIcon /> },
            ].map((item) => (
              <ListItem
                button
                key={item.text}
                component="a"
                href={`/${item.text.replace(/\s+/g, '-').toLowerCase()}`}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>

          <Divider />

          <List>
            {/* Settings and Help Center */}
            {[
              { text: 'Settings', icon: <SettingsIcon /> },
              { text: 'Help Center', icon: <HelpIcon /> },
            ].map((item) => (
              <ListItem
                button
                key={item.text}
                component="a"
                href={`/${item.text.replace(/\s+/g, '-').toLowerCase()}`}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Main Content */}
        <div className="flex-grow p-4"> {/* Adjust ml-60 to match Sidebar width */}
          <SecondaryNavbar />
          <Dashboard />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Companypage;
