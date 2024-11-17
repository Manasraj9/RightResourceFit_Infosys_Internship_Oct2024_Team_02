import React, { useState } from 'react';
import Navbar from '../Components/Bars/NavbarCompany';
import Footer from '../Components/Footer';
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
import './ApplicantStatus1.css';
import 'font-awesome/css/font-awesome.min.css';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import StarRateIcon from '@mui/icons-material/StarRate';
import { yellow } from '@mui/material/colors';

export const ApplicantStatus1 = () => {
  const location = useLocation();
  const [search, setSearch] = useState("");

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

  const applicants = [
    { cname: "Jake Gyll", score: 0.0, stage: "Interview", date: "13 July, 2021", role: "Designer", image: "https://placehold.co/50x50", badgeClass: "badge-interview" },
    { cname: "Guy Hawkins", score: 0.0, stage: "Interview", date: "13 July, 2021", role: "JavaScript Dev", image: "https://placehold.co/50x50", badgeClass: "badge-interview" },
    { cname: "Cyndy Lillibridge", score: 4.5, stage: "Shortlisted", date: "12 July, 2021", role: "Golang Dev", image: "https://placehold.co/50x50", badgeClass: "badge-shortlisted" },
    { cname: "Rodolfo Goode", score: 3.75, stage: "Declined", date: "11 July, 2021", role: "NET Dev", image: "https://placehold.co/50x50", badgeClass: "badge-declined" },
    { cname: "Leif Floyd", score: 4.8, stage: "Hired", date: "11 July, 2021", role: "Graphic Design", image: "https://placehold.co/50x50", badgeClass: "badge-hired" },
    { cname: "Jenny Wilson", score: 4.6, stage: "Hired", date: "9 July, 2021", role: "Designer", image: "https://placehold.co/50x50", badgeClass: "badge-hired" },
    { cname: "Jerome Bell", score: 4.0, stage: "Interviewed", date: "5 July, 2021", role: "Designer", image: "https://placehold.co/50x50", badgeClass: "badge-interviewed" },
    { cname: "Eleanor Pena", score: 3.9, stage: "Declined", date: "5 July, 2021", role: "Designer", image: "https://placehold.co/50x50", badgeClass: "badge-declined" },
    { cname: "Darrell Steward", score: 4.2, stage: "Shortlisted", date: "3 July, 2021", role: "Designer", image: "https://placehold.co/50x50", badgeClass: "badge-shortlisted" },
    { cname: "Floyd Miles", score: 4.1, stage: "Interviewed", date: "1 July, 2021", role: "Designer", image: "https://placehold.co/50x50", badgeClass: "badge-interviewed" }
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
              <h1 className="text-2xl font-bold">Total Applicants: 19</h1>
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
                {applicants
                  .filter((applicant) =>
                    applicant.cname.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((applicant, index) => (
                    <tr key={index} className="table-row">
                      <td className="py-2 px-4 flex items-center">
                        <input type="checkbox" className="mr-2" />
                        <img
                          src={applicant.image}
                          alt={`Profile picture of ${applicant.cname}`}
                          className="w-10 h-10 rounded-full mr-2"
                        />
                        {applicant.cname}
                      </td>
                      <td className="py-2 px-4 flex items-center">
                        <StarRateIcon sx={{ color: yellow[800] }}/>{applicant.score}
                      </td>
                      <td className="py-2 px-4">
                        <span className={`badge ${applicant.badgeClass}`}>
                          {applicant.stage}
                        </span>
                      </td>
                      <td className="py-2 px-4">{applicant.date}</td>
                      <td className="py-2 px-4">{applicant.role}</td>
                      <td className="py-2 px-4">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
                          View Application
                        </button>
                      </td>
                      <td className="py-2 px-4 ">
                      <IconButton className='hover:bg-red-500' >
                        <DeleteIcon className='hover:text-red-600'/>
                      </IconButton>
                      </td>
                    </tr>
                  ))}
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
