import React, { useState } from 'react';
import Navbar from '../Components/NavbarHome';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import jobsearchIcon from '../images/jobsearch.png';
import joblocationIcon from '../images/joblocation.png';
import jobskillsIcon from '../images/jobskills.png';
import './Jobseekerpage.css';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import googleIcon from '../images/google.png';
import appleIcon from '../images/apple.png';
import intelIcon from '../images/intel.png';

const Alljobs = [
    { 
        title: 'Technical Support Specialist', 
        button: 'Part-Time', 
        salary: 'Salary: 20,000 INR - 25,000 INR', 
        icon: googleIcon, 
        title2: 'Google.Inc', 
        icon2: joblocationIcon, 
        location: 'New Delhi, India', 
        button1: 'View Details', 
        button2: 'Apply Now',
        bookmarked: false 
    },
    {
        title: 'Marketing Officer', 
        button: 'Part-Time', 
        salary: 'Salary: 15,000 INR - 35,000 INR', 
        icon: intelIcon, 
        title2: 'Intel Corp',
        icon2: joblocationIcon, 
        location: 'Bangalore, India', 
        button1: 'View Details', 
        button2: 'Apply Now',
        bookmarked: false 
    },
    { 
        title: 'Senior UI/UX Designer', 
        button: 'Full-Time', 
        salary: 'Salary: 30,000 INR - 45,000 INR', 
        icon: googleIcon, 
        title2: 'Google.Inc', 
        icon2: joblocationIcon, 
        location: 'New Delhi, India', 
        button1: 'View Details', 
        button2: 'Apply Now',
        bookmarked: false 
    },
];

const Alljobcolumn3 = [
    { 
        title: 'Senior UI/UX Designer', 
        button: 'Part-Time', 
        salary: 'Salary: 40,000 INR - 60,000 INR', 
        icon: appleIcon, 
        title2: 'Apple', 
        icon2: joblocationIcon, 
        location: 'Boston, USA', 
        button1: 'View Details', 
        button2: 'Apply Now',
        bookmarked: false 
    },
    {
        title: 'Technical Support Specialist', 
        button: 'Full-Time', 
        salary: 'Salary: 35,000 INR - 55,000 INR', 
        icon: intelIcon, 
        title2: 'Intel Corp',
        icon2: joblocationIcon, 
        location: 'Bangalore, India', 
        button1: 'View Details', 
        button2: 'Apply Now',
        bookmarked: false 
    },
    { 
        title: 'Marketing Officer', 
        button: 'Full-Time', 
        salary: 'Salary: 40,000 INR - 50,000 INR', 
        icon: appleIcon, 
        title2: 'Apple', 
        icon2: joblocationIcon, 
        location: 'Boston, USA', 
        button1: 'View Details', 
        button2: 'Apply Now',
        bookmarked: false 
    },
];

const JobseekerPage = () => {
    const [jobs, setJobs] = useState(Alljobs); 
    const [column3Jobs, setColumn3Jobs] = useState(Alljobcolumn3); // Manage state for column 3
    const [checkedStates, setCheckedStates] = useState(Array(18).fill(false));

    const handleCheckboxChange = (index) => {
        const newCheckedStates = [...checkedStates];
        newCheckedStates[index] = !newCheckedStates[index]; 
        setCheckedStates(newCheckedStates);
    };

    const toggleBookmark = (index, column) => {
        if (column === 1) {
            const newJobs = [...jobs];
            newJobs[index].bookmarked = !newJobs[index].bookmarked; 
            setJobs(newJobs); 
        } else if (column === 2) {
            const newColumn3Jobs = [...column3Jobs];
            newColumn3Jobs[index].bookmarked = !newColumn3Jobs[index].bookmarked; 
            setColumn3Jobs(newColumn3Jobs); 
        }
    };

    return (
        <div>
            <Navbar />
            <div className='bg-[#dbe2ef]'><br />
                <div className='flex items-center justify-center'>
                    <div className='searchbox-container flex justify-center items-center'>
                    <ul className='flex justify-center items-center text-white gap-10'>
                        <li className='flex flex-col items-center'>
                            <img src={jobsearchIcon} alt="Search Icon" className='icon icon-search' />
                            <input type='text' placeholder='Enter job title' className='inputfield1' />
                        </li>
                        <li className='flex flex-col items-center'>
                            <img src={joblocationIcon} alt="Location Icon" className='icon icon-location' />
                            <input type='text' placeholder='Enter location' className='inputfield2' />
                        </li>
                        <li className='flex flex-col items-center'>
                            <img src={jobskillsIcon} alt="Business Icon" className='icon icon-skills' />
                            <input type='text' placeholder='Enter skills' className='inputfield3' />
                        </li>
                        <li>
                            <Link to="/">
                                <button className='searchbutton'>Search</button>
                            </Link>
                        </li>
                        <li>
                            <Link className='text-[#808080] custom-clear'>
                                <button className='clearbutton'>clear all</button>
                            </Link>
                        </li>
                    </ul>
                    </div>
                </div><br />


                <div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 p-4 px-14">

                        {/* grid column 1 */}
                        <div className="bg-[#FCFCFC] text-black p-4 gridcol1">
                            <div className='mx-8 font-bold text-2xl'>Salary Range</div><br />
                            <div className='mx-8' style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: '32px', marginRight: '32px' }}>
                                <input type='number' placeholder='Min' className='minfield' />
                                <input type='number' placeholder='Max' className='maxfield' />
                            </div><br />
                            <div><hr className='border-t-2 mx-8'></hr></div><br />

                            <div className='mx-8 font-bold text-2xl'>Job type</div><br />
                            {['All (2567)', 'Full-Time (450)', 'Part-Time (145)', 'Internship (65)', 'Contract (12)'].map((label, index) => (
                                <div key={index}>
                                    <input
                                        type="checkbox"
                                        checked={checkedStates[index]}
                                        onChange={() => handleCheckboxChange(index)}
                                        className='mr-4 mx-12 w-4 h-4'/>
                                    <span style={{ fontSize: '18px' }}>
                                        {label}
                                    </span>
                                </div>
                            ))}
                            <br />

                            <div><hr className='mx-8 border-t-2'></hr></div><br />
                            <div className='mx-8 font-bold text-2xl'>Work mode</div><br />
                            {['On-site', 'Remote (180)', 'Hybrid (200)'].map((label, index) => (
                                <div key={index + 5}>
                                    <input
                                        type="checkbox"
                                        checked={checkedStates[index + 5]}
                                        onChange={() => handleCheckboxChange(index + 5)}
                                        className='mr-4 mx-12 w-4 h-4'/>
                                    <span style={{ fontSize: '18px' }}>
                                        {label}
                                    </span>
                                </div>
                            ))}
                            <br />

                            <div><hr className='mx-8 border-t-2'></hr></div><br />
                            <div className='mx-8 font-bold text-2xl'>Job Functions</div><br />
                            {['Marketing (21)', 'Engineering (45)', 'Design (71)', 'Sales (24)', 'Customer Service (101)'].map((label, index) => (
                                <div key={index + 8}>
                                    <input
                                        type="checkbox"
                                        checked={checkedStates[index + 8]}
                                        onChange={() => handleCheckboxChange(index + 8)}
                                        className='mr-4 mx-12 w-4 h-4' />
                                    <span style={{ fontSize: '18px' }}>
                                        {label}
                                    </span>
                                </div>
                            ))}
                            <br />

                            <div><hr className='mx-8 border-t-2'></hr></div><br />
                            <div className='font-bold mx-8 text-2xl'>Experience Level</div><br />
                            {['Fresher/Entry-Level (265)', 'Junior (21)', 'Mid-Level (212)', 'Senior (12)', 'Lead/Managerial (24)', 'Director/Executive (10)'].map((label, index) => (
                                <div key={index + 13}>
                                    <input
                                        type="checkbox"
                                        checked={checkedStates[index + 13]}
                                        onChange={() => handleCheckboxChange(index + 13)}
                                        className='mr-4 mx-12 w-4 h-4' />
                                    <span style={{ fontSize: '18px' }}>
                                        {label}
                                    </span>
                                </div>
                            ))}
                            <br />
                            <div className='underline text-2xl text-center text-[#4E81BA]'>
                                <Link>Expand all</Link>
                            </div>
                        </div>

                        {/* grid column 2 */}
                        <div className="bg-[#dbe2ef] gridcol2"> 
                            {jobs.map((job, index) => (
                                <div key={index} className="job-container mb-10">
                                    <div className="job-details bg-white text-black p-4">
                                        <div className='font-bold text-2xl'>{job.title}</div>
                                        <div onClick={() => toggleBookmark(index, 1)} className='custom-bookmark'>
                                            {job.bookmarked ? (
                                                <BsBookmarkFill style={{ cursor: 'pointer', color: '#ACB2B9', height: '20px', width: '20px' }} />
                                            ) : (
                                                <BsBookmark style={{ cursor: 'pointer', height: '20px', width: '20px' }} />
                                            )}
                                        </div>
                                        <br /><div className="job-typebtn">
                                            <Link><button>{job.button}</button></Link>
                                        </div>
                                        <p className='custom-salary'>{job.salary}</p><br /><br />
                                        <img src={job.icon} alt="Company Icon" className='h-20 w-20'/>
                                        <div className='custom-title2 font-bold'>{job.title2}</div>
                                        <p>
                                            <img src={job.icon2} alt="Location Icon" className='h-5 w-5 ml-24' />
                                            <div className='ml-28 custom-loc'>{job.location}</div>
                                        </p><br /><br />
                                        <div className="buttons-container flex justify-between items-center">
                                            <Link><button className="view-button">{job.button1}</button></Link>
                                            <Link><button className="apply-button">{job.button2}</button></Link>
                                        </div><br />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* grid column 3 */}
                        <div className="bg-[#dbe2ef] gridcol2"> 
                            {column3Jobs.map((job, index) => (
                                <div key={index} className="job-container mb-10">
                                    <div className="job-details bg-white text-black p-4">
                                        <div className='font-bold text-2xl'>{job.title}</div>
                                        <div onClick={() => toggleBookmark(index, 2)} className='custom-bookmark'>
                                            {job.bookmarked ? (
                                                <BsBookmarkFill style={{ cursor: 'pointer', color: '#ACB2B9', height: '20px', width: '20px' }} />
                                            ) : (
                                                <BsBookmark style={{ cursor: 'pointer', height: '20px', width: '20px' }} />
                                            )}
                                        </div>
                                        <br /><div className="job-typebtn">
                                            <Link><button>{job.button}</button></Link>
                                        </div>
                                        <p className='custom-salary'>{job.salary}</p><br /><br />
                                        <img src={job.icon} alt="Company Icon" className='h-20 w-20'/>
                                        <div className='custom-title2 font-bold'>{job.title2}</div>
                                        <p>
                                            <img src={job.icon2} alt="Location Icon" className='h-5 w-5 ml-24' />
                                            <div className='ml-28 custom-loc'>{job.location}</div>
                                        </p><br /><br />
                                        <div className="buttons-container flex justify-between items-center">
                                            <Link><button className="view-button">{job.button1}</button></Link>
                                            <Link><button className="apply-button">{job.button2}</button></Link>
                                        </div><br />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='underline text-2xl text-center text-[#4E81BA]'>
                    <Link>View more</Link>
                </div><br />
            </div>
            <Footer />
        </div>
    );
};

export default JobseekerPage;
