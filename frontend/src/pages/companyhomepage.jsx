import React from 'react'
import Navbar from '../Components/NavbarHome'
import Footer from '../Components/Footer'
import backgroundImage from '../images/homebgimg.png'
import jobPoster from '../images/jobposter.png'
import { Link } from 'react-router-dom'
import './Companyhomepage.css'
import jobStatusimg from '../images/jobstatusview.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faBell, faBriefcase, faGift, faInfoCircle, faBold, faItalic, faListUl, faLink} from '@fortawesome/free-solid-svg-icons'



const Companyhomepage = () => {
    return (
        <div>
            <Navbar />
                <div className="bg-gray-100 min-h-screen">
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
                    <div>
                        <FontAwesomeIcon icon={faBell} className="text-gray-500" />
                    </div>
                    </div>
                </div>
                <div className="bg-white shadow-md mt-4">
                    <div className="flex items-center px-6 py-4">
                    <a href="#" className="text-lg font-semibold text-gray-800 flex items-center">
                        <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                        Post a Job
                    </a>
                    </div>
                    <div className="border-t border-gray-200">
                    <div className="flex justify-center py-6">
                        <div className="flex items-center">
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
                </div>
                </div>
            <Footer />
        </div>
    );


    //Where is fontawsome
};

export default Companyhomepage;
