import React from "react";
import "./Header.css";

const Header = () => (
  //<header className="header section fade-in" id="home">
    <header className="header" data-aos="fade-down">

    <img
      src="Nikhil.jpg" // Place this image inside /public or src/images
      alt="Nikhil Deshmukh"
      className="profile-img"
    />
    <h1 className="name">Nikhil Sanjayrao Deshmukh</h1>
    <p className="title">
      Software Developer | Java | Spring Boot | React | SQL
    </p>
    <a href="resume.pdf" download className="resume-btn">
      📄 Download Resume
    </a>
  </header>
);

export default Header;
