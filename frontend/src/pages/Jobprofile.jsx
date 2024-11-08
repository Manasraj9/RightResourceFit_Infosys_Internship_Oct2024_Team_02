import React from 'react';
import Navbar from '../Components/NavbarHome';
import Footer from '../Components/Footer';
import './Jobprofile.css';
import nomadIcon from '../images/nomad.png';
import { Link } from 'react-router-dom';

import foundedIcon from '../images/founded.png';
import employeesIcon from '../images/employees.png';
import locationIcon from '../images/loctn.png';
import industryIcon from '../images/industry.png';
import twitterIcon from '../images/twitter.png';
import facebookIcon from '../images/facebook.png';
import linkedinIcon from '../images/linkedin.png';
import nomadcompanyImage from '../images/nomad-companyimg.png';

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

const Jobprofile = () => {
    return (
        <div>
            <Navbar />

            {/* Job profile */}
            <div className='bg-[#dbe2ef]'><br /><br />
                <div className='profile-container ml-36 mr-36'>
                    <img src={nomadIcon} alt="Nomad Icon" className='nomad-profile h-36 w-36' />
                    <p className='text-[#25324B] text-3xl font-bold nomad-company'>Nomad</p>
                    <Link>
                        <button className='btn-job'>43 Jobs</button>
                    </Link>
                    <Link>
                        <p className='text-[#4640DE] mt-12 nomad-link'>https://nomad.com</p>
                    </Link>
                    <img src={foundedIcon} alt="Founded icon" className='h-12 w-12 founded-icon' />
                    <p className='text-[#515B6F] founded'>Founded <span></span></p>
                    <p className='text-[#25324B] founded-date'>July 31, 2021</p>
                    <img src={employeesIcon} alt="Employees icon" className='h-12 w-12 employees-icon' /> 
                    <p className='text-[#515B6F] employees'>Employees</p>
                    <p className='text-[#25324B] employees-count'>4000+</p>
                    <img src={locationIcon} alt="Location icon" className='h-12 w-12 location-icon' />
                    <p className='text-[#515B6F] location'>Location</p>
                    <p className='text-[#25324B] location-country'>20 countries</p>
                    <img src={industryIcon} alt="Industry icon" className='h-8 w-8 industry-icon' />
                    <p className='text-[#515B6F] industry'>Industry</p>
                    <p className='text-[#25324B] industry-payment'>Payment Gateway</p>
                </div><br /><br /><br /><br /><br /><br />

                <div className='grid grid-cols-1 md:grid-cols-2 gap-16 ml-36 mr-336'>
                    {/* Grid column 1 */}
                    <div>
                        <p className='text-[#25324B] text-3xl font-bold'>Company Profile</p><br />
                        <p className='text-[#515B6F]'>Nomad is a software platform for starting and running internet businesses. Millions of businesses rely on Stripe’s software tools 
                            to accept payments, expand globally, and manage their businesses online. Stripe has been at the forefront of expanding internet 
                            commerce, powering new business models, and supporting the latest platforms, from marketplaces to mobile commerce sites. We 
                            believe that growing the GDP of the internet is a problem rooted in code and design, not finance. Nomad is built for developers, 
                            makers, and creators. We work on solving the hard technical problems necessary to build global economic infrastructure—from 
                            designing highly reliable systems to developing advanced machine learning algorithms to prevent fraud.</p><br />
                        <p className='text-[#25324B] text-3xl font-bold'>Contact</p><br />
                        
                        <Link>
                            <button className='twitter-btn'>
                                <img src={twitterIcon} alt="Twitter Icon" className='h-8 w-8 ml-4'/>
                                <p className='text-[#4640DE] twitter-link'>twitter.com/nomad</p>
                            </button>
                        </Link>
                        
                        <Link>
                            <button className='facebook-btn'>
                                <img src={facebookIcon} alt="Facebook Icon" className='h-8 w-8 ml-4' />
                                <p className='text-[#4640DE] facebook-link'>facebook.com/nomadHQ</p>
                            </button>
                        </Link>
                        
                        <Link>
                            <button className='linkedin-btn'>
                                <img src={linkedinIcon} alt="Linked Icon" className='h-8 w-8 ml-4' />
                                <p className='text-[#4640DE] linkedin-link'>linkedin.com/company/nomad</p>
                            </button>
                        </Link><br /><br /><br />

                        <img src={nomadcompanyImage} alt="Nomad Company Image" className='h-120 w-120' /><br /><br />
                    </div>
                </div>

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
export default Jobprofile;