import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, CircularProgress } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useParams } from 'react-router-dom';

const SecondaryNavbarCompany = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [error, setError] = useState('');
  const [company, setCompany] = useState(null);
  const [loading, setLoading] = useState(true);
  const companyId = '674552fc0605c2a53f2168b7'; // Static company ID for now

  useEffect(() => {
    if (!companyId) {
      setError('Company ID is missing');
      return;
    }

    const fetchCompanyData = async () => {
      setLoading(true); // Set loading to true while fetching data
      try {
        const response = await axios.get(`http://localhost:1000/company-profile`);
        setCompany(response.data);
      } catch (error) {
        setError('Error fetching company profile.');
        console.error(error);
      } finally {
        setLoading(false); // Set loading to false once data is fetched or error occurs
      }
    };

    fetchCompanyData();
  }, [companyId]);
  

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

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return <div style={{ color: 'red', padding: '20px' }}>{error}</div>;
  }

  return (
    <AppBar className="max-w-[1295px]" position="static" sx={{ backgroundColor: 'white', zIndex: 0 }}>
      <Toolbar className="flex justify-between">
        <Typography variant="h6" sx={{ color: 'black' }}>
          {company ? (
            <div>Good Morning, {company.companyName}</div>
          ) : (
            <p>Loading...</p>
          )}
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

export default SecondaryNavbarCompany;
