import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from "./pages/Landingpage"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Resetpassword from "./pages/Resetpassword"
import OtpVerification from  "./pages/OtpVerification"
import Homepage from "./pages/Homepage"
import Browsecompanies from "./pages/Browsecompanies"


function App() {
  return (
        <Router>
          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Resetpassword" element={<Resetpassword />} />
            <Route path="/OtpVerification" element={<OtpVerification />} />
            <Route path="/Homepage" element={<Homepage />} />
            <Route path="/Browsecompanies" element={<Browsecompanies />} />
          </Routes>
        </Router>
  );
}

export default App;
