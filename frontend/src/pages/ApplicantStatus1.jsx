import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useLocation, useParams } from 'react-router-dom';
import { IconButton, Box, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Navbar from '../Components/Bars/Navbar'; // Adjust path if needed
import Footer from '../Components/Footer'; // Adjust path if needed
import ConfirmationModal from '../Components/ConfirmationModal'; // Your modal component
import DashboardIcon from '@mui/icons-material/Dashboard';
import MessageIcon from '@mui/icons-material/Message';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';

const ApplicantStatus1 = () => {
  const location = useLocation();
  const [search, setSearch] = useState("");
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [applicantToDelete, setApplicantToDelete] = useState(null);
  const { id } = useParams();  // Get jobId from the URL params
  const [jobTitles, setJobTitles] = useState({}); // Store job titles in a state object

  // Fetch job details
  const fetchJobDetails = async (jobId) => {
    try {
      const response = await axios.get(`http://localhost:1000/jobs/${jobId}`);
      setJobTitles((prevTitles) => ({
        ...prevTitles,
        [jobId]: response.data.title, // Store job title by jobId
      }));
    } catch (error) {
      console.error('Error fetching job details:', error);
    }
  };

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get('http://localhost:1000/applications'); // Update with your backend URL
        setApplications(response.data);
        setLoading(false);

        response.data.forEach((applicant) => {
          if (applicant.jobId && !jobTitles[applicant.jobId]) {
            fetchJobDetails(applicant.jobId); // Fetch job details only if not already fetched
          }
        });
      } catch (err) {
        console.error('Error fetching applications:', err);
        setError('Failed to fetch applications. Please try again.');
        setLoading(false);
      }
    };

    fetchApplications();
  }, [jobTitles]);

  const handleDelete = (id) => {
    setApplicantToDelete(id);  // Set the applicant to delete
    setIsModalOpen(true);  // Open the confirmation modal
  };

  const confirmDelete = async () => {
    try {
      const response = await axios.delete(`http://localhost:1000/applications/${applicantToDelete}`);
      if (response.status === 200) {
        setApplications((prevApplications) =>
          prevApplications.filter((applicant) => applicant._id !== applicantToDelete)
        );
        alert('Application deleted successfully');
      }
    } catch (error) {
      console.error('Error deleting application:', error);
      alert('Failed to delete the application');
    } finally {
      setIsModalOpen(false);  // Close the modal after deletion
    }
  };

  const cancelDelete = () => {
    setIsModalOpen(false);  // Close the modal without deletion
  };

  const sidebarItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/Dashboardcompany' },
    { text: 'Messages', icon: <MessageIcon />, path: '/messages' },
    { text: 'Company Profile', icon: <AccountBoxIcon />, path: '/Companyprofile' },
    { text: 'All Applicants', icon: <PeopleIcon />, path: '/ApplicantStatus1' },
    { text: 'Job Listing', icon: <WorkIcon />, path: '/joblisting' },
    { text: 'My Schedule', icon: <ScheduleIcon />, path: '/my-schedule' },
    { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
    { text: 'Help Center', icon: <HelpIcon />, path: '/help-center' },
  ];

  return (
    <div>
      <Navbar />
      <div className="flex flex-grow">
        <Box sx={{ width: 240, flexShrink: 0 }}>
          <List>
            {sidebarItems.map((item) => (
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
          <Divider />
        </Box>

        <body className="bg-gray-100 p-8 w-full">
          <div className="container mx-auto bg-white p-6 rounded-lg shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold">Total Applicants: {applications.length}</h1>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  placeholder="Search Applicants"
                  className="border border-gray-300 rounded-lg px-4 py-2"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button className="bg-gray-200 p-2 rounded-lg">
                  <i className="fas fa-filter"></i> Filter
                </button>
              </div>
            </div>
            <table className="min-w-full bg-white">
              <thead className="table-header">
                <tr>
                  <th className="py-2 px-4 text-left">Applicants Name</th>
                  <th className="py-2 px-4 text-left">Hiring Stage</th>
                  <th className="py-2 px-4 text-left">Applied Date</th>
                  <th className="py-2 px-4 text-left">Job Role</th>
                  <th className="py-2 px-4 text-left">View Applications</th>
                  <th className="py-2 px-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((applicant, index) => (
                  <tr key={index} className="table-row">
                    <td className="py-2 px-4 flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <img
                        src={applicant.image}
                        alt={`Profile picture of ${applicant.cname}`}
                        className="w-10 h-10 rounded-full mr-2"
                      />
                      {applicant.fullName}
                    </td>
                    <td className="py-2 px-4">
                      <span className={`badge ${applicant.badgeClass}`}>
                        {applicant.status}
                      </span>
                    </td>
                    <td className="py-2 px-4">{new Date(applicant.createdAt).toLocaleDateString()}</td>
                    <td className="py-2 px-4">{jobTitles[applicant.jobId] || 'Loading job title...'}</td>
                    <td className="py-2 px-4">
                      <Link to={`/ApplicantStatus2/${applicant._id}`}>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">View Application</button>
                      </Link>
                    </td>
                    <td className="py-2 px-4">
                    <IconButton className='hover:bg-red-500' onClick={() => handleDelete(applicant._id)} >
                        <DeleteIcon className='hover:text-red-600' />
                      </IconButton>
                    </td>
                  </tr>
                ))}
                 <ConfirmationModal
                  isOpen={isModalOpen}
                  onClose={cancelDelete}
                  onConfirm={confirmDelete}
                />
              </tbody>
            </table>
          </div>
        </body>
      </div>
      <Footer />
    </div>
  );
};

export default ApplicantStatus1;