// SecondaryNavbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications'; // Import notification icon

const SecondaryNavbar = () => {
  const handleNotificationClick = () => {
    // Handle notification click here
    console.log('Notification clicked');
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }}> {/* Set background color to white */}
      <Toolbar className="flex justify-between">
        <Typography variant="h6" sx={{ color: 'black' }}> {/* Set text color to black */}
          Good Morning, [Your Name] {/* Replace with dynamic name if needed */}
        </Typography>
        <IconButton onClick={handleNotificationClick} sx={{ color: 'black' }}> {/* Set icon color to black */}
          <NotificationsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default SecondaryNavbar;
