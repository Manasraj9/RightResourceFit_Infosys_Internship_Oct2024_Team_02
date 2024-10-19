import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from "./pages/Landingpage"
import Login from "./pages/Login"
import Register from "./pages/Register"
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
            <Route path="/Register" element={<Register />} />
            <Route path="/Resetpassword" element={<Resetpassword />} />
            <Route path="/OtpVerification" element={<OtpVerification />} />
            <Route path="/Homepage" element={<Homepage />} />
            <Route path="/companyhomepage" element={<companyhomepage />} />
            <Route path="/Browsecompanies" element={<Browsecompanies />} />
          </Routes>
        </Router>
  );
}

export default App;
