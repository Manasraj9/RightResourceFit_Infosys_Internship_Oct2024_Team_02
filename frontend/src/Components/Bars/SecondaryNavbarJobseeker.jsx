import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import axios from 'axios';

const SecondaryNavbarJobseeker = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Assuming userId is stored in localStorage
  const userId = localStorage.getItem('userId'); // Or use another method to get user ID dynamically

  useEffect(() => {
    if (!userId) {
      setError('User ID is missing');
      setLoading(false);
      return;
    }

    // Fetch the user's profile data from the backend
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(`http://localhost:1000/jobseeker-profile/${userId}`);
        setName(response.data.name); // Use the name field from the response
        setLoading(false);
      } catch (err) {
        setError('Error fetching user profile');
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [userId]); // Dependency on userId to refetch if it changes

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
    <AppBar className="max-w-[1295px]" position="static" sx={{ backgroundColor: 'white', zIndex: 0 }}>
      <Toolbar className="flex justify-between">
        {loading ? (
          <Typography variant="h6" sx={{ color: 'black' }}>
            Loading...
          </Typography>
        ) : error ? (
          <Typography variant="h6" sx={{ color: 'red' }}>
            {error}
          </Typography>
        ) : (
          <Typography variant="h6" sx={{ color: 'black' }}>
            Good Morning, {name}
          </Typography>
        )}
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

export default SecondaryNavbarJobseeker;
