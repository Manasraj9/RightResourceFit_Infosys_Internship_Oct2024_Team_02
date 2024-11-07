import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/NavbarCompany'
import Footer from '../Components/Footer'
import backgroundImage from '../images/homebgimg.png'
import jobPoster from '../images/jobposter.png'
import { Link } from 'react-router-dom'
import './companyhomepage.css'
import jobStatusimg from '../images/jobstatusview.png'


const Companyhomepage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const loginTime = localStorage.getItem('loginTime');

        if (!token || !loginTime) {
            navigate('/', { replace: true }); // Redirect to login page
        }
    }, [navigate]);
    return (
        <div>
            <Navbar />
            {/* Browse company and search job */}
            <div className='homepage-container' 
                style={{ 
                    backgroundImage: `url(${backgroundImage})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center' 
                }}><br />
                <div className='text-[white] text-3xl font-bold text-center underline'>START POSTING JOBS NOW</div><br />
                <div className='text-[white] text-2xl font-bold text-center'>Right Resource Fit connects talented job seekers with top employers.<br />Explore 5000+ job opportunities 
                    and find your perfect match.<br />you're Hiring, we help you achieve success!</div><br />
                <div>
                    <ul className='flex gap-3 text-white justify-center'>
                        <li>
                            <Link to="/PostJob1">
                                <button className='bg-[#3f72af] inline-flex items-center gap-0.5 hover:bg-white hover:text-[#3f72af] py-2 rounded px-3.5'>Post Job</button>
                            </Link>
                        </li>
                    </ul>
                </div><br /><br />

                <div className='px-[250px]'>
                    <div className='grid grid-cols-2 gap-10 items-center px-10 py-10 bg-[#3f72af]'>
                        <div className='text-4xl font-bold custom-todayjob text-[white]'>
                            Start Hiring<br />today <br />
                            <br />
                            <div className='text-center'> 
                                <Link to="/PostJob1">
                                    <button className='search-button2'>Post Jobs</button>
                                </Link>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <img src={jobPoster} alt="Job Application" className="w-50px h-50px custom-jobimg" />
                        </div>
                    </div>
                </div><br /><br />
            </div>

            
            <div className='bg-[#dbe2ef] mx-auto px-10 py-5'>
                <div className='text-3xl underline font-bold text-center'>The most effective way to land a job.</div><br />
                    <div className='px-[100px]'>
                        <div className='grid grid-cols-10 gap-4 items-center px-8 py-8'>
                            <div className='col-span-7'>
                                <img src={jobStatusimg} alt="Job Status" className='w-full h-auto' />
                            </div>
                            <div className='col-span-3 text-2xl'>
                                <ul>
                                    <li>1. Explore job opportunities according to your location, skills, and other criteria.</li><br />
                                    <li>2. Monitor the status of your job applications.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
            <Footer />
        </div>
    );
};

export default Companyhomepage;

