import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landingpage from "./pages/Landingpage"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Resetpassword from "./pages/Resetpassword"


function App() {
  return (
        <Router>
          <Routes>
            <Route path="/" element={<Landingpage />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Resetpassword" element={<Resetpassword />} />
          </Routes>
        </Router>
  );
}

export default App;
