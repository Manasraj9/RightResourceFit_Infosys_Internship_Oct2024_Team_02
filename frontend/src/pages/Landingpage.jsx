import React from 'react';
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const LandingPage = () => {
    return (
        <div>
            <Navbar />
            {/* Hero Section  */}
            <div className='bg-[#dbe2ef] mx-auto px-10 py-5'>
                <div className='text-[#112d4e] text-4xl font-bold'>Welcome to Right Resource Fit</div>
            </div>
            <Footer />
        </div>
    );
};

export default LandingPage;
