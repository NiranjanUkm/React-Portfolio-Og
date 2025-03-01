import React from 'react';
import styles from './Education.module.css';

function Education() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.log(`Element with ID ${id} not found`);
    }
  };

  return (
    <section id="education" className={styles.education}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Education & Certifications</h2>
        </div>
        <div className={styles.cardWrapper}>
          {/* Degrees: Latest to Oldest */}
          <div className={`${styles.cardColumn} ${styles.animateFadeInUp}`}>
            <div className={styles.eduCard}>
              <span className={styles.eduYear}>2025</span>
              <h3>Integrated MCA</h3>
              <p>Amrita Vishwa Vidyapeetham, Mysuru, Amrita University</p>
            </div>
          </div>
          <div className={`${styles.cardColumn} ${styles.animateFadeInUp}`} style={{ animationDelay: '0.2s' }}>
            <div className={styles.eduCard}>
              <span className={styles.eduYear}>2020</span>
              <h3>DHSE (12th)</h3>
              <p>GHSS Panjal, Kerala Board of Public Examinations (KBPE)</p>
            </div>
          </div>
          <div className={`${styles.cardColumn} ${styles.animateFadeInUp}`} style={{ animationDelay: '0.4s' }}>
            <div className={styles.eduCard}>
              <span className={styles.eduYear}>2018</span>
              <h3>SSLC (10th)</h3>
              <p>GHSS Panjal, Kerala Board of Public Examinations (KBPE)</p>
            </div>
          </div>
          {/* Courses: Latest to Oldest, after Degrees */}
          <div className={`${styles.cardColumn} ${styles.animateFadeInUp}`} style={{ animationDelay: '0.6s' }}>
            <div className={styles.eduCard}>
              <span className={styles.eduYear}>2025</span>
              <h3>Full MERN Stack Certification</h3>
              <p>Entri Elevate, Online Course</p>
            </div>
          </div>
          <div className={`${styles.cardColumn} ${styles.animateFadeInUp}`} style={{ animationDelay: '0.8s' }}>
            <div className={styles.eduCard}>
              <span className={styles.eduYear}>2023</span>
              <h3>Data Science with Machine Learning</h3>
              <p>Skolar, Certification Course</p>
            </div>
          </div>
        </div>
        <div className={`${styles.buttonWrapper} ${styles.animateFadeInUp}`} style={{ animationDelay: '1s' }}>
          <button
            className={styles.skillsBtn}
            onClick={() => scrollToSection('skills')}
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
            Skills Mastered?
          </button>
        </div>
      </div>
    </section>
  );
}

export default Education;