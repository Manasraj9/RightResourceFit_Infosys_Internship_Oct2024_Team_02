import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Components/Bars/NavbarCompany';
import Footer from '../Components/Footer';
import { useParams, Link } from "react-router-dom";
import { Box, Divider } from '@mui/material';
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
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
import { useLocation } from 'react-router-dom';

const Report = () => {
  const { id } = useParams();
  const location = useLocation();
  const [job, setJob] = useState(null);
  const [jobDetails, setJobDetails] = useState(null);
  const [application, setApplication] = useState(null); // or any default value you need
  const [loading, setLoading] = useState(false); // for loading state if required
  const [applicants, setApplicants] = useState([]);
  const [applications, setApplications] = useState([]);
  const [error, setError] = useState('');
  const [jobs, setJobs] = useState([]);
  const [totalApplicants, setTotalApplicants] = useState(0);
  const [selectedCandidates, setSelectedCandidates] = useState(0);

  // Fetch job data and applications at the same time
  useEffect(() => {
    const fetchJobData = async () => {
      try {
        const jobResponse = await axios.get(`http://localhost:1000/jobs/${id}`);
        setJob(jobResponse.data);

        // Fetch applicants only after job data is fetched
        const appResponse = await axios.get(`http://localhost:1000/applications/job/${id}`);
        setApplicants(appResponse.data);  // Store applicants data

        // Calculate total applicants count
        setTotalApplicants(appResponse.data.length);  // Set total applicants count
        const selected = appResponse.data.filter(applicant => applicant.status === "selected");
        setSelectedCandidates(selected.length);  // Set total selected candidates count

        setLoading(false);  // Stop loading when data is fetched
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data');
        setLoading(false);
      }
    };

    if (id) {
      fetchJobData();
    }
  }, [id]);

  const captureAndDownloadPDF = () => {
    const input = document.getElementById("report-content");

    // Check if the element exists
    if (!input) {
      console.error("Element not found!");
      return;
    }

    // Capture the entire content as a canvas
    html2canvas(input, { scrollY: -window.scrollY, scale: 1 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/jpeg", 0.7); // Change scale to 1 and reduce image quality

      // Create a new jsPDF instance
      const pdf = new jsPDF({
        orientation: "portrait", // Or "landscape"
        unit: "mm", // Set units to millimeters
        format: "a4", // Standard A4 paper size
      });

      // Calculate the dimensions to fit the canvas to the page
      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      // Add the image to the PDF
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);

      // If the content is longer than one page, add additional pages
      if (imgHeight > 297) {
        const totalPages = Math.ceil(imgHeight / 297);
        for (let i = 1; i < totalPages; i++) {
          pdf.addPage();
          pdf.addImage(imgData, "PNG", 0, -297 * i, imgWidth, imgHeight);
        }
      }

      // Save the PDF with the report
      pdf.save("report.pdf");
    }).catch((error) => {
      console.error("Error generating PDF:", error);
    });
  };

  if (!job) {
    return <div>Loading...</div>;
  }



  console.log("Job ID:", id);

  // Define the sidebar items with their paths
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

  return (
    <div >
      <Navbar />


      <div className="flex">
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
        <div className='flex' id="report-content" >
          <div className="main-content-container p-4">
            <h1 className='text-3xl font-bold mb-4'>Report for {job.title}</h1>
            {/* Company and Job Details Section */}
            <div className="company-job-details flex flex-col items-start mt-4">
              <div className="bg-white rounded-lg shadow-lg p-6 mb-6 w-full">

                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
                    <i className="fab fa-spotify text-white text-2xl"></i>
                  </div>
                  <div className="ml-4">
                    <h1 className="text-2xl font-bold">{job.title}</h1>
                    <p className="text-gray-600"><i className="fas fa-map-marker-alt"></i>{job.location}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 mb-4">
                <div className="bg-gray-200 p-2 rounded-full flex justify-center">
                  <div className='p-4 text-gray-800 font-medium'>Total number of Applicants for this Job</div>
                  <div className='bg-white rounded-full p-4'>{totalApplicants}</div>
                </div>
                <div className="bg-gray-200 p-2 rounded-full flex justify-center">
                  <div className='p-4 text-gray-800 font-medium'>Total Seceleted candidates</div>
                  <div className='bg-white rounded-full p-4'>{selectedCandidates}</div>
                </div>
                <div className="bg-gray-200 p-2 rounded-full flex justify-center">
                  <div className='p-4 text-gray-800 font-medium'>Status</div>
                  <div className='bg-white rounded-full p-4'>{job.status}</div>
                </div>
                <button onClick={captureAndDownloadPDF} className="bg-blue-500 text-white px-4 py-2 rounded-full mt-4">
                  Download Report as PDF
                </button>
              </div>

              {/* Applicants List */}
              <h2 className="text-xl font-bold mb-4">Applicants List</h2>
              {applicants.length === 0 ? (
                <div>No applicants found for this job.</div>
              ) : (
                applicants.map((app) => (
                  <div key={app._id} className="bg-white rounded-lg shadow-lg p-8 min-w-[80vh] mb-4">
                    <div className="flex items-center mb-4">
                      <img
                        src={app.profilePicture || "https://placehold.co/50x50"}
                        alt={app.fullName}
                        className="w-12 h-12 rounded-full"
                      />
                      <div className="ml-4">
                        <h3 className="text-lg font-bold">{app.fullName}</h3>
                        <p className="text-gray-600">{app.email}</p>
                        <p className="text-gray-600">{app.phone}</p>
                      </div>

                    </div>
                    <div className='flex justify-between'>
                      <p className="text-gray-600">
                        Applied on <span className="text-blue-500">{new Date(app.createdAt).toLocaleDateString()}</span>
                      </p>
                      <p>Status :- {app.status}</p>
                    </div>
                    <p>Linkedin Profile :- {app.linkedin}</p>
                    <p>Portfolio :- {app.portfolio}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {/* Render skills if available */}
                      {app.skills && app.skills.map((skill, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-between">
                      <Link to={`/ApplicantStatus2/${app._id}`}>
                        <button className="bg-blue-100 text-blue-500 font-medium px-4 py-2 rounded-full">View Profile</button>
                      </Link>
                      <Link to={`/ApplicationStatus3/${app._id}`}>
                        <button className="bg-purple-100 text-purple-500 font-medium px-4 py-2 rounded-full">View Resume</button>
                      </Link>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div><br />

      </div>
      <Footer />
    </div>
  );
};



export default Report;
