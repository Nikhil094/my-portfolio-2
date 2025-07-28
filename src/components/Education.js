import React from "react";
import "./Education.css";

const educationList = [
  {
    degree: "Master of Computer Application (MCA)",
    institution: "PES Modern College of Engineering, Pune",
    year: "2022 – 2024"
  },
  {
    degree: "B.Sc. Computer Science",
    institution: "K.J. Somaiya College, Kopargaon",
    year: "2019 – 2022"
  },
  {
    degree: "HSC - Science",
    institution: "Dr. D.A. Ohara Jr. College, Sangamner",
    year: "2018 – 2019"
  },
  {
    degree: "SSC",
    institution: "B.G.P. Sahyadri Vidyalaya, Sangamner",
    year: "2016 – 2017"
  }
];

const Education = () => {
  return (
    <section id="education" className="section fade-in">
      <h2>Education</h2>
      <div className="education-list">
        {educationList.map((edu, index) => (
          <div className="edu-item" key={index}>
            <h3>{edu.degree}</h3>
            <p>{edu.institution}</p>
            <span>{edu.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
