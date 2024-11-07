import React from 'react';
import Navbar from '../Components/NavbarHome';
import Footer from '../Components/Footer';
import './Jobdescription.css';
import { Link } from 'react-router-dom';

import nomadIcon from '../images/nomad.png';
import shareIcon from '../images/shareimg.png';
import vrImg from '../images/vrimg.png';

const Jobdescription = () => {
    return (
        <div>
            <Navbar />

            {/*Job Description*/}
            <div className='bg-[#dbe2ef]'><br /><br />
                <div className='company-container ml-36 mr-36'>
                    <img src={nomadIcon} alt="Nomad Icon" className='nomad-icon h-12 w-15'/>
                    <div className='job-info'>
                        <p className='nomad font-bold text-2xl'>Social Media Assistant</p>
                        <p className='location'>Nomad . Paris, France . Full-Time</p>
                    </div>
                    <Link>
                        <img src={shareIcon} alt="share Icon" className='share-icon h-8 w-8 mr-4' />
                    </Link>
                    <Link>
                        <img src={vrImg} alt="vertical Image" className='h-10 w-8 color-[#D6DDEB]' />
                    </Link>
                    <Link>
                        <button className='bg-[#3f72af] flex items-center hover:bg-white hover:text-[#3f72af] apply-btn'>
                            Apply
                        </button>
                    </Link>
                </div><br /><br /><br /><br />

                <div className='grid grid-cols-1 md:grid-cols-3 gap-16 p-4 px-8 ml-36 mr-36'>
                    {/* grid column 1 & 2 */}
                    <div className='text-blackp-4 col-span-2'>
                        <p className='font-bold text-3xl text-[#25324B]'>Description</p><br />
                        <p className='text-[#515B6F]'>Nomad is a global company specializing in creative solutions for remote work and digital collaboration. 
                            Based in Paris, they focus on social media, brand development, and content strategy to enhance online presence and community engagement.</p><br />
                        <p className='font-bold text-3xl text-[#25324B]'>Responsibilities</p><br />
                        <ul className='text-[#515B6F]'>
                            <li>➡️ Community engagement to ensure that is supported and actively represented online</li>
                            <li>➡️ Focus on social media content development and publication</li>
                            <li>➡️ Marketing and strategy support</li>
                            <li>➡️ Stay on top of trends on social media platforms, and suggest content ideas to the team</li>
                            <li>➡️ Engage with online communities</li>
                        </ul><br />
                        <p className='font-bold text-3xl text-[#25324B]'>Who Are You</p><br />
                        <ul className='text-[#515B6F]'>
                            <li>➡️ You get energy from people and building the ideal work environment</li>
                            <li>➡️ You have a sense for beautiful spaces and office experiences</li>
                            <li>➡️ You are a confident office manager, ready for added responsibilities</li>
                            <li>➡️ You're detail-oriented and creative</li>
                            <li>➡️ You're a growth marketer and know how to run campaigns</li>
                        </ul><br />
                        <p className='font-bold text-3xl text-[#25324B]'>Nice-To-Haves</p>
                        <ul className='text-[#515B6F]'>
                            <li>➡️ Fluent in English</li>
                            <li>➡️ Project management skills</li>
                            <li>➡️ Copy editing skills</li>
                        </ul><br />
                    </div>

                    {/* grid column 3 */}
                    <div>
                        <p className='font-bold text-3xl text-[#25324B]'>About this Role</p><br />
                    </div>
                </div>
                <br /><br />
            </div>

            <Footer />
        </div>
    );
};
export default Jobdescription;