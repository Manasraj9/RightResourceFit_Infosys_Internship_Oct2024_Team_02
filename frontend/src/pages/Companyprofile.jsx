import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../Components/Bars/NavbarCompany';
import Footer from '../Components/Footer';
import Sidebar from '../Components/side__bar.jsx';
import { Box, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MessageIcon from '@mui/icons-material/Message';
import PeopleIcon from '@mui/icons-material/People';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import Groups3Icon from '@mui/icons-material/Groups3';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import WorkIcon from '@mui/icons-material/Work';

const Companyprofile = () => {
  const location = useLocation();
  const [previewImage, setPreviewImage] = useState(null);
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    website: '',
    location: '',
    logo: null,
    employeeRange: '',
    industry: '',
    establishedDate: ''
  });
  const [existingData, setExistingData] = useState(null);


  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        const response = await axios.get('http://localhost:1000/company-profile');
        if (response.data) {
          setExistingData(response.data); // Set the existing data if found
          setFormData(response.data); // Populate the formData state with the existing data
  
          // Check if logo exists and is a Base64 string
          if (response.data.logo && response.data.logo.data) {
            // Construct the image URL with the Base64 string
            setPreviewImage(`data:image/png;base64,${response.data.logo.data}`);
          } else {
            setPreviewImage(null);
          }
        }
      } catch (error) {
        console.error('Error fetching company data', error);
      }
    };
  
    fetchCompanyData();
  }, []);


  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFormData({ ...formData, logo: selectedFile });
      setPreviewImage(URL.createObjectURL(selectedFile)); // Set the image preview
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.companyName || !formData.email || !formData.logo) {
      toast.error('Please fill out all required fields and upload the logo image.', {
        position: "top-right",
        autoClose: 5000,
      });
      return;
    }

    // Prepare the FormData object to send to the backend
    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key]) {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      const response = await axios.post('http://localhost:1000/company-profile/save', formDataToSend, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      if (response.data.success) {
        toast.success('Company profile submitted successfully', {
          position: "top-right",
          autoClose: 5000,
        });

        // Reset form data after successful submission
        setFormData({
          companyName: '',
          email: '',
          website: '',
          location: '',
          employeeRange: '',
          industry: '',
          establishedDate: '',
          logo: null,
        });
        setPreviewImage(null); // Reset preview image
      }
    } catch (error) {
      console.error(error);
      if (error.response) {
        toast.error(error.response.data.message || 'Unexpected error. Please try again.', {
          position: "top-right",
          autoClose: 5000,
        });
      } else {
        toast.error('Unexpected error. Please try again.', {
          position: "top-right",
          autoClose: 5000,
        });
      }
    }
  };

  const sidebarItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/Dashboardcompany' },
    { text: 'Messages', icon: <MessageIcon />, path: '/notifications/${companyId}' },
    { text: 'Company Profile', icon: <AccountBoxIcon />, path: '/Companyprofile' },
    { text: 'All Applicants', icon: <PeopleIcon />, path: '/ApplicantStatus1' },
    { text: 'Job Listing', icon: <WorkIcon />, path: '/joblisting' },
    { text: 'My Schedule', icon: <ScheduleIcon />, path: '/my-schedule' },
    { text: 'User Management', icon: <Groups3Icon />, path: '/jobseeker-profile' },
    { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
    { text: 'Help Center', icon: <HelpIcon />, path: '/help-center' },
  ];

  return (
    <div>
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

        {/* Main Content */}
        <div className="flex-grow p-4">
          {existingData ? (
            // Show the existing data if available
            <div>
              <h2 className="text-2xl font-bold">Company Profile</h2>
              <div className="flex gap-20">
                <div className="w-3.5/5">
                  <h3 className="text-xl font-bold mt-10">Company Details</h3>
                  <p><strong>Company Name:</strong> {existingData.companyName}</p>
                  <p><strong>Email:</strong> {existingData.email}</p>
                  <p><strong>Website:</strong> {existingData.website}</p>
                  <p><strong>Location:</strong> {existingData.location}</p>
                  <p><strong>Employee Range:</strong> {existingData.employeeRange}</p>
                  <p><strong>Industry:</strong> {existingData.industry}</p>
                  <p><strong>Established Date:</strong> {existingData.establishedDate}</p>
                </div>
              </div>
            </div>
          ) : (
            // Show the form if data doesn't exist
            <Overview handleSubmit={handleSubmit} handleFileChange={handleFileChange} previewImage={previewImage} formData={formData} setFormData={setFormData} setPreviewImage={setPreviewImage} />
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

const Overview = ({ handleSubmit, handleFileChange, previewImage, setPreviewImage, formData, setFormData }) => {
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const onFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      // Validate file type
      const fileType = selectedFile.type;
      if (!['image/png', 'image/jpeg', 'image/jpg', 'image/svg+xml'].includes(fileType)) {
        alert('Only PNG, JPG, JPEG, and SVG formats are allowed!');
        return;
      }

      // Validate file size
      if (selectedFile.size > 1024 * 1024) { // 1MB limit
        alert('File size must be less than 1MB');
        return;
      }

      setFormData({ ...formData, logo: selectedFile });
      setPreviewImage(URL.createObjectURL(selectedFile)); // Set the image preview
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">Basic Info</h2>
      <p className="mb-2">This is the company info you can update anytime.</p>
      <hr className="border-b-1 border-gray-500 my-2" />

      <form onSubmit={handleSubmit}>
        <div className="flex gap-4">
          <div className="flex flex-col w-1/2">
            <label className="mb-2">Company Name</label>
            <input
              type="text"
              className="border-2 p-2 rounded"
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              required
            />
          </div>

          <div className="flex flex-col w-1/2">
            <label className="mb-2">Email</label>
            <input
              type="email"
              className="border-2 p-2 rounded"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          <div className="flex flex-col w-1/2">
            <label className="mb-2">Website</label>
            <input
              type="url"
              className="border-2 p-2 rounded"
              value={formData.website}
              onChange={(e) => setFormData({ ...formData, website: e.target.value })}
            />
          </div>

          <div className="flex flex-col w-1/2">
            <label className="mb-2">Location</label>
            <input
              type="text"
              className="border-2 p-2 rounded"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            />
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          <div className="flex flex-col w-1/2">
            <label className="mb-2">Employee Range</label>
            <input
              type="text"
              className="border-2 p-2 rounded"
              value={formData.employeeRange}
              onChange={(e) => setFormData({ ...formData, employeeRange: e.target.value })}
            />
          </div>

          <div className="flex flex-col w-1/2">
            <label className="mb-2">Industry</label>
            <input
              type="text"
              className="border-2 p-2 rounded"
              value={formData.industry}
              onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
            />
          </div>
        </div>

        <div className="flex gap-4 mt-4">
          <div className="flex flex-col w-1/2">
            <label className="mb-2">Established Date</label>
            <input
              type="date"
              className="border-2 p-2 rounded"
              value={formData.establishedDate}
              onChange={(e) => setFormData({ ...formData, establishedDate: e.target.value })}
            />
          </div>

          <div className="flex flex-col w-1/2">
            <label className="mb-2">Logo</label>
            <div className="flex items-center gap-2">
              <button type="button" onClick={handleClick} className="bg-blue-500 text-white p-2 rounded">Upload Logo</button>
              <input
                ref={fileInputRef}
                type="file"
                style={{ display: 'none' }}
                accept="image/*"
                onChange={onFileChange}
              />
              {previewImage && <img src={previewImage} alt="Logo Preview" className="h-16 w-16 object-cover" />}
            </div>
          </div>
        </div>

        <button type="submit" className="mt-4 bg-blue-500 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default Companyprofile;
