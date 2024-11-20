import React from 'react';
import Navbar from '../Components/Bars/NavbarJobseeker';
import Footer from '../Components/Footer';
import './Jobdescription.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import nomadIcon from '../images/nomad.png';
import shareIcon from '../images/shareimg.png';
import vrImg from '../images/vrimg.png';

import healthcareIcon from '../images/healthcare.png';
import vacationIcon from '../images/vacation.png';
import skilldevIcon from '../images/skill-dev.png';
import summitsIcon from '../images/summits.png';
import remoteworkIcon from '../images/remote-work.png';
import commuterbenefitIcon from '../images/commuter-net.png';
import savingIcon from '../images/saving.png';
import arrowIcon from '../images/arrow.png';
import nomadcompanyIcon from '../images/nomadcompany.png';

import discordIcon from '../images/discord.png';
import mazeIcon from '../images/maze.png';
import udacityIcon from '../images/udacity.png';
import webflowIcon from '../images/webflow.png';
import foundationIcon from '../images/foundation.png';
import squareIcon from '../images/square.png';
import divyIcon from '../images/divy.png';


const PerksandBenefits = [
    { title: 'Full Healthcare', description: 'We believe in thriving communities and that starts with our team being happy and healthy.', icon: healthcareIcon },
    { title: 'Unlimited Vacation', description: 'We believe you should have a flexible schedule that makes space for family, wellness, and fun.', icon: vacationIcon },
    { title: 'Skill Development', description: 'We believe in always learning and leveling up our skills. Whether its a conference or online course.', icon: skilldevIcon },
    { title: 'Team Summits', description: 'Every 6 months we have a full team summit where we have fun, reflect, and plan for the upcoming quarter.', icon: summitsIcon },
    { title: 'Remote Working', description: 'You know how you perform your best. Work from home, coffee shop or anywhere when you feel like it.', icon: remoteworkIcon },
    { title: 'Commuter Benefits', description: 'We’re grateful for all the time and energy each team member puts into getting to work every day.', icon: commuterbenefitIcon },
    { title: 'We give back', description: 'We double-match employee donations up to $/€600 to support their chosen organizations.', icon: savingIcon },
];


const SimilarJobs = [
    { title: 'Social media Assistant', location: 'Nomad . Paris, France', time: 'Full Time', button1: 'Marketing', button2: 'Design', icon: nomadIcon },
    { title: 'Social media Assistant', location: 'Discord . Paris, France', time: 'Full Time', button1: 'Marketing', button2: 'Design', icon: discordIcon },
    { title: 'Brand Designer', location: 'Maze . San Fransisco, USA', time: 'Full Time', button1: 'Marketing', button2: 'Design', icon: mazeIcon },
    { title: 'Brand Designer', location: 'Udacity . San Fransisco, USA', time: 'Full Time', button1: 'Marketing', button2: 'Design', icon: udacityIcon },
    { title: 'Interactive Developer', location: 'Webflow . Hamburg, Germany', time: 'Full Time', button1: 'Marketing', button2: 'Design', icon: webflowIcon },
    { title: 'Interactive Developer', location: 'Foundation . Hamburg, Germany', time: 'Full Time', button1: 'Marketing', button2: 'Design', icon: foundationIcon },
    { title: 'HR Manager', location: 'Square . Lucern, Switzerland', time: 'Full Time', button1: 'Marketing', button2: 'Design', icon: squareIcon },
    { title: 'HR Manager', location: 'Divy . Lucern, Switzerland', time: 'Full Time', button1: 'Marketing', button2: 'Design', icon: divyIcon },
];


const Jobdescription = () => {
    const { jobId } = useParams();
    const { userId } = useParams();  // Get jobId from the URL params
    const [job, setJob] = useState(null);
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [hasApplied, setHasApplied] = useState(false);
    const [loading, setLoading] = useState(true);  // Loading state for job details
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        jobTitle: '',
        linkedin: '',
        portfolio: '',
        additionalInfo: '',
        resume: null,
    });

    useEffect(() => {
        const loadJobDetails = async () => {
          setLoading(true);  // Start loading
          setError(null);  // Reset error state
          try {
            // Fetch job details by jobId
            const jobResponse = await axios.get(`http://localhost:1000/jobs/${jobId}`);
            console.log('Job Data:', jobResponse.data); // Log job data for debugging
            setJob(jobResponse.data);  // Set job data in state
    
            // Check if the user has already applied for this job
            const appliedResponse = await axios.get(`http://localhost:1000/hasApplied/${userId}/${jobId}`);
            setHasApplied(appliedResponse.data.applied);  // Set application status
          } catch (error) {
            console.error('Error fetching job details or checking application status:', error);
            setError('Error loading job details or checking application status. Please try again later.');
          } finally {
            setLoading(false);  // End loading
          }
        };
    
        loadJobDetails();
      }, [jobId, userId]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type === 'application/pdf') {
            setFormData({ ...formData, resume: file });
        } else {
            toast.error('Please upload a valid PDF file.', {
                position: "top-right",
                autoClose: 5000,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Validate required fields
        if (!formData.fullName || !formData.email || !formData.resume) {
            toast.error('Please fill out all required fields.', {
                position: "top-right",
                autoClose: 5000,
            });
            return;
        }
    
        const formDataToSend = new FormData();
        Object.keys(formData).forEach((key) => {
            formDataToSend.append(key, formData[key]);
        });
    
        try {
            // Step 1: Post the application
            const applicationResponse = await axios.post(`http://localhost:1000/apply/${jobId}`, formDataToSend, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
    
            // Log the response from the application post
            console.log('Application Response:', applicationResponse);
    
            if (applicationResponse.status === 201 || applicationResponse.data.message === 'Application submitted successfully') {
                toast.success('Application submitted successfully', {
                    position: "top-right",
                    autoClose: 5000,
                });
    
                // Step 2: Send notification to the employer
                const notificationData = {
                    jobId: job._id,               // Job ID
                    companyId: job.companyId,     // Company ID (employer)
                    message: `${formData.fullName} has applied for the job: ${job.title}`,  // Sample notification message
                };
    
                // Log notification data before sending
                console.log('Notification Data:', notificationData);
    
                const notificationResponse = await axios.post('http://localhost:1000/notifications', notificationData);
    
                // Log the response from the notification post
                console.log('Notification Response:', notificationResponse);
    
                if (notificationResponse.data.success) {
                    toast.success('Notification sent to the employer!', {
                        position: "top-right",
                        autoClose: 5000,
                    });
                } else {
                    console.error('Failed to send notification.', notificationResponse.data);
                    toast.error('Failed to send notification.', {
                        position: "top-right",
                        autoClose: 5000,
                    });
                }
    
                // Reset form and hide form
                setIsFormVisible(false);
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    jobTitle: '',
                    linkedin: '',
                    portfolio: '',
                    additionalInfo: '',
                    resume: null,
                });
            } else {
                console.error('Application failed:', applicationResponse.data.message);
                toast.error(applicationResponse.data.message || 'Something went wrong. Please try again.', {
                    position: "top-right",
                    autoClose: 5000,
                });
            }
        } catch (error) {
            console.error('Error in submission process:', error);
    
            if (error.response) {
                console.error('Server Error Response:', error.response);
                toast.error(error.response.data.message || 'Unexpected error. Please try again.', {
                    position: "top-right",
                    autoClose: 5000,
                });
            } else if (error.request) {
                console.error('Error Request:', error.request);
                toast.error('No response from server. Please try again.', {
                    position: "top-right",
                    autoClose: 5000,
                });
            } else {
                console.error('Unexpected Error:', error.message);
                toast.error('Unexpected error. Please try again.', {
                    position: "top-right",
                    autoClose: 5000,
                });
            }
        }
    };
    
    
    
    const handleApplyClick = () => {
        setIsFormVisible(true);
    };

    if (!job) {
        return <p>Loading job details...</p>;
    }
    return (
        <div>
            <Navbar />

            {/*Job Description*/}
            <div className={`bg-[#dbe2ef] ${isFormVisible ? 'blur-background' : ''}`}><br /><br />
                <div className='company-container ml-36 mr-36'>
                    <img src={nomadIcon} alt="Nomad Icon" className='nomad-icon h-12 w-15' />
                    <div className='job-info'>
                        <p className='font-bold text-2xl'>{job.title}</p>
                        <p className='nomad-location'>{job.companyName} . {job.joblocations.join(', ')} . {job.employmentType}</p>
                    </div>
                    <Link>
                        <img src={shareIcon} alt="share Icon" className='share-icon h-8 w-8 mr-4' />
                    </Link>
                    <Link>
                        <img src={vrImg} alt="vertical Image" className='h-10 w-8 color-[#D6DDEB]' />
                    </Link>
                    <Link>
                        <button onClick={handleApplyClick} className='bg-[#3f72af] flex items-center hover:bg-white hover:text-[#3f72af] apply-btn'>
                            Apply
                        </button>
                    </Link>
                </div><br /><br /><br /><br />

                {/* Application Form */}
                {isFormVisible && (
                    <div>
                        {/* Job details here */}
                        <button onClick={handleApplyClick}>Apply Now</button>

                        {isFormVisible && (
                            <div className='application-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
                                <div className='application-form-container ml-36 mr-36 bg-white shadow-md max-h-[80vh] w-[90%] sm:w-[60%] md:w-[50%] lg:w-[40%] p-8 overflow-y-auto rounded-md'>
                                    <form onSubmit={handleSubmit}>
                                        <img src={nomadIcon} alt='Nomad Icon' className='left-8 h-12 w-15' />
                                        <div className='job-info'>
                                            <p className='font-bold text-2xl nomad-job'>{job.title}</p>
                                            <p className='nomad-jobloc text-[#7C8493]'>
                                                {job.companyName} . {job.joblocations.join(', ')} . {job.employmentType}
                                            </p>
                                        </div>
                                        <hr />

                                        <label className='block text-gray-700 mt-4'>Full name</label>
                                        <input
                                            type='text'
                                            name='fullName'
                                            value={formData.fullName}
                                            onChange={handleInputChange}
                                            className='border p-2 w-full'
                                            placeholder='Enter your full name'
                                        />

                                        <label className='block text-gray-700 mt-4'>Email address</label>
                                        <input
                                            type='email'
                                            name='email'
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className='border p-2 w-full'
                                            placeholder='Enter your email address'
                                        />

                                        <label className='block text-gray-700 mt-4'>Phone number</label>
                                        <input
                                            type='text'
                                            name='phone'
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className='border p-2 w-full'
                                            placeholder='Enter your phone number'
                                        />

                                        <label className='block text-gray-700 mt-4'>Current or previous job title</label>
                                        <input
                                            type='text'
                                            name='jobTitle'
                                            value={formData.jobTitle}
                                            onChange={handleInputChange}
                                            className='border p-2 w-full'
                                            placeholder="What’s your current or previous job title?"
                                        />

                                        <label className='block text-gray-700 mt-4'>LinkedIn URL</label>
                                        <input
                                            type='text'
                                            name='linkedin'
                                            value={formData.linkedin}
                                            onChange={handleInputChange}
                                            className='border p-2 w-full'
                                            placeholder='Link to your LinkedIn URL'
                                        />

                                        <label className='block text-gray-700 mt-4'>Portfolio URL</label>
                                        <input
                                            type='text'
                                            name='portfolio'
                                            value={formData.portfolio}
                                            onChange={handleInputChange}
                                            className='border p-2 w-full'
                                            placeholder='Link to your portfolio URL'
                                        />

                                        <label className='block text-gray-700 mt-4'>Additional information</label>
                                        <textarea
                                            name='additionalInfo'
                                            value={formData.additionalInfo}
                                            onChange={handleInputChange}
                                            className='border p-2 w-full h-32'
                                            placeholder='Add a cover letter or anything else you want to share'
                                        />

                                        <label className='block text-gray-700 mt-4'>Attach your resume</label>
                                        <input
                                            type='file'
                                            name='resume'
                                            onChange={handleFileChange}
                                            className='border p-2 w-full'
                                        />

                                        <button
                                            type='submit'
                                            className='bg-[#3f72af] text-white px-4 py-2 mt-4 hover:bg-[#2b4865]'
                                        >
                                            Submit Application
                                        </button>
                                    </form>
                                    <ToastContainer />
                                </div>
                            </div>
                        )}
                    </div>
                )}


                <div className='grid grid-cols-1 md:grid-cols-3 gap-16 ml-36 mr-36'>
                    {/* grid column 1 & 2 */}
                    <div className='text-black col-span-2'>
                        {/* Description */}
                        <p className='font-bold text-3xl text-[#25324B]'>Description</p><br />
                        <p className='text-[#515B6F]'>{job.description}</p><br />
                        {/* Responsibilities */}
                        <p className='font-bold text-3xl text-[#25324B]'>Responsibilities</p><br />
                        <p className='text-[#515B6F]'>{job.responsibilities}</p><br />
                        {/* Who are you */}
                        <p className='font-bold text-3xl text-[#25324B]'>Qualifications</p><br />
                        <p className='text-[#515B6F]'>{job.qualifications}</p><br />
                        {/* Nice to haves */}
                        <p className='font-bold text-3xl text-[#25324B]'>Nice-To-Haves</p><br />
                        <p className='text-[#515B6F]'>{job.niceToHaves}</p>
                    </div>

                    {/* grid column 3 */}
                    <div>
                        {/* About this role */}
                        <p className='font-bold text-3xl text-[#25324B]'>About this role</p><br />
                        <div className='progress-container'>
                            <div className="h-2 bg-gray-200 rounded-full progress-bar">
                                <div className="h-full bg-green-500 rounded-full" style={{ width: `${(5 / 10) * 100}%` }}></div>
                                <p className='text-gray-500'>5 applied <span className='text-[black]'>of 10 capacity</span></p>
                            </div>
                        </div><br />
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                            <div className='jobtype'>
                                <p>Appy Before</p><br />
                                <p>Job Posted On</p><br />
                                <p>Job Type</p><br />
                                <p>Salary</p><br />
                            </div>
                            <div className='jobdate font-bold'>
                                <p>Dec 31, 2024</p><br />
                                <p>Nov 1, 2024</p><br />
                                <p>{job.employmentType}</p><br />
                                <p>₹{job.salaryRange.min} - ₹{job.salaryRange.max}</p><br />
                            </div>
                        </div>
                        <hr className='hr-line' /><br />
                        {/* Required skills */}
                        <p className='font-bold text-3xl text-[#25324B]'>Required Skills</p><br />
                        <div className='text-[#515B6F]'>
                            <ul>
                                {job.skills.map((skill, index) => (
                                    <li key={index}>{skill}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div><br /><br /><br /><br />

                {/* Perks & Benefits */}
                <div>
                    <p className='font-bold text-3xl text-[#25324B] ml-36'>Perks & Benefits</p>
                    <p className='text-[#515B6F] ml-36'>This job comes with several perks and benefits</p><br /><br />
                    <div className='grid grid-cols-2 md:grid-cols-4 ml-36 mr-36 gap-8'>
                        <ul>
                            {job.perks.map((perk, index) => (
                                <li key={index}>
                                    <strong>{perk.name}</strong>: {perk.description}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div><br /><br /><br /><br />

                <div className='grid grid-cols-1 md:grid-cols-2 ml-36 mr-36 gap-16'>
                    <div>
                        <img src={nomadIcon} alt="Nomad Icon" className='h-24 w-24' />
                        <p className='text-[#25324B] font-bold text-3xl nomad-title'>Nomad</p>
                        <p className='text-[#4640DE] nomad-readmore'>Read more about nomad</p>
                        <Link>
                            <img src={arrowIcon} alt="Arrow Icon" className='h-8 w-8 arrow-img' />
                        </Link>
                        <p className='text-[#515B6F] mt-12'>Stripe is a technology company that builds economic infrastructure for the internet. Businesses of every size from new
                            startups to public companies use our software to accept payments and manage their businesses online.</p>
                    </div>
                    <div className='company-img'>
                        <img src={nomadcompanyIcon} alt='Nomad Company Icon' className='h-56 w-280' />
                    </div>
                </div><br /><br /><br /><br />

                <div className='gird grid-cols-1 md:grid-cols-2 ml-36 mr-36 gap-16'>
                    <div className='text-3xl font-bold text-[#25324B]'>Similar Jobs</div>
                    <div>
                        <p className='text-[#4640DE] alljobs'>Show all jobs</p>
                        <Link>
                            <img src={arrowIcon} alt="Arrow Icon" className='h-8 w-8 jobs-arrow' />
                        </Link>
                    </div>
                </div><br />
                <div className='grid grid-cols-1 md:grid-cols-2 px-4 md:px-12 lg:px-36 gap-8'>
                    {SimilarJobs.map((category, index) => (
                        <Link to={category.link} key={index} className='bg-white border-gray-300 p-4'>
                            <img src={category.icon} alt={category.title} className='h-20 w-20' />
                            <div className='text-2xl text-[#25324B] font-bold company-name'>{category.title}</div>
                            <div className='text-[#515B6F] company-location'>{category.location}</div>
                            <div className='text-[#56CDAD] work-time'>{category.time}</div>
                            <div className='button1-container'>
                                <Link to={category.link}>
                                    <button className='btn1'>{category.button1}</button>
                                </Link>
                                <div className='button2-container'>
                                    <Link to={category.link}>
                                        <button className='btn2'>{category.button2}</button>
                                    </Link>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div><br /><br />

            </div>

            <Footer />
        </div>
    );
};
export default Jobdescription;
