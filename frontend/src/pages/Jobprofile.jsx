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

import htmlIcon from '../images/html5.png';
import cssIcon from '../images/css3.png';
import jsIcon from '../images/js.png';
import rubyIcon from '../images/ruby.png';
import mixpanelIcon from '../images/mixpanel.png';
import framerIcon from '../images/framer.png';

import usImg from '../images/us.png';
import englandImg from '../images/england.png';
import australiaImg from '../images/australia.png';
import japanImg from '../images/japan.png';
import chinaImg from '../images/china.png';
import profileImg from '../images/profile.png';

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

const TechStack = [
    { title: 'HTML5', icon: htmlIcon},
    { title: 'CSS3', icon: cssIcon},
    { title: 'JavaScript', icon: jsIcon},
    { title: 'ruby', icon: rubyIcon},
    { title: 'Mixpanel', icon: mixpanelIcon},
    { title: 'Framer', icon: framerIcon},
];

const Teams = [
    { image: profileImg, name: 'Celestin Gardinier', position: 'CEO & Co-Founder', icon1: facebookIcon, icon2: linkedinIcon},
    { image: profileImg, name: 'Reynaud Colbert', position: 'Co-Founder', icon1: facebookIcon, icon2: linkedinIcon},
    { image: profileImg, name: 'Arienne Lyon', position: 'Managing Director', icon1: facebookIcon, icon2: linkedinIcon},
    { image: profileImg, name: 'Bernard Alexander', position: 'Managing Director', icon1: facebookIcon, icon2: linkedinIcon},
    { image: profileImg, name: 'Christine Jhonson', position: 'Managing Director', icon1: facebookIcon, icon2: linkedinIcon},
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

                    {/* Grid column 2 */}
                    <div className='mr-36'>
                        <p className='text-[#25324B] text-3xl font-bold'>Tech Stack</p><br />
                        <p className='text-[#515B6F]'>Nomad uses technologies like Ruby, JavaScript, React, Kubernetes, AWS, PostgreSQL, Redis, Docker, and tools like 
                            Jenkins, Terraform, and Datadog for development.</p><br />
                        <div className='grid grid-cols-2 md:grid-cols-3 gap-8'>
                            {TechStack.map((category, index) => (
                                <Link to={category.link} key={index}>
                                    <img src={category.icon} alt={category.title} className='h-24 w-24 align-center' />
                                    <div className='text-[#25324B] ml-4'>{category.title}</div>
                                </Link>
                            ))}
                        </div><br />
                        <Link>
                            <p className='text-[#4640DE]'>View tech stack</p>
                            <img src={arrowIcon} alt="Arrow Icon" className='h-8 w-8' style={{ marginLeft: '130px', marginTop: '-28px' }}/>
                        </Link><br /><br />
                        <p className='text-[#25324B] text-3xl font-bold'>Office Location</p><br />
                        <p className='text-[#515B6F]'>Stripe offices spread across 20 countries</p><br />
                        <img src={usImg} alt="US Image" className='h-20 w-16 align-left' />
                        <p className='font-bold ml-24' style={{ marginTop: '-50px' }}>United States</p>
                        <img src={englandImg} alt="England Image" className='h-12 w-16 align-left mt-8'/>
                        <p className='font-bold ml-24' style={{ marginTop: '-35px' }}>England</p>
                        <img src={australiaImg} alt="Australia Image" className='h-28 w-16 align-left' />
                        <p className='font-bold ml-24' style={{ marginTop: '-70px' }}>Australia</p>
                        <img src={japanImg} alt="Japan Image" className='h-12 w-16 align-left mt-8' />
                        <p className='font-bold ml-24' style={{ marginTop: '-40px' }}>Japan</p>
                        <img src={chinaImg} alt="China Image" className='h-12 w-16 align-left mt-8' />
                        <p className='font-bold ml-24' style={{ marginTop: '-40px' }}>China</p><br /><br />
                        <Link>
                            <p className='text-[#4640DE]'>View countires</p>
                            <img src={arrowIcon} alt="Arrow Icon" className='h-8 w-8' style={{ marginLeft: '130px', marginTop: '-28px' }}/>
                        </Link><br /><br />
                    </div>
                </div><br /><br /><br />

                {/* Teams */}
                <div className='ml-36 mr-36'>
                    <p className='text-[#25324B] text-3xl font-bold'>Team</p>
                    <Link>
                        <p className='text-[#4640DE] text-right' style={{ marginTop: '-30px' }}>see all(47)</p>
                    </Link><br />
                    <div className='grid grid-cols-1 md:grid-cols-5 gap-8'>
                        {Teams.map((category, index) => (
                            <Link to={category.link} key={index} className='bg-white p-4 flex flex-col items-center'>
                                <img src={category.image} alt={category.name} className='h-12 w-12 profile' />
                                <div className='text-[#25324B] mt-4'>{category.name}</div>
                                <div className='text-[#7C8493]'>{category.position}</div>
                                <img src={facebookIcon} alt="Facebook Icon" className='h-8 w-8 mt-4'  style={{ marginLeft: '-60px' }}/>
                                <img src={linkedinIcon} alt="Linked Icon" className='h-8 w-8 ml-12'   style={{ marginTop: '-32px' }}/>
                            </Link>
                        ))}
                    </div>
                </div><br /><br /><br />

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