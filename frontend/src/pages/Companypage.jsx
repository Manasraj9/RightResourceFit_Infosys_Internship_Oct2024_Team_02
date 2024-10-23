import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Sidebar from '../Components/side__bar.jsx';
import SecondaryNavbar from '../Components/Sec_Navbar.jsx';

export const Companypage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-grow">
        {/* Adjust main content to account for the fixed sidebar */}
        <Sidebar />
        <div className="flex-grow ml-60 p-4"> {/* Added margin to account for sidebar width */}
          <SecondaryNavbar />
          {/* Main content goes here */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Companypage;
