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
import Browsecompanies from "./pages/Browsecompanies";
import Companypage from "./pages/Companypage";
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
        <Route path="/Resetpassword" element={<Resetpassword />} />
        <Route path="/OtpVerification" element={<OtpVerification />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/Companypage" element={<Companypage />} />
        <Route path="/Browsecompanies" element={<Browsecompanies />} />
        <Route path="/Companyhomepage" element={<Companyhomepage />} />
        <Route path="/PostJob" element={<PostJob />} />
      </Routes>
    </Router>
  );
}

export default App;
