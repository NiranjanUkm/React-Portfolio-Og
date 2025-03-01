import React from 'react';
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
    </div>
  );
}

export default Portfolio;