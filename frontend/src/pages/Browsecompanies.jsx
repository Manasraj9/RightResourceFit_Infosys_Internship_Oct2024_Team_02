import React from 'react'
import Navbar from '../Components/Bars/NavbarJobseeker'
import Footer from '../Components/Footer'
import { Link } from 'react-router-dom'
import searchIcon from '../images/search.png';
import locationIcon from '../images/location.png';
import './Browsecompanies.css';
import arrowIcon from '../images/arrow.png';


import nomadIcon from '../images/nomad.png';
import discordIcon from '../images/discord.png';
import mazeIcon from '../images/maze.png';
import udacityIcon from '../images/udacity.png';
import webflowIcon from '../images/webflow.png';
import foundationIcon from '../images/foundation.png';


import designIcon from '../images/design.png';
import fintechIcon from '../images/fintech.png';
import hostingIcon from '../images/hosting.png';
import businessIcon from '../images/business.png';


import pentagramIcon from '../images/pentagram.png';
import wolffOlinsIcon from '../images/wolffOlins.png';
import clayIcon from '../images/clay.png';
import mediamonksIcon from '../images/mediamonks.png';
import packerIcon from '../images/packer.png';
import squareIcon from '../images/square.png';
import divyIcon from '../images/divy.png';


const RecommendedCompanies = [
    { title: 'Nomad', about: 'Nomad is located in Paris, France. Nomad generates $728,000 in sales (USD-United States Dollar).', jobButtton: '3 Jobs', Business: 'Business Service', link: '/nomad', icon: nomadIcon },
    { title: 'Discord', about: 'We would love to work with someone like you. We care about creating a delightful experience.', jobButtton: '3 Jobs', Business: 'Business Service', link: '/discord', icon: discordIcon },
    { title: 'Maze', about: 'We are a passionate bunch working from all over the world to build the future of rapid testing together.', jobButtton: '3 Jobs', Business: 'Business Service', link: '/maze', icon: mazeIcon },
    { title: 'Udacity', about: 'Udacity is a new type of online university that teaches the actual programming skills.', jobButtton: '3 Jobs', Business: 'Business Service', link: '/udacity', icon: udacityIcon },
    { title: 'Webflow', about: 'Webflow is the first design and hosting platform built from the ground up for the mobile age.', jobButtton: '3 Jobs', Business: 'Business Service', link: '/webflow', icon: webflowIcon },
    { title: 'Foundation', about: 'Foundation helps creators mint and auction their digital artworks as NFTs on the Ethereum blockchain.', jobButtton: '3 Jobs', Business: 'Business Service', link: '/foundation', icon: foundationIcon },
];


const CompaniesByCategory = [
    {title: 'Design', icon: designIcon, link: '/design'},
    {title: 'Fintech', icon: fintechIcon, link: '/fintech'},
    {title: 'Hosting', icon: hostingIcon, link: '/hosting'},
    {title: 'Business Service', icon: businessIcon, link: '/business'},
];


const JobResults = [
    {title: 'Pentagram', icon: pentagramIcon, link: '/pentagram', jobButtton: '3 Jobs'},
    {title: 'Wolff Olins', icon: wolffOlinsIcon, link: '/wolffOlins', jobButtton: '3 Jobs'},
    {title: 'Clays', icon: clayIcon, link: '/clays', jobButtton: '3 Jobs'},
    {title: 'Media Monks', icon: mediamonksIcon, link: '/mediamonks', jobButtton: '3 Jobs'},
    {title: 'Packer', icon: packerIcon, link: '/packer', jobButtton: '3 Jobs'},
    {title: 'Square', icon: squareIcon, link: '/square', jobButtton: '3 Jobs'},
    {title: 'Divy', icon: divyIcon, link: '/divy', jobButtton: '3 Jobs'},
    {title: 'Webflow', icon: webflowIcon, link: '/webflow', jobButtton: '3 Jobs'},
];


const Browsecompanies = () => {
    return (
        <div>
            <Navbar />
            {/* Browse company */}
            <div className='bg-[#dbe2ef]'><br />
                <div className='text-4xl text-[#25324B] text-center font-bold'>
                    Find your <span className='text-[#3F72AF] underline'>dream companies</span>
                </div><br />
                <div className='text-[#515B6F] text-center'>Find the dream companies you dream work for</div><br />

                <div className='searchbox-container2 ml-36 mr-36'>
                    <ul className='flex gap-5 text-white items-center'> {/* Changed justify-left to items-center for vertical alignment */}
                        <li className="relative"> {/* Added relative position for positioning the icon */}
                            <img src={searchIcon} alt="Search Icon" className='absolute icon-search1 top-1/2 transform -translate-y-1/2 w-8 h-8' />
                            <input
                                type='text'
                                placeholder='Job title & keyword'
                                style={{ position: 'relative', left: '20px' }}
                                className='searchbox01 py-1 rounded' // Added padding to avoid text overlap with the icon
                            />
                        </li>
                        <li className="relative"> {/* Added relative position for positioning the icon */}
                            <img src={locationIcon} alt="Location Icon" className='absolute icon-search2 top-1/2 transform -translate-y-1/2 w-8 h-8' />
                            <input
                                type='text'
                                placeholder='Florence, Italy'
                                style={{ position: 'relative', left: '280px' }}
                                className='searchbox02 pl-10 py-1 rounded' // Added padding to avoid text overlap with the icon
                            />
                        </li>
                        <li>
                            <Link to="/searchjob">
                                <button className='bg-[#3f72af] flex items-center gap-0.5 hover:bg-white hover:text-[#3f72af] py-1 rounded px-2.5 jobsearch-button'> {/* Changed nline-flex to flex for proper alignment */}
                                    Search
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div><br />
                <div className='text-[#515B6F] ml-36'>Popular : Twitter, Microsoft, Apple, Facebook</div><br /><br />

                {/* Recommended Companies */}
                <div className='text-3xl text-[#25324B] ml-36'>Recommended Companies</div>
                <div className='text-[#7C8493] ml-36'>Based on your profile, company preferences, and recent activity</div>

                <div className='grid grid-cols-2 md:grid-cols-3 gap-10 px-36 py-10'>
                    {RecommendedCompanies.map((category, index) => (
                        <Link to={category.link} key={index} className='bg-white border-gray-300 p-3 text-left hover:bg-[#3f72af] hover:text-white transition duration-300'>
                            <div className='flex items-center justify-between mb-2'>
                                <img src={category.icon} alt={category.title} className='custom-icons' />
                                <Link to={category.link}>
                                    <button className='job3btn'>{category.jobButtton}</button>
                                </Link>
                            </div>
                            <div className='font-bold text-2xl'>{category.title}</div><br />
                            <div className='text-1xl text-gray-600 custom-about'>{category.about}</div><br />
                            <Link to={category.link}>
                                <button className='custom-businessbtn'>{category.Business}</button>
                            </Link>
                        </Link>
                    ))}
                </div><br /><br />

                {/* Companies by Category */}
                <div>
                    <div className='text-3xl text-[#25324B] ml-36'>Companies by Category</div>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-10 px-36 py-8'>
                        {CompaniesByCategory.map((category, index) => (
                            <Link to={category.link} key={index} className='bg-white border-gray-300 p-4 rounded-none text-center hover:bg-[#3f72af] hover:text-white transition duration-300'>
                                <img src={category.icon} alt={category.title} className='text-4xl mb-2 custom-icons' />
                                <div className='font-bold text-2xl'>{category.title}</div>
                            </Link>
                        ))}
                     </div>
                </div><br />

                <div>
                    <img src={designIcon} alt='Design Icon' className='w-8 h-8 ml-36'></img>
                    <div className='ml-48 -mt-8 text-2xl'>24 Results</div>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-10 px-36 py-8'>
                        {JobResults.map((category, index) => (
                            <Link to={category.link} key={index} className='flex flex-col justify-center items-center bg-white border-gray-300 p-4 rounded-none text-center hover:bg-[#3f72af] hover:text-white transition duration-300'>
                                <br /><img src={category.icon} alt={category.title} className='text-4xl mb-2 custom-icons'></img><br />
                                <div className='text-2xl font-bold'>{category.title}</div><br />
                                <Link to={category.link}>
                                    <button className='job3btn'>{category.jobButtton}</button><br />
                                </Link>
                            </Link>
                        ))}
                    </div>
                </div>
                <div>
                    <Link to='/DesignCompanies' className='text-xl flex items-center text-[#3f72af] ml-36'>
                        <div className='text-[#3F72AF]'>View more Design companies</div>
                        <img src={arrowIcon} alt="Arrow Icon" className='ml-2 w-5 h-5' />
                    </Link>
                </div><br />
            </div>

            <Footer />
        </div>
    );
};

export default Browsecompanies;