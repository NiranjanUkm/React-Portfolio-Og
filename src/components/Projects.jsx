import React from 'react';
import cineHubPreview from '../assets/images/preview/CineHub.png';
import styles from './Projects.module.css';

function Projects() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log(`Element with ID ${id} not found`);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3 className={styles.subTitle}>Application Projects</h3>
      </div>
      <div className={styles.cardWrapper}>
        <div className={`${styles.projectCard} ${styles.animateSlideInLeft}`}>
          <span className={styles.projectYear}>2024</span>
          <h4>Movie Ticket Booking App</h4>
          <div className={styles.projectPreview}>
            <img src={cineHubPreview} alt="Movie Ticket Booking App Preview" />
          </div>
          <div className={styles.projectTools}>
            <i className="fa-brands fa-react fa-2x" title="React"></i>
            <i className="fa-brands fa-js fa-2x" title="JavaScript"></i>
            <i className="fa-brands fa-node-js fa-2x" title="Node.js"></i>
            <i className="fa-solid fa-database fa-2x" title="MongoDB"></i>
          </div>
          <a
            href="https://cinehub-frontend-12.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#def71c';
              e.target.style.boxShadow = '0 4px 15px rgba(222, 247, 28, 0.5)';
              e.target.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#b6cb18';
              e.target.style.boxShadow = 'none';
              e.target.style.transform = 'scale(1)';
            }}
          >
            View Live
          </a>
        </div>
      </div>
      <div className={`${styles.buttonWrapper} ${styles.animateFadeInUp}`} style={{ animationDelay: '0.2s' }}>
        <button
          className={styles.researchBtn}
          onClick={() => scrollToSection('research-projects')}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#def71c';
            e.target.style.boxShadow = '0 6px 20px rgba(222, 247, 28, 0.5)';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#b6cb18';
            e.target.style.boxShadow = 'none';
            e.target.style.transform = 'scale(1)';
          }}
        >
          Not Over!
        </button>
      </div>
    </div>
  );
}

export default Projects;