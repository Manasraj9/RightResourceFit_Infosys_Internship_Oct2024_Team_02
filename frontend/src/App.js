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
import Companyhomepage from "./pages/companyhomepage";
import Jobseekerpage from "./pages/Jobseekerpage";
import Browsecompanies from "./pages/Browsecompanies";
import Dashboardcompany from "./pages/Dashboardcompany";
import LogoutButton from "./Components/Buttons/LogoutButton";
import PostJob from './pages/PostJob';
import PostJob2 from './pages/PostJob2';
import Companypostpage_1 from "./pages/Companypostpage_1";
import Jobdescription from './pages/Jobdescription';
import Jobprofile from './pages/Jobprofile';
import JobListing from "./pages/JobListing";
import Jobseekerdashboard from "./pages/Jobseekerdashboard";
import ApplicantStatus1 from "./pages/ApplicantStatus1";
import ApplicantStatus2 from './pages/ApplicationStatus2';
import ApplicantStatus3 from './pages/ApplicationStatus3';
// import ApplicantStatus4 from './pages/ApplicationStatus4';
import Notifications from "./pages/Notifications";
import Companyprofile from "./pages/Companyprofile";

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
        <Route path="/companyhomepage" element={<Companyhomepage />} />
        <Route path="/PostJob" element={<PostJob />} />
        <Route path="/PostJob2" element={<PostJob2 />} />
        <Route path="/Companypostpage_1" element={<Companypostpage_1 />} />
        <Route path="//job/:jobId" element={<Jobdescription />} />
        <Route path="/Jobprofile" element={<Jobprofile />} />
        <Route path="/ApplicantStatus1" element={<ApplicantStatus1 />} />
        <Route path="/ApplicantStatus2" element={<ApplicantStatus2 />} />
        <Route path="/ApplicantStatus3" element={<ApplicantStatus3 />} />
        {/* <Route path="/ApplicantStatus4" element={<ApplicantStatus4 />} /> */}
        <Route path="/JobListing" element={<JobListing />} />
        <Route path="/PostJob" element={<PostJob />} />
        <Route path="/Jobseekerdashboard" element={<Jobseekerdashboard />} />
        <Route path="/Notifications" element={<Notifications />} />
        <Route path="/Companyprofile" element={<Companyprofile />} />
      </Routes>
    </Router>
  );
}

export default App;
