import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Bars/NavbarCompany';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
  Box,
  Typography,
  Card,
  CardContent,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  ListItemSecondaryAction,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SecondaryNavbar from '../Components/Bars/SecondaryNavbar';
import { useLocation } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import MessageIcon from '@mui/icons-material/Message';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PeopleIcon from '@mui/icons-material/People';
import WorkIcon from '@mui/icons-material/Work';
import ScheduleIcon from '@mui/icons-material/Schedule';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import axios from 'axios';
import { useParams } from "react-router-dom";

const JobListing = () => {
  const { jobId } = useParams();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [jobToDelete, setJobToDelete] = useState(null);
  const [jobUpdates, setJobUpdates] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [status, setStatus] = useState('open');
  const [jobDetails, setJobDetails] = useState({
    title: '',
    description: '',
    responsibilities: '',
    qualifications: '',
    niceToHaves: '',
    salaryRange: { min: '', max: '' },
    locations: [],
    employmentTypes: [],
    skills: [],
    perks: [],
  });
  const [jobLocations, setJobLocations] = useState(['']);
  const [skills, setSkills] = useState([]);
  const location = useLocation();
  const [newLocation, setNewLocation] = useState('');
  const [newPerk, setNewPerk] = useState('');
  const [newSkill, setNewSkill] = useState('');
  const [newPerkDescription, setNewPerkDescription] = useState('');
  const [isOpen, setIsOpen] = useState(true);
  const [jobStatuses, setJobStatuses] = useState({});
  const [employmentType, setEmploymentType] = useState('');
  const handleClickOpen = (job) => {
    setJobToDelete(job);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setJobToDelete(null);
  };

  const confirmDelete = async () => {
    if (jobToDelete) {
      const success = await handleDelete(jobToDelete._id);
      handleClose();
      if (success) {
        window.location.reload();
      }
    }
  };

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch('http://localhost:1000/jobs');
        const data = await response.json();
        setJobUpdates(data);
        setLoading(false);

        // Initialize job statuses for each job
        const initialStatus = {};
        data.forEach(job => {
          initialStatus[job._id] = job.status === 'open'; // 'open' as true, 'closed' as false
        });
        setJobStatuses(initialStatus);
      } catch (error) {
        console.error('Error fetching jobs:', error);
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

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

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:1000/jobs/${id}`);
      window.location.reload(); // Reload the page after deletion
    } catch (error) {
      console.error("Failed to delete job:", error);
    }
  };



  const handleEdit = (job) => {
    if (job) {
      setSelectedJob(job);
      setJobDetails({
        id: job._id || '', // Ensure to include the job ID here
        title: job.title || '',
        description: job.description || '',
        responsibilities: job.responsibilities || '',
        qualifications: job.qualifications || '',
        niceToHaves: job.niceToHaves || '',
        salaryRange: job.salaryRange || { min: '', max: '' },
        locations: job.locations || [],
        employmentTypes: job.employmentTypes || [],
        skills: job.skills || [],
        perks: job.perks || [],
      });
      setJobLocations(job.locations || ['']);
      setSkills(job.skills || []);
      setOpen(true);
    }
  };

  const handleUpdate = async () => {
    const jobId = jobDetails.id; // This should now correctly reference the job ID

    if (!jobId) {
      console.error("Job ID is undefined.");
      return; // Exit early if jobId is not valid
    }

    const updatedJobDetails = {
      ...jobDetails,
      perks: jobDetails.perks.map(perk => ({
        title: perk.name || '', // Ensure to access the correct property
        description: perk.description || '', // Ensure description exists
      })),
    };

    console.log("Job Details:", updatedJobDetails); // Log updated job details
    console.log("Job ID:", jobId); // Log job ID

    try {
      const updatedJob = await updateJob(jobId, updatedJobDetails);
      // Handle the updated job response as needed
    } catch (error) {
      console.error('Error updating job:', error);
    }
  };


  const updateJob = async (jobId, jobData) => {
    try {
      const response = await fetch(`http://localhost:1000/jobs/${jobId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(jobData),
      });

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(`Failed to update job: ${errorMessage}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Error updating job:', error);
    }
  };


  const employmentTypeOptions = [
    "Full-time",
    "Part-time",
    "Contract",
    "Internship",
    "Freelance",
    "Temporary",
    "Remote",
  ];

  const handleEmploymentTypesChange = (event) => {
    const { target: { value } } = event;
    setJobDetails((prevDetails) => ({
      ...prevDetails,
      employmentTypes: typeof value === 'string' ? value.split(',') : value,
    }));
  };

  const handleSkillChange = (index, value) => {
    const updatedSkills = [...skills];
    updatedSkills[index] = value;
    setSkills(updatedSkills);
  };
  // Handle job detail changes
  const handleChange = (e) => {
    setJobDetails({ ...jobDetails, [e.target.name]: e.target.value });
  };

  // Handle adding new location
  const handleAddLocation = () => {
    if (newLocation) {
      setJobDetails((prevDetails) => ({
        ...prevDetails,
        locations: [...prevDetails.locations, newLocation],
      }));
      setNewLocation('');
    }
  };

  // Handle deleting location
  const handleDeleteLocation = (locationToDelete) => {
    setJobDetails((prevDetails) => ({
      ...prevDetails,
      locations: prevDetails.locations.filter((location) => location !== locationToDelete),
    }));
  };

  // Handle adding new skill
  const handleAddSkill = () => {
    if (newSkill) {
      setJobDetails((prevDetails) => ({
        ...prevDetails,
        skills: [...prevDetails.skills, newSkill],
      }));
      setNewSkill('');
    }
  };

  // Handle deleting skill
  const handleDeleteSkill = (skillToDelete) => {
    setJobDetails((prevDetails) => ({
      ...prevDetails,
      skills: prevDetails.skills.filter((skill) => skill !== skillToDelete),
    }));
  };

  // Handle adding new perk
  const handleAddPerk = () => {
    if (newPerk && newPerkDescription) {
      setJobDetails((prevDetails) => ({
        ...prevDetails,
        perks: [...prevDetails.perks, { name: newPerk, description: newPerkDescription }],
      }));
      setNewPerk('');
      setNewPerkDescription('');
    }
  };

  // Handle deleting perk
  const handleDeletePerk = (perkToDelete) => {
    setJobDetails((prevDetails) => ({
      ...prevDetails,
      perks: prevDetails.perks.filter((perk) => perk.name !== perkToDelete.name),
    }));
  };

  // Handle updating employment type
  const handleUpdateEmploymentType = () => {
    if (employmentType) {
      setJobDetails((prevDetails) => ({
        ...prevDetails,
        employmentTypes: [...prevDetails.employmentTypes, employmentType],
      }));
      setEmploymentType('');
    }
  };

  // Handle deleting employment type
  const handleDeleteEmploymentType = (typeToDelete) => {
    setJobDetails((prevDetails) => ({
      ...prevDetails,
      employmentTypes: prevDetails.employmentTypes.filter((type) => type !== typeToDelete),
    }));
  };

  const toggleSwitch = async (jobId) => {
    // Toggle the status locally first
    setJobStatuses(prevStatuses => ({
      ...prevStatuses,
      [jobId]: !prevStatuses[jobId] // Toggle the job status
    }));

    try {
      const response = await axios.patch(`http://localhost:1000/jobs/toggle-status/${jobId}`);
      console.log("Response from server:", response.data);

      // If the response is successful, update jobStatuses with the server's response
      setJobStatuses(prevStatuses => ({
        ...prevStatuses,
        [jobId]: response.data.job.status === 'open'
      }));
    } catch (error) {
      console.error("Error during PATCH request:", error);

      // If error occurs, revert the toggle back to previous state
      setJobStatuses(prevStatuses => ({
        ...prevStatuses,
        [jobId]: !prevStatuses[jobId]
      }));
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }


  return (
    <div>
      <Navbar />
      <div className="flex flex-grow">
        <Box sx={{ width: 240, flexShrink: 0, [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box', position: 'relative', top: '64px', height: 'calc(100vh - 64px)', overflowY: 'auto' } }}>
          <List>
            {sidebarItems.map((item) => (
              <ListItem button key={item.text} component="a" href={item.path} sx={{ color: location.pathname === item.path ? 'blue' : 'inherit', backgroundColor: location.pathname === item.path ? 'rgba(0, 0, 255, 0.1)' : 'transparent' }}>
                <ListItemIcon sx={{ color: location.pathname === item.path ? 'blue' : 'inherit' }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>

        <div className="flex w-full">
          <div className="flex-grow p-4">
            <SecondaryNavbar />
            <Box>
              <Typography variant="h4" sx={{ marginTop: '20px' }}>Job Listings</Typography>
              <div className='flex flex-wrap gap-10 mt-5 ml-10'>
                {jobUpdates.map((job) => {
                  const isOpen = jobStatuses[job._id]; // Get the status for this specific job
                  return (
                    <Card key={job._id} sx={{ marginBottom: '20px' }} className='w-[50vh]'>
                      <CardContent>
                        <Typography variant="h4">{job.title}</Typography>
                        <Typography variant="h6">Salary Range :- {job.salaryRange.min} - {job.salaryRange.max}</Typography>
                        <Typography variant="body2">Description :- {job.description}</Typography>
                        <Typography variant="body2">Responsibilities :- {job.responsibilities}</Typography>
                        <Typography variant="body2">Qualifications :- {job.qualifications}</Typography>
                        <Typography variant="body2">Nice to Have :- {job.niceToHaves}</Typography>

                        <div className='flex justify-between items-center space-x-2'>
                          <div className="flex items-center space-x-1">
                            <span className="text-gray-700 font-medium min-w-14">
                              {isOpen ? 'Open' : 'Closed'}
                            </span>

                            <div
                              onClick={() => toggleSwitch(job._id)}
                              className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors duration-300
                ${isOpen ? 'bg-green-500' : 'bg-red-500'}`} // Background color toggle
                            >
                              <div
                                className={`h-5 w-5 bg-white rounded-full shadow-md transform transition-transform duration-300
                    ${isOpen ? 'translate-x-6' : 'translate-x-0'}`} // Knob position toggle
                              ></div>
                            </div>
                          </div>

                          <Link to={`/report/${job._id}`}>
                            <Button className="px-4 py-2 rounded-md shadow" sx={{ backgroundColor: '#3f72af', color: 'white', '&:hover': { backgroundColor: '#112d4e' } }}>
                              View Report
                            </Button>
                          </Link>

                          <IconButton className='' onClick={() => handleEdit(job)}>
                            <EditIcon />
                          </IconButton>

                          <IconButton className='' onClick={() => handleClickOpen(job)}>
                            <DeleteIcon />
                          </IconButton>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Confirm Deletion</DialogTitle>
                <DialogContent>
                  <Typography>
                    Are you sure you want to delete this job from Job Listing?
                  </Typography>
                </DialogContent>
                <DialogActions>
                  {/* Cancel Button */}
                  <Button
                    onClick={handleClose}
                    sx={{ backgroundColor: 'grey', color: 'white', '&:hover': { backgroundColor: 'darkgrey' } }}
                  >
                    Cancel
                  </Button>
                  {/* Delete Button */}
                  <Button
                    onClick={confirmDelete}
                    sx={{ backgroundColor: 'red', color: 'white', '&:hover': { backgroundColor: 'darkred' } }}
                  >
                    Delete
                  </Button>
                </DialogActions>
              </Dialog>



              <Dialog open={Boolean(selectedJob)} onClose={() => setSelectedJob(null)}>
                <DialogTitle className='text-2xl pb-2 z-0' >Edit Job Listing</DialogTitle>
                <DialogContent className='p-4 flex flex-col gap-4'>
                  <TextField className='pt-2 z-10' name="title" label="Job Title" value={jobDetails.title} onChange={handleChange} fullWidth />
                  <TextField name="description" label="Job Description" value={jobDetails.description} onChange={handleChange} fullWidth multiline rows={4} />
                  <TextField name="responsibilities" label="Responsibilities" value={jobDetails.responsibilities} onChange={handleChange} fullWidth multiline rows={4} />
                  <TextField name="qualifications" label="Qualifications" value={jobDetails.qualifications} onChange={handleChange} fullWidth multiline rows={4} />
                  <TextField name="niceToHaves" label="Nice to Haves" value={jobDetails.niceToHaves} onChange={handleChange} fullWidth multiline rows={4} />
                  <TextField name="salaryMin" label="Min Salary" type="number" value={jobDetails.salaryRange.min} onChange={(e) => setJobDetails({ ...jobDetails, salaryRange: { ...jobDetails.salaryRange, min: e.target.value } })} fullWidth />
                  <TextField name="salaryMax" label="Max Salary" type="number" value={jobDetails.salaryRange.max} onChange={(e) => setJobDetails({ ...jobDetails, salaryRange: { ...jobDetails.salaryRange, max: e.target.value } })} fullWidth />

                  <Box>
                    <List>
                      {jobDetails.locations.map((location, index) => (
                        <ListItem key={index}>
                          <ListItemText primary={location} />
                          <ListItemSecondaryAction>
                            <IconButton edge="end" onClick={() => handleDeleteLocation(location)}>
                              <DeleteIcon />
                            </IconButton>
                          </ListItemSecondaryAction>
                        </ListItem>
                      ))}
                    </List>
                    <TextField
                      label="Add Location"
                      value={newLocation}
                      onChange={(e) => setNewLocation(e.target.value)}
                      fullWidth
                    />
                    <Button onClick={handleAddLocation}>Add Location</Button>
                  </Box>

                  <Typography>Skills:</Typography>
                  <Box>
                    <List>
                      {jobDetails.skills.map((skill, index) => (
                        <ListItem key={index}>
                          <ListItemText primary={skill} />
                          <ListItemSecondaryAction>
                            <IconButton edge="end" onClick={() => handleDeleteSkill(skill)}>
                              <DeleteIcon />
                            </IconButton>
                          </ListItemSecondaryAction>
                        </ListItem>
                      ))}
                    </List>
                    <TextField
                      label="Add Skill"
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      fullWidth
                    />
                    <Button onClick={handleAddSkill}>Add Skill</Button>
                  </Box>

                  <Typography>Perks:</Typography>
                  <Box>
                    {jobDetails.perks.map((perk, index) => (
                      <Box key={index}>
                        <Typography variant="h6">{perk.name}</Typography>
                        <Typography>{perk.description}</Typography>
                        <IconButton edge="end" onClick={() => handleDeletePerk(perk)}>
                          <DeleteIcon />
                        </IconButton>
                      </Box>
                    ))}
                    <TextField
                      label="Add Perk"
                      value={newPerk}
                      onChange={(e) => setNewPerk(e.target.value)}
                      fullWidth
                    />
                    <TextField
                      label="Perk Description"
                      value={newPerkDescription}
                      onChange={(e) => setNewPerkDescription(e.target.value)}
                      fullWidth
                    />
                    <Button onClick={handleAddPerk}>Add Perk</Button>
                  </Box>

                  <Typography>Employment Types:</Typography>
                  <Box>
                    {jobDetails.employmentTypes.map((type, index) => (
                      <ListItem key={index}>
                        <ListItemText primary={type} />
                        <ListItemSecondaryAction>
                          <IconButton edge="end" onClick={() => handleDeleteEmploymentType(type)}>
                            <DeleteIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    ))}
                    <TextField
                      label="Add Employment Type"
                      value={employmentType}
                      onChange={(e) => setEmploymentType(e.target.value)}
                      fullWidth
                    />
                    <Button onClick={handleUpdateEmploymentType}>Add Employment Type</Button>
                  </Box>
                </DialogContent>
                <DialogActions>
                  <Button onClick={() => setSelectedJob(null)}>Cancel</Button>
                  <Button onClick={handleUpdate} color="primary">Update</Button>
                </DialogActions>
              </Dialog>
            </Box>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JobListing;
