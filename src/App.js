import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // ✅ Initialize AOS once on mount
  useEffect(() => {
    AOS.init({
      duration: 1000,       // animation duration
      offset: 100,          // trigger point
      easing: 'ease-in-out',
      once: true            // only animate once
    });
  }, []);

  // Theme toggle
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
