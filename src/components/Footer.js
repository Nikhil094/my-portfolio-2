import React from "react";
import "./Footer.css";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1 - About */}
        <div className="footer-section">
          <h3>Nikhil Deshmukh</h3>
          <p>Passionate Full Stack Developer specializing in Java, React, and SQL-based solutions. Let’s build something amazing!</p>
        </div>

        {/* Column 2 - Contact Info */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p><FaEnvelope /> nikhildeshmukh5899@gmail.com</p>
          <p><FaPhone /> +91-9423147049</p>
          <p><FaMapMarkerAlt /> Pune, Maharashtra</p>
        </div>

        {/* Column 3 - Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Column 4 - Socials */}
        <div className="footer-section">
          <h4>Connect</h4>
          <div className="social-icons">
            <a href="https://github.com/Nikhil094" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Nikhil Deshmukh. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
