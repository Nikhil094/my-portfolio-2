import React from "react";
import "./About.css";

const About = () => {
  return (
    //<section id="about" className="section about-section fade-in">
      <section id="about" className="section fade-in" data-aos="fade-up">

      <h2>About Me</h2>
      <div className="about-content">
        <p>
          I’m a passionate <strong>Software Developer</strong> with 3+ years of experience in
          building modern, scalable full-stack applications using <strong>Java, Spring Boot,
          React</strong> and <strong>SQL</strong>. I thrive in collaborative environments,
          love solving real-world problems, and continuously upskill myself with the latest
          technologies.
        </p>
        <p>
          My goal is to deliver clean, maintainable code while focusing on performance and user experience.
          I’ve contributed to multiple client-based projects involving government and enterprise solutions.
        </p>
      </div>
    </section>
  );
};

export default About;
