import "./assets/css/sections.css";
import React from "react";
import "./assets/css/index.css";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import Skills from "./pages/Skills/Skills";
import Education from "./pages/Education/Education";

import { Route, Routes } from "react-router-dom"; // Import Routes and Route

export default function App() {
  return (
    <>
      <Header />
      {/* Use Routes for the Contact page and render other sections directly */}
      <Routes>
        <Route path="/contact" element={<Contact />} />
        {/* Render the main single-page content on the root path */}
        <Route path="/" element={
          <div id="content">
            <section id="home">
              <Hero />
            </section>
            
            <section id="skills">
              <Skills />
            </section>
            
            <section id="experience">
              <Experience />
            </section>
            
            <section id="education">
              <Education />
            </section>
            
            <section id="projects">
              <Projects />
            </section>
          </div>
        } />
      </Routes>
    </>
  );
}
