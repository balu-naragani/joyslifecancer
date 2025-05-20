import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../styles/header.css';
import logo from '../assets/joyslife-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="top-bar">
          <div className="contact-info">
            <span>📞 6300334632</span>
            <span>✉️ Joyslife.prasu8080@gmail.com</span>
          </div>
          <div className="social-links">
            <span>Follow us:</span>
            <a href="#" className="social-icon">f</a>
            <a href="#" className="social-icon">t</a>
            <a href="#" className="social-icon">i</a>
          </div>
        </div>
        <div className="nav-container">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="Joyslife Foundation Logo" />
            </Link>
          </div>
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isMenuOpen ? '✕' : '☰'}
          </button>
          <nav className={`main-nav ${isMenuOpen ? 'active' : ''}`}>
            <ul>
              <li><NavLink to="/" onClick={() => setIsMenuOpen(false)}>Home</NavLink></li>
              <li><NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About Us</NavLink></li>
              <li><NavLink to="/services" onClick={() => setIsMenuOpen(false)}>Services</NavLink></li>
              <li><NavLink to="/gallery" onClick={() => setIsMenuOpen(false)}>Gallery</NavLink></li>
              <li><NavLink to="/donors" onClick={() => setIsMenuOpen(false)}>Our Donors</NavLink></li>
              <li><NavLink to="/contact" onClick={() => setIsMenuOpen(false)}>Contact Us</NavLink></li>
            </ul>
          </nav>
          <div className="donate-button">
            <Link to="/donate" className="btn btn-donate">Donate Now</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;