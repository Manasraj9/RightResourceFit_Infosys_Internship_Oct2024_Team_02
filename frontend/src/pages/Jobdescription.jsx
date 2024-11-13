import React from 'react';
import Navbar from '../Components/Bars/NavbarJobseeker';
import Footer from '../Components/Footer';
import './Jobdescription.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
 
 
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
    { title: 'Unlimited Vacation', description: 'We believe you should have a flexible schedule that makes space for family, wellness, and fun.', icon: vacationIcon},
    { title: 'Skill Development', description: 'We believe in always learning and leveling up our skills. Whether its a conference or online course.', icon: skilldevIcon},
    { title: 'Team Summits', description: 'Every 6 months we have a full team summit where we have fun, reflect, and plan for the upcoming quarter.', icon: summitsIcon},
    { title: 'Remote Working', description: 'You know how you perform your best. Work from home, coffee shop or anywhere when you feel like it.', icon: remoteworkIcon},
    { title: 'Commuter Benefits', description: 'We’re grateful for all the time and energy each team member puts into getting to work every day.', icon: commuterbenefitIcon},
    { title: 'We give back', description: 'We double-match employee donations up to $/€600 to support their chosen organizations.', icon: savingIcon},
];
 
 
const SimilarJobs = [
    { title: 'Social media Assistant', location: 'Nomad . Paris, France', time: 'Full Time', button1: 'Marketing', button2: 'Design', icon: nomadIcon},
    { title: 'Social media Assistant', location: 'Discord . Paris, France', time: 'Full Time', button1: 'Marketing', button2: 'Design', icon: discordIcon},
    { title: 'Brand Designer', location: 'Maze . San Fransisco, USA', time: 'Full Time', button1: 'Marketing', button2: 'Design', icon: mazeIcon},
    { title: 'Brand Designer', location: 'Udacity . San Fransisco, USA', time: 'Full Time', button1: 'Marketing', button2: 'Design', icon: udacityIcon},
    { title: 'Interactive Developer', location: 'Webflow . Hamburg, Germany', time: 'Full Time', button1: 'Marketing', button2: 'Design', icon: webflowIcon},
    { title: 'Interactive Developer', location: 'Foundation . Hamburg, Germany', time: 'Full Time', button1: 'Marketing', button2: 'Design', icon: foundationIcon},
    { title: 'HR Manager', location: 'Square . Lucern, Switzerland', time: 'Full Time', button1: 'Marketing', button2: 'Design', icon: squareIcon},
    { title: 'HR Manager', location: 'Divy . Lucern, Switzerland', time: 'Full Time', button1: 'Marketing', button2: 'Design', icon: divyIcon},
];
 
 
const Jobdescription = () => {
 
    const [isFormVisible, setIsFormVisible] = useState(false);
 
    const handleApplyClick = () => {
        setIsFormVisible(true);
    };
 
    return (
        <div>
            <Navbar />
 
            {/*Job Description*/}
            <div className={`bg-[#dbe2ef] ${isFormVisible ? 'blur-background' : ''}`}><br /><br />
                <div className='company-container ml-36 mr-36'>
                    <img src={nomadIcon} alt="Nomad Icon" className='nomad-icon h-12 w-15'/>
                    <div className='job-info'>
                        <p className='font-bold text-2xl'>Social Media Assistant</p>
                        <p className='nomad-location'>Nomad . Paris, France . Full-Time</p>
                    </div>
                    <Link>
                        <img src={shareIcon} alt="share Icon" className='share-icon h-8 w-8 mr-4' />
                    </Link>
                    <Link>
                        <img src={vrImg} alt="vertical Image" className='h-10 w-8 color-[#D6DDEB]' />
                    </Link>
                    <Link>
                        <button onClick={handleApplyClick}  className='bg-[#3f72af] flex items-center hover:bg-white hover:text-[#3f72af] apply-btn'>
                            Apply
                        </button>
                    </Link>
                </div><br /><br /><br /><br />
 
                {/* Application Form */}
                {isFormVisible && (
                    <div className='application-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
                        <div className='application-form-container ml-36 mr-36 bg-white shadow-md max-h-[80vh] w-[90%] sm:w-[60%] md:w-[50%] lg:w-[40%] p-8 overflow-y-auto rounded-md'>
                                <form>
                                    <img src={nomadIcon} alt='Nomad Icon' className='left-8 h-12 w-15'/>
                                    <div className='job-info'>
                                        <p className='font-bold text-2xl nomad-job'>Social Media Assistant</p>
                                        <p className='nomad-jobloc text-[#7C8493]'>Nomad . Paris, France . Full-Time</p>
                                    </div><br /><hr /><br />
 
                                    <p className='font-bold text-2xl'>Submit Your Application</p>
                                    <p className='text-[#7C8493]'>The following is required and will only be shared with Nomad</p>
 
                                    <label className='block text-gray-700 mt-4'>Full name</label>
                                    <input type='text' className='border p-2 w-full' placeholder='Enter your full name' />
 
                                    <label className='block text-gray-700 mt-4'>Email address</label>
                                    <input type='email' className='border p-2 w-full' placeholder='Enter your email address'/>
 
                                    <label className='block text-gray-700 mt-4'>Phone number</label>
                                    <input type='email' className='border p-2 w-full' placeholder='Enter your phone number'/>
 
                                    <label className='block text-gray-700 mt-4'>Current of previous job title</label>
                                    <input type='email' className='border p-2 w-full' placeholder='What’s your current or previous job title?'/><br /><br /><hr /><br />
 
                                    <p className='font-bold text-2xl'>Links</p>
 
                                    <label className='block text-gray-700 mt-4'>LinkedIn URL</label>
                                    <input type='email' className='border p-2 w-full' placeholder='Link to yourLinkedIn URL'/>
 
                                    <label className='block text-gray-700 mt-4'>Portfolio URL</label>
                                    <input type='email' className='border p-2 w-full' placeholder='Link to your portfolio URL'/>
 
                                    <label className='block text-gray-700 mt-4'>Additional information</label>
                                    <textarea className='border p-2 w-full h-32' placeholder='Add a cover letter or anything else you want to share'></textarea>
 
                                    <label className='block text-gray-700 mt-4'>Attach your resume</label>
                                    <input type='file' className='border p-2 w-full'/><br /><br />
 
                                    <button className='bg-[#3f72af] text-white px-4 py-2 mt-4 hover:bg-[#2b4865] submit-button'>
                                        Submit Application
                                    </button><br />
                                </form>
                        </div>
                    </div>
                )}
 
 
                <div className='grid grid-cols-1 md:grid-cols-3 gap-16 ml-36 mr-36'>
                    {/* grid column 1 & 2 */}
                    <div className='text-black col-span-2'>
                        {/* Description */}
                        <p className='font-bold text-3xl text-[#25324B]'>Description</p><br />
                        <p className='text-[#515B6F]'>Nomad is a global company specializing in creative solutions for remote work and digital collaboration.
                            Based in Paris, they focus on social media, brand development, and content strategy to enhance online presence and community engagement.</p><br />
                        {/* Responsibilities */}
                        <p className='font-bold text-3xl text-[#25324B]'>Responsibilities</p><br />
                        <ul className='text-[#515B6F]'>
                            <li>➡️ Community engagement to ensure that is supported and actively represented online</li>
                            <li>➡️ Focus on social media content development and publication</li>
                            <li>➡️ Marketing and strategy support</li>
                            <li>➡️ Stay on top of trends on social media platforms, and suggest content ideas to the team</li>
                            <li>➡️ Engage with online communities</li>
                        </ul><br />
                        {/* Who are you */}
                        <p className='font-bold text-3xl text-[#25324B]'>Who Are You</p><br />
                        <ul className='text-[#515B6F]'>
                            <li>➡️ You get energy from people and building the ideal work environment</li>
                            <li>➡️ You have a sense for beautiful spaces and office experiences</li>
                            <li>➡️ You are a confident office manager, ready for added responsibilities</li>
                            <li>➡️ You're detail-oriented and creative</li>
                            <li>➡️ You're a growth marketer and know how to run campaigns</li>
                        </ul><br />
                        {/* Nice to haves */}
                        <p className='font-bold text-3xl text-[#25324B]'>Nice-To-Haves</p><br />
                        <ul className='text-[#515B6F]'>
                            <li>➡️ Fluent in English</li>
                            <li>➡️ Project management skills</li>
                            <li>➡️ Copy editing skills</li>
                        </ul>
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
                                <p>July 31, 2021</p><br />
                                <p>July 1, 2021</p><br />
                                <p>Full-Time</p><br />
                                <p>$75k-$85k USD</p><br />
                            </div>
                        </div>
                        <hr className='hr-line'/><br />
                        {/* Categories */}
                        <p className='font-bold text-3xl text-[#25324B]'>Categories</p><br />
                        <Link>
                            <button className='marketing-btn'>Marketing</button>
                        </Link>
                        <Link>
                            <button className='design-btn'>Design</button>
                        </Link>
                        <br /><br />
                        <hr className='hr-line' /><br />
                        {/* Required skills */}
                        <p className='font-bold text-3xl text-[#25324B]'>Required Skills</p><br />
                        <div className='text-[#515B6F]'>
                            <p>➡️ Project Management</p>
                            <p>➡️ Copy Writing</p>
                            <p>➡️ Social Media Marketing</p>
                            <p>➡️ English</p>
                            <p>➡️ Copy Editing</p>
                        </div>
                    </div>
                </div><br /><br /><br /><br />
               
                {/* Perks & Benefits */}
                <div>
                    <p className='font-bold text-3xl text-[#25324B] ml-36'>Perks & Benefits</p>
                    <p className='text-[#515B6F] ml-36'>This job comes with several perks and benefits</p><br /><br />
                    <div className='grid grid-cols-2 md:grid-cols-4 ml-36 mr-36 gap-8'>
                        {PerksandBenefits.map((category, index) => (
                            <Link to={category.link} key={index}>
                                <img src={category.icon} alt={category.title} className='h-16 w-16' /><br />
                                <div className='text-2xl text-[#25324B] font-bold'>{category.title}</div><br />
                                <div className='text-[#515B6F]'>{category.description}</div><br /><br />
                            </Link>
                        ))}
                    </div>
                </div><br /><br /><br /><br />
 
                <div className='grid grid-cols-1 md:grid-cols-2 ml-36 mr-36 gap-16'>
                    <div>
                        <img src={nomadIcon} alt="Nomad Icon" className='h-24 w-24'/>
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
 