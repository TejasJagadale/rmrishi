import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaTwitter
} from "react-icons/fa";
import "../Styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      errors.phone = "Phone must be 10 digits";
    }
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // In a real app, you would send the form data to your backend
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setIsSubmitted(false), 5000);
    } else {
      setFormErrors(errors);
    }
  };

  const branches = [
    {
      id: 1,
      name: "Main Showroom",
      address: "123 Gold Street, Jewelry District, Mumbai 400001",
      phone: "+91 8675725000",
      hours: "Mon-Sat: 10AM - 8PM\nSun: 11AM - 6PM"
    },
    {
      id: 2,
      name: "Downtown Branch",
      address: "456 Silver Plaza, Business District, Mumbai 400002",
      phone: "+91 98765 43211",
      hours: "Mon-Sat: 10AM - 7PM\nSun: Closed"
    },
    {
      id: 3,
      name: "Uptown Gallery",
      address: "789 Diamond Heights, Shopping Zone, Mumbai 400003",
      phone: "+91 98765 43212",
      hours: "Mon-Sun: 10AM - 9PM"
    }
  ];

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contact R M Rishi Gold</h1>
        <p>
          We'd love to hear from you! Reach out for inquiries, appointments, or
          feedback.
        </p>
      </div>

      <div className="contact-container">
        {/* Contact Form */}
        <div className="contact-form-section">
          <h2>Send Us a Message</h2>
          {isSubmitted ? (
            <div className="success-message">
              Thank you for contacting us! We'll get back to you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Your Name*</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={formErrors.name ? "error" : ""}
                />
                {formErrors.name && (
                  <span className="error-message">{formErrors.name}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address*</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={formErrors.email ? "error" : ""}
                />
                {formErrors.email && (
                  <span className="error-message">{formErrors.email}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number*</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={formErrors.phone ? "error" : ""}
                />
                {formErrors.phone && (
                  <span className="error-message">{formErrors.phone}</span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message*</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={formErrors.message ? "error" : ""}
                ></textarea>
                {formErrors.message && (
                  <span className="error-message">{formErrors.message}</span>
                )}
              </div>

              <button type="submit" className="submit-btn">
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Contact Information */}
        <div className="contact-info-section">
          <div className="info-cardctc">
            <h2>Get In Touch</h2>

            <div className="contact-method">
              <FaPhone className="contact-icon" />
              <div className="podu">
                <h3>Phone</h3>
                <p>+91 8675725000</p>
                {/* <p>+91 98765 43211 (WhatsApp)</p> */}
              </div>
            </div>

            <div className="contact-method">
              <FaEnvelope className="contact-icon" />
              <div className="podu">
                <h3>Email</h3>
                <p>info@goldpalace.com</p>
                <p>sales@goldpalace.com</p>
              </div>
            </div>

            <div className="contact-method">
              <FaClock className="contact-icon" />
              <div className="podu">
                <h3>Business Hours</h3>
                <p>Monday - Saturday: 10AM - 8PM</p>
                <p>Sunday: 11AM - 6PM</p>
              </div>
            </div>

            <div className="social-links">
              <h3>Follow Us</h3>
              <div className="social-iconsctc">
                <a href="https://facebook.com" aria-label="Facebook">
                  <FaFacebook />
                </a>
                <a href="https://instagram.com" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://twitter.com" aria-label="Twitter">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Branches Section */}
      {/* <div className="branches-section">
        <h2>Our Showrooms</h2>
        <div className="branches-container">
          {branches.map(branch => (
            <div key={branch.id} className="branch-card">
              <h3>{branch.name}</h3>
              <div className="branch-detail">
                <FaMapMarkerAlt className="detail-icon" />
                <p>{branch.address}</p>
              </div>
              <div className="branch-detail">
                <FaPhone className="detail-icon" />
                <p>{branch.phone}</p>
              </div>
              <div className="branch-detail">
                <FaClock className="detail-icon" />
                <p style={{ whiteSpace: 'pre-line' }}>{branch.hours}</p>
              </div>
              <button className="direction-btn">Get Directions</button>
            </div>
          ))}
        </div>
      </div> */}

      {/* Map Embed */}
      <div className="map-section">
        <h2>Find Us on Map</h2>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.5696240931907!2d78.16078301080191!3d11.653985842346316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1d1e5d415d3%3A0xa5107479cb4569d4!2sPeriyar%20St%2C%20Salem%2C%20Tamil%20Nadu%20636001!5e0!3m2!1sen!2sin!4v1755064446884!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
