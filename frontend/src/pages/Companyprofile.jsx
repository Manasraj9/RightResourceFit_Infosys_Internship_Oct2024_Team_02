import React, { useState, useRef } from 'react';
import Navbar from '../Components/Bars/NavbarCompany';
import Footer from '../Components/Footer';
import Sidebar from '../Components/side__bar.jsx';
import { Box, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Companyprofile = () => {
  const location = useLocation();
  const [previewImage, setPreviewImage] = useState(null);
  const [file , setFile] = useState(null);

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
  
    // Append all fields, including the logo, to the FormData
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
          logo: null, // Reset logo field too
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
    { text: 'Company Profile', icon: <AccountBoxIcon />, path: '/Companyprofile' },
  ];

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
          <div>
            {/* Overview Page */}
            <Overview handleSubmit={handleSubmit} handleFileChange={handleFileChange} previewImage={previewImage} formData={formData} setFormData={setFormData} setPreviewImage={setPreviewImage} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const Overview = ({ handleSubmit, handleFileChange,setPreviewImage, previewImage, formData, setFormData }) => {
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
      <hr className="border-b-1 border-gray-500 my-4" />
      <div className="flex gap-20">
        <div className='max-w-80'>
          <h2 className="text-xl font-bold">Company Logo</h2>
          <p>This image will be shown publicly as the company logo.</p>
        </div>
        <form onSubmit={handleSubmit} className="flex items-center gap-4">
          <input
            type="file"
            accept=".png, .jpg, .jpeg, .svg"
            onChange={onFileChange}
            ref={fileInputRef}
            style={{ display: 'none' }}
          />
          <button
            type="button"
            onClick={handleClick}
            className="h-36 w-60 border-2 text-sm border-dotted border-gray-400 p-4 py-2 bg-white text-[#112D4E] rounded-lg shadow-md hover:bg-[#3F72AF] hover:text-white"
          >
            Click to replace or drag and drop
            <p className='text-xs text-gray-500'>SVG, PNG, JPG or GIF (max. 400 x 400px)</p>
          </button>

          {/* Display Image Preview */}
          {previewImage && (
            <div className="mt-4">
              <img src={previewImage} alt="Logo Preview" className="h-24 w-24 object-cover" />
            </div>
          )}
        </form>
      </div>

      <hr className="border-b-1 border-gray-500 my-4" />

      <div className='flex gap-20'>
        <form className='w-3.5/5'>
          <p className='pb-1'>Company Name</p>
          <input
            type="text"
            placeholder="Company Name"
            className="w-full mb-6 p-2 border rounded"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
          />
          <p className='pb-1'>Enter Email Address</p>
          <input
            type="text"
            placeholder="Enter Company Email Address"
            className="w-full mb-6 p-2 border rounded"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <p className='pb-1'>Website</p>
          <input
            type="text"
            placeholder="www.company.com"
            className="w-full mb-6 p-2 border rounded"
            value={formData.website}
            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
          />
          <p className='pb-1'>Location</p>
          <input
            type="text"
            placeholder="Enter company location"
            className="w-full mb-6 p-2 border rounded"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          />
          <p className='pb-1'>Employee Range</p>
          <input
            type="text"
            placeholder="Enter employee range"
            className="w-full mb-6 p-2 border rounded"
            value={formData.employeeRange}
            onChange={(e) => setFormData({ ...formData, employeeRange: e.target.value })}
          />
          <p className='pb-1'>Industry</p>
          <input
            type="text"
            placeholder="Enter industry"
            className="w-full mb-6 p-2 border rounded"
            value={formData.industry}
            onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
          />
          <p className='pb-1'>Established Date</p>
          <input
            type="text"
            placeholder="Enter established date"
            className="w-full mb-6 p-2 border rounded"
            value={formData.establishedDate}
            onChange={(e) => setFormData({ ...formData, establishedDate: e.target.value })}
          />
        </form>
      </div>

      {/* Save Button at the Bottom */}
      <div className="mt-4">
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default Companyprofile;
