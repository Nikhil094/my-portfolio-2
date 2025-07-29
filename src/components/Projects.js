import React from "react";
import "./Projects.css";

const projectList = [
  {
    title: "MHADA Housing System",
    image: "mhada.png",
    desc: "Web-based system with Spring Boot & React for housing applications.",
    tech: ["Spring Boot", "React", "SQL"],
    link: "https://mhadawork.arronics.com/"
  },
  {
    title: "PMRDA Hoarding System",
    image: "pmrda.png",
    desc: "Permit automation system with role-based access.",
    tech: ["Spring Boot", "Role Access", "SQL Server"],
    link: "https://pmrda.arronics.com/User/Login?returnUrl=/"
  },
  {
    title: "E-Commerce Platform (SuperCart)",
    image: "ecommerce.png",
    desc: "Full-stack app with React, Spring Boot, JWT, and MySQL.",
    tech: ["React", "Spring Boot", "JWT", "MySQL"],
    link: "https://github.com/Nikhil094/E-Commerce-Supercart-"
  }
];

const Projects = () => (
  <section id="projects" className="section fade-in" data-aos="zoom-in-up">
    <h2>Projects</h2>
    <div className="project-grid">
      {projectList.map((proj, index) => (
        <div className="project-card" key={index} data-aos="fade-up">
          <img src={proj.image} alt={proj.title} className="project-img" />
          <h3>{proj.title}</h3>
          <p>{proj.desc}</p>
          <div className="tech-tags">
            {proj.tech.map((tag, idx) => (
              <span key={idx} className="tag">{tag}</span>
            ))}
          </div>
          <a
            href={proj.link}
            target="_blank"
            rel="noreferrer"
            className="project-link"
          >
            🔗 View Project
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
