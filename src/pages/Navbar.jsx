import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Add this import
import '../Styles/Navbar.css';
import { FaPhone } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Get current location

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to check if a link is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="/">R M Rishi Gold</a>
        </div>

        <div
          className={`navbar-toggle ${isMenuOpen ? 'open' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <a 
              href="/" 
              className={`navbar-link ${isActive('/') ? 'active' : ''}`} 
              onClick={closeMenu}
            >
              Home
            </a>
          </li>
          <li className="navbar-item">
            <a 
              href="/gold-rate" 
              className={`navbar-link ${isActive('/gold-rate') ? 'active' : ''}`} 
              onClick={closeMenu}
            >
              Gold Rate
            </a>
          </li>
          <li className="navbar-item">
            <a 
              href="/contact" 
              className={`navbar-link ${isActive('/contact') ? 'active' : ''}`} 
              onClick={closeMenu}
            >
              Contact Us
            </a>
          </li>

          <li className="navbar-item phone-item">
            <a href="tel:+919876543210" className="navbar-link phone-link" onClick={closeMenu}>
              <FaPhone className="phone-icon" /> +91 8675725000
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;