import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Landingpage from "./pages/Landingpage";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Resetpassword from "./pages/Resetpassword";
import OtpVerification from "./pages/OtpVerification";
import Homepage from "./pages/Homepage";
import Companyhomepage from "./pages/Companyhomepage";
import Jobseekerpage from "./pages/Jobseekerpage";
import Browsecompanies from "./pages/Browsecompanies";
import Dashboardcompany from "./pages/Dashboardcompany";
import LogoutButton from "./Components/Buttons/LogoutButton";
import JobListing from "./pages/JobListing";
import PostJobFlow from './pages/PostJobFlow'; // Only include PostJobFlow
import PostJob from './pages/PostJob'; 

function App() {
  return (
    <Router>
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/About" element={<About />} />
        <Route path="/LogoutButton" element={<LogoutButton />} />
        <Route path="/Resetpassword" element={<Resetpassword />} />
        <Route path="/OtpVerification" element={<OtpVerification />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/Jobseekerpage" element={<Jobseekerpage />} />
        <Route path="/Dashboardcompany" element={<Dashboardcompany />} />
        <Route path="/Browsecompanies" element={<Browsecompanies />} />
        <Route path="/Companyhomepage" element={<Companyhomepage />} />
        <Route path="/JobListing" element={<JobListing />} />
        {/* <Route path="/PostJobFlow" element={<PostJobFlow />} /> Only keep this route */}
        <Route path="/PostJob" element={<PostJob />} /> {/* Only keep this route */}
      </Routes>
    </Router>
  );
}

export default App;
