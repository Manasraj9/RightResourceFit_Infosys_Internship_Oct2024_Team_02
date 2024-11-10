import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Bars/Navbar';
import Footer from '../Components/Footer';
import './Landingpage.css';
import searchIcon from '../images/search.png';
import locationIcon from '../images/location.png';
import arrowIcon from '../images/arrow.png';


import designIcon from '../images/design.png';
import salesIcon from '../images/sales.png';
import marketingIcon from '../images/marketing.png';
import financeIcon from '../images/finance.png';
import technologyIcon from '../images/technology.png';
import engineeringIcon from '../images/engineering.png';
import businessIcon from '../images/business.png';
import hrIcon from '../images/hr.png';


const jobCategories = [
    { title: 'Design', jobsAvailable: 235, icon: designIcon, link: '/design' },
    { title: 'Sales', jobsAvailable: 756, icon: salesIcon, link: '/sales' },
    { title: 'Marketing', jobsAvailable: 140, icon: marketingIcon, link: '/marketing' },
    { title: 'Finance', jobsAvailable: 325, icon: financeIcon, link: '/finance' },
    { title: 'Technology', jobsAvailable: 436, icon: technologyIcon, link: '/technology' },
    { title: 'Engineering', jobsAvailable: 542, icon: engineeringIcon, link: '/engineering' },
    { title: 'Business', jobsAvailable: 211, icon: businessIcon, link: '/business' },
    { title: 'Human Resource', jobsAvailable: 346, icon: hrIcon, link: '/hr' },
];


const LandingPage = () => {
    return (
        <div>
            <Navbar />
            {/* Hero Section  */}
            <div className='bg-[#dbe2ef] mx-auto px-10 py-5'>
                <div className='text-[#3f72af] text-4xl font-bold'>Welcome to Right Resource Fit</div><br />
                <div className='text-5xl text-[#112d4e] custom-font'>Discover More</div>
                <div className='text-5xl text-[#112d4e] underline'>
                    than <span className='text-[#3f72af]'>5000+ Jobs</span>
                </div><br />
                <div className='text-[#515B6F]'>Great platform for the job seeker that searching for<br />new career heights and passionate about startups.</div>
                <div className='search-container'>
                    <ul className='flex gap-5 text-white items-center'> {/* Changed justify-left to items-center for vertical alignment */}
                        <li className="relative"> {/* Added relative position for positioning the icon */}
                            <img src={searchIcon} alt="Search Icon" className='absolute searchicon top-1/2 transform -translate-y-1/2 w-5 h-5' />
                            <input
                                type='text'
                                placeholder='Job title & keyword'
                                style={{ position: 'relative', left: '55px' }}
                                className='input-field01 py-1 rounded' // Added padding to avoid text overlap with the icon
                            />
                        </li>
                        <li className="relative"> {/* Added relative position for positioning the icon */}
                            <img src={locationIcon} alt="Location Icon" className='absolute locationicon left-3 top-1/2 transform -translate-y-1/2 w-5 h-5' />
                            <input
                                type='text'
                                placeholder='Florence, Italy'
                                style={{ position: 'relative', left: '100px' }}
                                className='input-field02 pl-10 py-1 rounded' // Added padding to avoid text overlap with the icon
                            />
                        </li>
                        <li>
                            <Link to="/searchjob">
                                <button className='bg-[#3f72af] flex items-center gap-0.5 hover:bg-white hover:text-[#3f72af] py-1 rounded px-2.5 jobsearchbtn'> {/* Changed nline-flex to flex for proper alignment */}
                                    Search
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
                <br />
                <div className='text-[#515B6F]'>Popular : UI Designer, UX Researcher, Android, Admin</div><br /><br />
                <div className='flex justify-between items-center'>
                    <div className='text-[#112d4e] custom-font2 text-3xl'>
                        Explore by <span className='text-[#3f72af]'>Category</span>
                    </div>
                    <Link to="/all-jobs" className='flex items-center text-xl text-[#3f72af] custom-font3'>
                        <span>Show all jobs</span>
                        <img src={arrowIcon} alt="Arrow Icon" className='ml-2 w-5 h-5' />
                    </Link>
                </div><br />

                {/* Job Categories */}
                <div className='grid custom-grid grid-cols-2 md:grid-cols-4 gap-10 px-10 py-10'>
                    {jobCategories.map((category, index) => (
                        <Link to={category.link} key={index} className='bg-white border border-gray-300 p-4 rounded-md text-center hover:bg-[#3f72af] hover:text-white transition duration-300'>
                            <img src={category.icon} alt={category.title} className='text-4xl mb-2 custom-icons' />
                            <div className='font-bold text-lg'>{category.title}</div>
                            <div className='text-sm text-gray-600'>{category.jobsAvailable} jobs available</div>
                        </Link>
                    ))}
                </div><br />
            </div>
            <Footer />
        </div>
    );
};

export default LandingPage;