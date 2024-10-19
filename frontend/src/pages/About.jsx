import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const About = () => {
    return (
        <div>
            <Navbar />
            <div className='flex'>
            <div className=" flex flex-col  bg-[#dbe2ef] p-6">
                <h1 className="text-4xl font-bold mb-6">About Us</h1>
                <p className="text-lg mb-6 max-w-2xl">
                    We are a dedicated team focused on providing the best solutions for our clients. Our goal is to deliver exceptional results that help businesses thrive in a competitive landscape.
                </p>

                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-md mb-6 max-w-2xl">
                    Our mission is to leverage technology to drive innovation and create value for our clients. We strive to exceed expectations and build long-lasting relationships.
                </p>

                <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
                <ul className="list-disc list-inside max-w-2xl mb-6">
                    <li className="mb-2">Integrity: We uphold the highest standards of integrity in all our actions.</li>
                    <li className="mb-2">Innovation: We constantly seek new ways to improve and innovate.</li>
                    <li className="mb-2">Excellence: We are committed to delivering quality and excellence in our services.</li>
                    <li className="mb-2">Collaboration: We believe in the power of teamwork and collaboration.</li>
                    <li className="mb-2">Customer Focus: Our clients are at the center of everything we do.</li>
                </ul>
            </div>
            <div>
                <img src="/images/About.svg" alt="page for Login" className="w-[780px] h-[650px] bg-[#dbe2ef]" />
            </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;
