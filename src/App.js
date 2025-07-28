import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Footer from "./components/Footer";
import "./App.css";
import Contact from "./components/Contact";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);

  return (
    <div className="App">
      <div className="theme-toggle">
        <label className="switch">
          <input
            type="checkbox"
            onChange={() => setDarkMode(!darkMode)}
            checked={darkMode}
          />
          <span className="slider round"></span>
        </label>
        <span>{darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}</span>
      </div>

      <Navbar />
      <Header />
      <About />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
