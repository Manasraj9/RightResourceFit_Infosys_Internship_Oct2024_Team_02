import React from 'react';
import Navbar from '../Components/NavbarCompany';
import Footer from '../Components/Footer';
import Sidebar from '../Components/side__bar.jsx';
import SecondaryNavbar from '../Components/Sec_Navbar.jsx';
import Dashboard from '../Components/dashboard.jsx';

export const Companypage = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        {/* Navbar */}
        <Navbar />

        {/* Content Section with Sidebar and Main Content */}
        <div className="flex flex-grow">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <div className="flex-grow ml-60 p-4"> {/* Adjust ml-60 to match Sidebar width */}
            <SecondaryNavbar />
            <Dashboard />
          </div>
        </div>

        {/* Footer */}
      
      </div>
        <Footer />
    </>
  );
};

export default Companypage;
