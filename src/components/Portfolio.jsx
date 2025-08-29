import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import About from './About';
import Education from './Education';
import Skills from './Skills';
import Internships from './Internships';
import Projects from './Projects';
import ResearchProjects from './ResearchProjects';
import HackathonProjects from './HackathonProjects';
import styles from './Portfolio.module.css';

function Portfolio() {
  const [showUpButton, setShowUpButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button if scrolled past first page (viewport height)
      const scrollPosition = window.scrollY;
      const pageHeight = window.innerHeight;
      setShowUpButton(scrollPosition > pageHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollOnePageUp = () => {
    const pageHeight = window.innerHeight;
    const currentScroll = window.scrollY;
    const targetScroll = Math.max(0, currentScroll - pageHeight); // Scroll up one page, not past top
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  return (
    <div className={styles.wrapper}>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Internships />
      <section id="projects" className={styles.projects}>
        <h2 className={styles.title}>Projects</h2>
        <Projects />
        <ResearchProjects />
        <HackathonProjects />
      </section>
      {showUpButton && (
        <button
          className={styles.upButton}
          onClick={scrollOnePageUp}
          aria-label="Scroll up one page"
        >
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
    </div>
  );
}

export default Portfolio;