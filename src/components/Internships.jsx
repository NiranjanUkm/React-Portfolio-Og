import React from 'react';
import styles from './Internships.module.css';

function Internships() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log(`Element with ID ${id} not found`);
    }
  };

  return (
    <section id="internships" className={styles.internships}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Internship Experience</h2>
        </div>
        <div className={styles.cardWrapper}>
          <div className={`${styles.internCard} ${styles.animateFadeInUp}`}>
            <span className={styles.internYear}>2024</span>
            <h3>Web Developer Intern</h3>
            <p className={styles.company}>Unified Mentor</p>
            <p className={styles.description}>
              Developed a Clinic Management System using Vue.js and Firebase as part of a certification-backed internship project.
            </p>
          </div>
          <div className={`${styles.internCard} ${styles.animateFadeInUp}`} style={{ animationDelay: '0.2s' }}>
            <span className={styles.internYear}>2024</span>
            <h3>Web Developer Intern</h3>
            <p className={styles.company}>TheWebsiteMakers</p>
            <p className={styles.description}>
              Built a Gym Management System using React.js and Firebase during a certification-focused internship project.
            </p>
          </div>
          <div className={`${styles.internCard} ${styles.animateFadeInUp}`} style={{ animationDelay: '0.4s' }}>
            <span className={styles.internYear}>2023</span>
            <h3>Machine Learning Intern</h3>
            <p className={styles.company}>Skolar</p>
            <p className={styles.description}>
              Worked on various Machine Learning models as part of a certification-based internship project.
            </p>
          </div>
        </div>
        <div className={`${styles.buttonWrapper} ${styles.animateFadeInUp}`} style={{ animationDelay: '0.6s' }}>
          <button
            className={styles.projectsBtn}
            onClick={() => scrollToSection('projects')}
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
            What I’ve Built?
          </button>
        </div>
      </div>
    </section>
  );
}

export default Internships; 