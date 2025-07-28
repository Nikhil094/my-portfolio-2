import React from "react";
import "./Projects.css";

const projectList = [
  {
    title: "MHADA Housing System",
    image: "mhada.png",
    desc: "Web-based system with Spring Boot & React for housing applications.",
    
  },
  {
    title: "PMRDA Hoarding System",
    image: "pmrda.png",
    desc: "Permit automation system with role-based access.",
    
  },
  {
    title: "E-Commerce Platform",
    image: "ecommerce.png",
    desc: "Full-stack app with React, Spring Boot, JWT, MySQL.",
  
  }
];

const Projects = () => (
  <section id="projects" className="section">
    <h2>Projects</h2>
    <div className="project-grid">
      {projectList.map((proj, index) => (
        <div className="project-card" key={index}>
          <img src={proj.image} alt={proj.title} />
          <h3>{proj.title}</h3>
          <p>{proj.desc}</p>
          <a href={proj.link} target="_blank" rel="noreferrer">🔗 View Project</a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
