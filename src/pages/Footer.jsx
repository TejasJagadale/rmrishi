import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <h3 className="footer-heading"> R M Rishi Gold</h3>
          <p className="footer-about">
            Established in 1985,  R M Rishi Gold has been serving customers with pure, hallmarked gold jewellery 
            for over three decades. Our commitment to quality and transparency has made us one of the most trusted 
            jewellers in the region.
          </p>
          <div className="social-icons">
            <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/gold-rate">Gold Rate</a></li>
            <li><a href="/contact">Contact Us</a></li>
            {/* <li><a href="/about">About Us</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li> */}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact Info</h3>
          <ul className="contact-info">
            <li>
              <FaMapMarkerAlt className="contact-icon" />
              <span>DO, PERIYAR STREET, AMMAPET, 23 - AMMAPET-SALEM, PINCODE - 636001</span>
            </li>
            <li>
              <FaPhone className="contact-icon" />
              <span>+91 8675725000</span>
            </li>
            <li>
              <FaEnvelope className="contact-icon" />
              <span>info@goldpalace.com</span>
            </li>
            <li>
              <FaClock className="contact-icon" />
              <span>Monday - Saturday: 10AM - 8PM</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h3 className="footer-heading">Gold Rate Updates</h3>
          <p className="newsletter-text">
            Subscribe to get daily gold rate updates and special offers directly to your inbox.
          </p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your Email Address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()}  R M Rishi Gold. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;