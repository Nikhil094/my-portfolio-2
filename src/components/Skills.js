import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaJava,
  FaGitAlt,
  FaLinux,
  FaWindows,
  FaDatabase
} from "react-icons/fa";
import { SiSpringboot, SiPostman, SiPostgresql } from "react-icons/si";
import "./Skills.css";

const skills = {
  Frontend: [
    { name: "HTML", icon: <FaHtml5 />, color: "#e44d26", level: 99 },
    { name: "CSS", icon: <FaCss3Alt />, color: "#264de4", level: 97 },
    { name: "JavaScript", icon: <FaJsSquare />, color: "#f0db4f", level: 95 },
    { name: "React", icon: <FaReact />, color: "#61dafb", level: 99 },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952b3", level: 99 }
  ],
  Backend: [
    { name: "Java", icon: <FaJava />, color: "#f89820", level: 97 },
    { name: "Spring Boot", icon: <SiSpringboot />, color: "#6db33f", level: 98 },
    { name: "SQL", icon: <FaDatabase />, color: "#00618a", level: 95 },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791", level: 90 }
  ],
  Tools: [
    { name: "Git", icon: <FaGitAlt />, color: "#f1502f", level: 95 },
    { name: "Postman", icon: <SiPostman />, color: "#ff6c37", level: 90 },
    { name: "Linux", icon: <FaLinux />, color: "#222222", level: 90 },
    { name: "Windows", icon: <FaWindows />, color: "#0078d6", level: 99 }
  ]
};

const Skills = () => {
  return (
    //<section id="skills" className="section fade-in">
      <section id="skills" className="section fade-in" data-aos="fade-left">

      <h2>Skills</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, list]) => (
          <div key={category} className="skills-category">
            <h3>{category}</h3>
            <div className="skills-items">
              {list.map((skill) => (
                <div
                  className="skill-card"
                  key={skill.name}
                  style={{ borderColor: skill.color }}
                >
                  <div className="icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </div>
                  <div className="skill-name">{skill.name}</div>
                  <div className="progress-bar">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${skill.level}%`,
                        backgroundColor: skill.color
                      }}
                    >
                      <span>{skill.level}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
