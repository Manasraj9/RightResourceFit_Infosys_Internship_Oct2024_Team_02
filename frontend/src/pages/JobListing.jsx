import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Card, CardContent, Typography, IconButton, Grid } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Divider } from '@mui/material';
import SecondaryNavbar from '../Components/SecondaryNavbar.jsx';
import { useLocation } from 'react-router-dom'; // Import useLocation
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MessageIcon from '@mui/icons-material/Message';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';

const JobListing = () => {
  // Sample data for job updates
  const jobUpdates = [
    { id: 1, title: 'Frontend Developer', company: 'Tech Solutions', description: 'Looking for a skilled frontend developer with experience in React and JavaScript.' },
    { id: 2, title: 'Backend Developer', company: 'Innovative Apps', description: 'Seeking an experienced backend developer with knowledge of Node.js and MongoDB.' },
    { id: 3, title: 'UI/UX Designer', company: 'Creative Minds', description: 'Creative designer with skills in Figma and Adobe XD required.' },
  ];

  const location = useLocation();

  // Define the sidebar items with their paths
  const sidebarItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/Dashboardcompany' },
    { text: 'Messages', icon: <MessageIcon />, path: '/messages' },
    { text: 'Company Profile', icon: <AccountBoxIcon />, path: '/company-profile' },
    { text: 'All Applicants', icon: <PeopleIcon />, path: '/all-applicants' },
    { text: 'Job Listing', icon: <WorkIcon />, path: '/joblisting' },
    { text: 'My Schedule', icon: <ScheduleIcon />, path: '/my-schedule' },
    { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
    { text: 'Help Center', icon: <HelpIcon />, path: '/help-center' },
  ];

  const handleEdit = (id) => {
    console.log(`Edit job with ID: ${id}`);
    // Add functionality to edit the job posting
  };

  const handleDelete = (id) => {
    console.log(`Delete job with ID: ${id}`);
    // Add functionality to delete the job posting
  };

  return (
    <div>
      <Navbar />
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
        <div className='flex'>
          <div className="flex-grow p-4">
            <SecondaryNavbar />

            <Box sx={{ padding: '20px' }}>
              <Typography variant="h4" sx={{ marginBottom: '20px' }}>Job Applicant Page</Typography>

              <Grid container spacing={3}>
                {jobUpdates.map((job) => (
                  <Grid item xs={12} sm={6} md={4} key={job.id}>
                    <Card sx={{ position: 'relative', padding: '16px' }}>
                      {/* Icons for edit and delete */}
                      <Box sx={{ position: 'absolute', top: '8px', right: '8px', display: 'flex', gap: 1 }}>
                        <IconButton onClick={() => handleEdit(job.id)} size="small">
                          <EditIcon fontSize="small" />
                        </IconButton>
                        <IconButton onClick={() => handleDelete(job.id)} size="small">
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </Box>

                      <CardContent>
                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{job.title}</Typography>
                        <Typography variant="subtitle1" color="textSecondary">{job.company}</Typography>
                        <Typography variant="body2" color="textSecondary">{job.description}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JobListing;
