import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications'; 

const SecondaryNavbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleNotificationClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const notifications = [
    'New applicant for Job A',
    'New message from Company B',
    'Reminder: Interview with Candidate C',
  ];

  return (
    <AppBar className="max-w-[1295px]" position="static" sx={{ backgroundColor: 'white', zIndex: 0 }}> {/* Set zIndex to 1100 */}
      <Toolbar className="flex justify-between">
        <Typography variant="h6" sx={{ color: 'black' }}>
          Good Morning, [Your Name] 
        </Typography>
        <IconButton onClick={handleNotificationClick} sx={{ color: 'black' }}>
          <NotificationsIcon />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: 48 * 4.5 + 8,
              width: '20ch',
            },
          }}
        >
          {notifications.map((notification, index) => (
            <MenuItem key={index} onClick={handleClose}>
              {notification}
            </MenuItem>
          ))}
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default SecondaryNavbar;

