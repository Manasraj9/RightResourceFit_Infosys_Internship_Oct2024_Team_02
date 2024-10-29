import React, { useState } from 'react';
import Navbar from '../Components/NavbarCompany';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer';
import './PostJob2.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBell, faBriefcase, faGift, faInfoCircle, faBold, faItalic, faListUl, faLink } from '@fortawesome/free-solid-svg-icons';

const PostJob2 = () => {
    const [jobData, setJobData] = useState({
        title: '',
        description: '',
        responsibilities: '',
        qualifications: '',
        niceToHaves: '',
        company: 'Nomad', // or any input for company name
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setJobData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/jobs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(jobData),
            });

            const data = await response.json();
            console.log('Job posted:', data);
        } catch (error) {
            
        }
    };

    return (
        <div className='bg-[#dbe2ef]'>
            <Navbar />
            <div className="bg-[#dbe2ef] min-h-screen mx-16">
                <div className="bg-white shadow-md">
                    <div className="flex items-center justify-between px-6 py-4">
                        <div className="flex items-center">
                            <img
                                src="https://storage.googleapis.com/a1aa/image/hGrYhMRiegWQb66QvnPsBBtR4k3o5PXxViune4a0LDAehdVnA.jpg"
                                alt="Company Logo"
                                className="h-10 w-10"
                            />
                            <div className="ml-3">
                                <div className="text-sm text-gray-500">Company</div>
                                <div className="text-lg font-semibold text-gray-800">Nomad</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-white shadow-md mt-4 max-w-4xl mx-auto">
                    <div className="flex items-center px-6 py-4">
                        <a href="#" className="text-lg font-semibold text-gray-800 flex items-center">
                            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                            Post a Job
                        </a>
                    </div>
                    <div className="border-t border-gray-200 w-full">
                        <div className="flex justify-center py-6 w-full">
                            <div className="flex justify-around items-center w-full">
                                <div className="flex flex-col items-center">
                                    <div className="bg-blue-600 text-white rounded-full h-10 w-10 flex items-center justify-center">
                                        <FontAwesomeIcon icon={faBriefcase} />
                                    </div>
                                    <div className="mt-2 text-sm text-gray-500">Step 1/3</div>
                                    <div className="mt-1 text-sm font-semibold text-gray-800">Job Information</div>
                                </div>
                                <div className="mx-8 border-r border-gray-200 h-10"></div>
                                <div className="flex flex-col items-center">
                                    <div className="bg-blue-600 text-white rounded-full h-10 w-10 flex items-center justify-center">
                                        <FontAwesomeIcon icon={faBriefcase} />
                                    </div>
                                    <div className="mt-2 text-sm text-gray-500">Step 2/3</div>
                                    <div className="mt-1 text-sm font-semibold text-gray-800">Job Description</div>
                                </div>
                                <div className="mx-8 border-r border-gray-200 h-10"></div>
                                <div className="flex flex-col items-center">
                                    <div className="bg-gray-200 text-gray-500 rounded-full h-10 w-10 flex items-center justify-center">
                                        <FontAwesomeIcon icon={faGift} />
                                    </div>
                                    <div className="mt-2 text-sm text-gray-500">Step 3/3</div>
                                    <div className="mt-1 text-sm font-semibold text-gray-800">Perks & Benefit</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="container2">
                    <div className="details">
                        <h2>Details</h2>
                        <p>Add the description of the job, responsibilities, who you are, and nice-to-haves.</p>
                    </div>
                    <hr /><br />
                    <div className="job-description">
                        <div className="description-text">
                            <h3>Job Descriptions</h3>
                            <p>Job titles must describe one position</p>
                        </div>
                        <div className="description-input">
                            <textarea
                                name="description"
                                value={jobData.description}
                                onChange={handleChange}
                                placeholder="Enter job description"
                            ></textarea>
                            <hr />
                            <div className="toolbar">
                                <div className="icons">
                                    <button><FontAwesomeIcon icon={faInfoCircle} /><span /></button>
                                    <button><FontAwesomeIcon icon={faBold} /></button>
                                    <button><FontAwesomeIcon icon={faItalic} /></button>
                                    <button><FontAwesomeIcon icon={faListUl} /></button>
                                    <button><FontAwesomeIcon icon={faLink} /></button>
                                </div>
                                <div className="char-limit">Maximum 500 characters</div>
                            </div>
                            <div className="char-count">0 / 500</div>
                        </div>
                    </div>
                    <br /><hr /><br />
                    <div className="job-description">
                        <div className="description-text">
                            <h3>Responsibilities</h3>
                            <p>Outline the core responsibilities of the position</p>
                        </div>
                        <div className="description-input">
                            <textarea
                                name="responsibilities"
                                value={jobData.responsibilities}
                                onChange={handleChange}
                                placeholder="Enter job responsibilities"
                            ></textarea>
                            <hr />
                            <div className="toolbar">
                                <div className="icons">
                                    <button><FontAwesomeIcon icon={faInfoCircle} /><span /></button>
                                    <button><FontAwesomeIcon icon={faBold} /></button>
                                    <button><FontAwesomeIcon icon={faItalic} /></button>
                                    <button><FontAwesomeIcon icon={faListUl} /></button>
                                    <button><FontAwesomeIcon icon={faLink} /></button>
                                </div>
                                <div className="char-limit">Maximum 500 characters</div>
                            </div>
                            <div className="char-count">0 / 500</div>
                        </div>
                    </div>
                    <br /><hr /><br />
                    <div className="job-description">
                        <div className="description-text">
                            <h3>Qualifications</h3>
                            <p>What qualifications do you require?</p>
                        </div>
                        <div className="description-input">
                            <textarea
                                name="qualifications"
                                value={jobData.qualifications}
                                onChange={handleChange}
                                placeholder="Enter job qualifications"
                            ></textarea>
                            <hr />
                            <div className="toolbar">
                                <div className="icons">
                                    <button><FontAwesomeIcon icon={faInfoCircle} /><span /></button>
                                    <button><FontAwesomeIcon icon={faBold} /></button>
                                    <button><FontAwesomeIcon icon={faItalic} /></button>
                                    <button><FontAwesomeIcon icon={faListUl} /></button>
                                    <button><FontAwesomeIcon icon={faLink} /></button>
                                </div>
                                <div className="char-limit">Maximum 500 characters</div>
                            </div>
                            <div className="char-count">0 / 500</div>
                        </div>
                    </div>
                    <br /><hr /><br />
                    <div className="job-description">
                        <div className="description-text">
                            <h3>Nice to have</h3>
                            <p>What skills would be nice to have?</p>
                        </div>
                        <div className="description-input">
                            <textarea
                                name="niceToHaves"
                                value={jobData.niceToHaves}
                                onChange={handleChange}
                                placeholder="Enter nice to have skills"
                            ></textarea>
                            <hr />
                            <div className="toolbar">
                                <div className="icons">
                                    <button><FontAwesomeIcon icon={faInfoCircle} /><span /></button>
                                    <button><FontAwesomeIcon icon={faBold} /></button>
                                    <button><FontAwesomeIcon icon={faItalic} /></button>
                                    <button><FontAwesomeIcon icon={faListUl} /></button>
                                    <button><FontAwesomeIcon icon={faLink} /></button>
                                </div>
                                <div className="char-limit">Maximum 500 characters</div>
                            </div>
                            <div className="char-count">0 / 500</div>
                        </div>
                    </div>
                    <br /><hr /><br />
                    <Link to="/PostJob3">
                    <div className="text-right mb-6">
                        <button className="bg-[#3f72af] text-white py-2 px-5 rounded-lg" onClick={handleSubmit}>
                            Next Step
                        </button>
                    </div>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default PostJob2;
