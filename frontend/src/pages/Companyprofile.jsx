import React, { useState, useRef } from 'react';
import Dropdown from '../Components/Dropdown';
import Navbar from '../Components/Bars/NavbarCompany';
import Footer from '../Components/Footer';
import Sidebar from '../Components/side__bar.jsx'; // Assuming this includes the Drawer
import SecondaryNavbar from '../Components/Bars/SecondaryNavbar.jsx';
import Dashboard from '../Components/dashboard.jsx';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Box, Divider } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MessageIcon from '@mui/icons-material/Message';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Companyprofile = () => {
  const location = useLocation();
  const [file, setFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);  // Added previewImage state

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile); // Store the file object
      setPreviewImage(URL.createObjectURL(selectedFile)); // Set the image preview
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!file) return; // Ensure a file is selected

    const formData = new FormData();
    formData.append('image', file); // Append the actual file to FormData

    try {
      const response = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Image uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const sidebarItems = [
    { text: 'Dashboard', icon: <DashboardIcon />, path: '/Dashboardcompany' },
    { text: 'Messages', icon: <MessageIcon />, path: '/Notifications' },
    { text: 'Company Profile', icon: <AccountBoxIcon />, path: '/Companyprofile' },
    { text: 'All Applicants', icon: <PeopleIcon />, path: '/ApplicantStatus1' },
    { text: 'Job Listing', icon: <WorkIcon />, path: '/joblisting' },
    { text: 'My Schedule', icon: <ScheduleIcon />, path: '/my-schedule' },
    { text: 'Settings', icon: <SettingsIcon />, path: '/settings' },
    { text: 'Help Center', icon: <HelpIcon />, path: '/help-center' },
  ];

  const [activeTab, setActiveTab] = useState('Overview'); // Default active tab

  const tabs = [
    { name: 'Overview', color: '#25324b' },
    { name: 'Social Links', color: '#7c8493' },
    { name: 'Team', color: '#7c8493' },
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
        <div className="flex-grow p-4">
          <SecondaryNavbar />
          <div>
            {/* Tab Headers */}
            <div className="h-[69px] px-8 pt-8 flex-col justify-start items-start gap-6 inline-flex">
              <div className="w-[1104px] bg-white shadow-inner justify-start items-start gap-10 inline-flex">
                {tabs.map((tab, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveTab(tab.name)} // Set active tab on click
                    className={`flex-col justify-start items-center gap-[7px] inline-flex cursor-pointer ${activeTab === tab.name ? 'font-bold text-black border-b-2 border-blue-600' : 'text-gray-600'
                      }`}
                  >
                    <div className={`text-base leading-relaxed ${activeTab === tab.name ? 'text-black' : 'text-gray-600'}`}>
                      {tab.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-8">
              {activeTab === 'Overview' && <Overview handleSubmit={handleSubmit} handleFileChange={handleFileChange} previewImage={previewImage} />}
              {activeTab === 'Social Links' && <SocialLinks />}
              {activeTab === 'Team' && <Team />}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const Overview = ({ handleSubmit, handleFileChange, previewImage }) => {
  const fileInputRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');

  const handleOption1Change = (option) => setSelectedOption1(option);
  const handleOption2Change = (option) => setSelectedOption2(option);

  const options1 = ['1-50', '50-100', '100-200', '200-500', '500-1000', '1000+'];
  const options2 = ['Choice A', 'Choice B', 'Choice C'];

  const onFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Validate file type and size if needed
      if (file.size > 1024 * 1024) { // 1 MB file size limit
        alert('File size should not exceed 1MB');
        return;
      }

      // Preview image
      handleFileChange(event); // Call the parent handler if needed
    }
  };

  return (
    <div className="">
      <h2 className="text-2xl font-bold">Basic Info</h2>
      <p className="mb-2">This is the company info you can update any time.</p>
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
            style={{ display: 'none' }} // Hide the default input
          />
          <button
            type="button"
            onClick={handleClick}
            className="h-36 w-60 border-2 text-sm border-dotted border-gray-400 p-4 py-2 bg-white text-[#112D4E] rounded-lg shadow-md hover:bg-[#3F72AF] hover:text-white"
          >
            Click to replace or drag and drop
            <p className='text-xs text-gray-500'>SVG, PNG, JPG or GIF (max. 400 x 400px)</p>
          </button>

          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded-lg"
          >
            Upload
          </button>
        </form>

        {/* Display Image Preview */}
        {previewImage && (
          <div className="mt-4">
            <img src={previewImage} alt="Logo Preview" className="h-24 w-24 object-cover" />
          </div>
        )}
      </div>
      <hr className="border-b-1 border-gray-500 my-4" />
      <div className='flex gap-20'>
        <div className='max-w-80'>
          <h2 className="text-xl font-bold">Company Details</h2>
          <p>Introduce your company core info quickly to users by fill up company details</p>
        </div>
        <form action="" className='w-3.5/5'>
          <p className='pb-1'>Enter Email Address</p>
          <input
            type="text"
            placeholder="Company Name"
            className="w-full mb-6 p-2 border rounded"
            value={''}
          />
          <p className='pb-1'>Website</p>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full mb-6 p-2 border rounded"
          />
          <p className='pb-1'>Location</p>
          <input
            type="email"
            placeholder="Email Address"
            className="w-full mb-6 p-2 border rounded"
          />
          <div className='flex gap-20'>
            <div>
              <p className='pb-1'>Employee</p>
              <Dropdown
                label=""
                options={options1}
                onChange={handleOption1Change}
                className="w-full mb-6 p-2 inline-flex"
              />
            </div>
            <div>
              <p className='pb-1'>Industry</p>
              <Dropdown
                label=""
                options={options2}
                onChange={handleOption2Change}
                className="w-full mb-6 p-2 inline-flex"
              />
            </div>
          </div>
          <div className="my-4 flex flex-col items-start space-y-2 w-64">
            <label htmlFor="date" className="">Select a Date</label>
            <input
              id="date"
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-center p-5">
            <button type="submit" className={`bg-blue-500 text-white rounded px-6 py-2`}>
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const SocialLinks = () => {
  return (
    <div className='flex gap-20'>
      <div className='max-w-80'>
        <h2 className="text-xl font-bold">Social Links</h2>
        <p>Add elsewhere links to your company profile. You can add only username without full https links.</p>
      </div>
      <form action="" className='w-120'>
        <p className='pb-1'>Instagram</p>
        <input
          type="links"
          placeholder="Enter Your Instagram address"
          className="w-full mb-6 p-2 border rounded"
          value={''}
        />
        <p className='pb-1'>Facebook</p>
        <input
          type="links"
          placeholder="Enter Your Facebook address"
          className="w-full mb-6 p-2 border rounded"
          value={''}
        />
        <p className='pb-1'>Linkedin</p>
        <input
          type="links"
          placeholder="Enter Your Linkedin address"
          className="w-full mb-6 p-2 border rounded"
          value={''}
        />
        <p className='pb-1'>Twitter</p>
        <input
          type="links"
          placeholder="Enter Your Twitter address"
          className="w-full mb-6 p-2 border rounded"
          value={''}
        />
        <p className='pb-1'>Youtube</p>
        <input
          type="links"
          placeholder="Enter Your Youtube address"
          className="w-full mb-6 p-2 border rounded"
          value={''}
        />
        <div className="flex justify-center p-5">
          <button type="submit" className={`bg-blue-500 text-white rounded px-6 py-2`}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

const Team = () => {
  return <div>Team Section</div>;
};

export default Companyprofile;
