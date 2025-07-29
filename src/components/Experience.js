import React from "react";
import "./Experience.css";
import { FaBriefcase } from "react-icons/fa";

const experienceData = [
  {
    title: "Software Developer",
    company: "Arronics Infotech Pvt Ltd",
    duration: "2022 – Present",
    responsibilities: [
      "Developed full-stack web applications using Spring Boot and React.",
      "Integrated SQL Server databases and optimized queries.",
      "Built admin dashboards with live filtering and role-based access.",
      "Collaborated in Agile teams to deliver government and enterprise solutions."
    ]
  }
];

const Experience = () => {
  return (
   // <section id="experience" className="section fade-in">
      <section id="experience" className="section" data-aos="fade-right">

      <h2>Experience</h2>
      <div className="experience-timeline">
        {experienceData.map((item, index) => (
          <div className="experience-card" key={index}>
            <div className="experience-icon"><FaBriefcase /></div>
            <div className="experience-content">
              <h3>{item.title}</h3>
              <h4>{item.company}</h4>
              <span className="duration">{item.duration}</span>
              <ul>
                {item.responsibilities.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
