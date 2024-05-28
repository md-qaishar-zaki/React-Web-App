import React, { useState, useEffect } from 'react';
import './Header.css';
import Logo from "../../Images/Logo.png";
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [activeLink, setActiveLink] = useState('/');
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsHeaderFixed(true);
      } else {
        setIsHeaderFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavToggle = () => {
    document.querySelector('header').classList.toggle('MobileShowOff');
  };

  return (
    <header>
      <i className="bi-filter-left" onClick={handleNavToggle}></i>
      <i className="bi-x-circle" onClick={handleNavToggle}></i>
      <img src={Logo} alt='Logo' className='Logo' />
      <nav className={isHeaderFixed ? 'TopFixed' : ''}>
        <Link to="/" className={activeLink === '/' ? 'Active' : ''}>Home</Link>
        <Link to="/Our-Services" className={activeLink === '/Our-Services' ? 'Active' : ''}>Our Services</Link>
        <Link to="/About" className={activeLink === '/About' ? 'Active' : ''}>About us</Link>
        <Link to="/Contact-us" className={activeLink === '/Contact-us' ? 'Active' : ''}>Contact us</Link>
        <Link to="/Our-centres" className={activeLink === '/Our-centres' ? 'Active' : ''}>Our centres</Link>
        <div className="animation start-home"></div>
      </nav>
    </header>
  );
}