// Companypage.js
import React from 'react';
import { Link } from "react-router-dom";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Sidebar from '../Components/side__bar.jsx';
import SecondaryNavbar from '../Components/Sec_Navbar.jsx';

export const Companypage = () => {
  return (
    <>
    <div className="flex flex-col h-screen">
     
      <Navbar />
      <SecondaryNavbar />

      <div className="flex flex-grow">
      
        <Sidebar />
        
        {/* Main content area */}
        <div className="flex-grow p-4"> 
          <h1>Your Company Page Content</h1>
        </div>
      </div>
      
      <Footer />
    </div>
    </>
  );
};
