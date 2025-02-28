import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Education from './Education';
import Skills from './Skills';
import Internships from './Internships';
import Projects from './Projects';
import ResearchProjects from './ResearchProjects';

function Portfolio() {
  return (
    <div className="portfolio-wrapper square scrollbar-cyan bordered-cyan" style={{ backgroundColor: '#161616' }}>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Internships />
      <section id="projects" className="container-fluid text-white py-5" style={{ minHeight: '100vh', backgroundColor: '#1a1a1a' }}>
        <h2 className="mb-5 text-center animate-fade-in-up" style={{ fontSize: '2.5rem', fontWeight: 700, color: '#def71c' }}>
          Projects
        </h2>
        <Projects />
        <ResearchProjects />
      </section>
    </div>
  );
}

export default Portfolio;