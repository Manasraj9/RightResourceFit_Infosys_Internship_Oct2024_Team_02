import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from "./pages/Landingpage"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Resetpassword from "./pages/Resetpassword"
<<<<<<< HEAD
import Homepage from './pages/Homepage'
=======
import OtpVerification from  "./pages/OtpVerification"
>>>>>>> origin/main


function App() {
  return (
        <Router>
          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/Home" element={<Homepage />} /> 
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Resetpassword" element={<Resetpassword />} />
            <Route path="/OtpVerification" element={<OtpVerification />} />
          </Routes>
        </Router>
  );
}

export default App;
