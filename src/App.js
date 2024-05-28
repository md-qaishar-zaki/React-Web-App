import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from "./Component/Header/Header";
import AllPlugins from "./AllPlugins";
import Home from "./Pages/Home/Home";
import Login from './LogIn/Login';
import About from './Pages/About/About';
import OurServices from './Pages/Our-Services/OurServices';
import ContactUs from './Pages/Contact-us/ContactUs';
import Ourcentres from './Pages/Our-centres/Ourcentres';


function App() {
  return (
    <Router>
      <div>
        <AllPlugins />
        <ConditionalHeader />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Our-Services" element={<OurServices />} />
          <Route path="/Contact-us" element={<ContactUs />} />
          <Route path="/Our-centres" element={<Ourcentres />} />
        </Routes>
      </div>
    </Router>
  );
}

function ConditionalHeader() {
  const location = useLocation();
  if (location.pathname === "/login") {
    return null;
  }
  return <Header />;
}
export default App;
