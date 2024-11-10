import React, { useState, useEffect } from 'react';
import Navbar from '../Components/Bars/NavbarJobseeker';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import jobsearchIcon from '../images/jobsearch.png';
import joblocationIcon from '../images/joblocation.png';
import jobskillsIcon from '../images/jobskills.png';
import './Jobseekerpage.css';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import axios from 'axios';

const JobseekerPage = () => {
    const [jobs, setJobs] = useState([]);
    const [title, setTitle] = useState('');
    const [joblocations, setJoblocations] = useState('');
    const [skills, setSkills] = useState('');
    const [employmentType, setemploymentType] = useState('');
    const [salaryRange, setSalaryRange] = useState('');
    const [showAllJobs, setShowAllJobs] = useState(false);
    const [checkedStates, setCheckedStates] = useState(Array(18).fill(false));

    // Function to fetch jobs
    const fetchJobs = async () => {
        console.log("Fetching jobs with parameters:", {
            title,
            joblocations,
            skills,
            employmentType,
            salaryRange,
            showAllJobs
        });

        try {
            const response = await axios.get('http://localhost:1000/jobs', {
                params: showAllJobs
                    ? {} // Empty params fetches all jobs
                    : { title, joblocations, skills, employmentType, salaryRange }
            });

            console.log("Response data:", response.data);
            setJobs(response.data);
        } catch (error) {
            console.error('Error fetching jobs:', error);
        }
    };

    // Handle form submission for job search
    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Search criteria:", { title, joblocations, skills });
        fetchJobs();
    };

    // Handle "Show All Jobs" checkbox change
    const handleCheckboxChange = (event) => {
        setShowAllJobs(event.target.checked);
        fetchJobs();
    };

    useEffect(() => {
        fetchJobs(); // Initial job fetch on component mount
    }, []);

    return (
        <div>
            <Navbar />
            <div className='bg-[#dbe2ef]'><br />
                <div className='flex items-center justify-center'>
                    <div className='searchbox-container flex justify-center items-center'>
                        <ul className='flex justify-center items-center text-white gap-12'>
                            <li className='flex flex-col items-center'>
                                <img src={jobsearchIcon} alt="Search Icon" className='icon icon-search' />
                                <input
                                    type='text'
                                    placeholder='Enter job title'
                                    className='inputfield1'
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </li>
                            <li className='flex flex-col items-center'>
                                <img src={joblocationIcon} alt="Location Icon" className='icon icon-location' />
                                <input
                                    type='text'
                                    placeholder='Enter location'
                                    className='inputfield2'
                                    value={joblocations}
                                    onChange={(e) => setJoblocations(e.target.value)}
                                />
                            </li>
                            <li className='flex flex-col items-center'>
                                <img src={jobskillsIcon} alt="Skills Icon" className='icon icon-skills' />
                                <input
                                    type='text'
                                    placeholder='Enter skills (comma-separated)'
                                    className='inputfield3'
                                    value={skills}
                                    onChange={(e) => setSkills(e.target.value)}
                                />
                            </li>
                        </ul>
                        <div className='flex items-center gap-2 pl-4'>

                            <button onClick={handleSearch} className='searchbutton'>Search</button>

                            <button
                                onClick={() => {
                                    setTitle('');
                                    setJoblocations('');
                                    setSkills('');
                                    setJobs([]);
                                }}
                                className='clearbutton '
                            >
                                Clear All
                            </button>
                        </div>

                    </div>
                </div><br />

                <div className='flex'>
                    <div className='pl-6 min-w-[60vh] pb-6'>
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
                                        className='mr-4 mx-12 w-4 h-4' />
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
                                        className='mr-4 mx-12 w-4 h-4' />
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
                    </div>
                    {/* Display jobs */}
                    <div className=" flex mx-10 gap-10 flex-wrap max-h-[30vh]">
                        {jobs.length > 0 ? (
                            jobs.map((job, index) => (
                                <div key={index} className="min-w-[480px]">
                                    <div className="job-details bg-white text-black p-4">
                                        <div className='font-bold text-2xl'>{job.title}</div>
                                        <br />
                                        <div className='flex justify-between items-center'>
                                            <div className="job-typebtn">
                                                <Link><button>{job.employmentType.split(',')[0]}</button></Link>
                                            </div>
                                            {job.salaryRange &&
                                                typeof job.salaryRange === 'object' &&
                                                job.salaryRange.min !== undefined &&
                                                job.salaryRange.max !== undefined && (
                                                    <p>
                                                        Salary: {job.salaryRange.min} - {job.salaryRange.max}
                                                    </p>
                                                )}
                                        </div>
                                        <img src={job.icon} alt="Company Icon" className='h-20 w-20' />
                                        <div className='custom-title2 font-bold'>{job.title2}</div>
                                        <p>

                                            <img src={joblocationIcon} alt="Location Icon" className='h-5 w-5 ml-24' />
                                            <div className='ml-28 custom-loc'>{job.joblocations[0]}...</div>
                                        </p><br /><br />
                                        <div className="buttons-container flex justify-between items-center gap-10 mt-5">
                                            <Link><button className="view-button">View Details</button></Link>
                                            <Link><button className="apply-button">Apply Now</button></Link>
                                        </div><br />
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>No jobs found matching your criteria.</p>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default JobseekerPage;