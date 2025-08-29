import React from 'react';
import styles from './Skills.module.css';

function Skills() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`); // Force URL update
    }
  };

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Skills</h2>
        </div>
        <div className={styles.cardWrapper}>
          <div className={`${styles.skillColumn} ${styles.animateFadeInUp}`}>
            <div className={styles.skillCard}>
              <i className="fa-brands fa-html5 fa-3x mb-3"></i>
              <h3>HTML</h3>
            </div>
          </div>
          <div className={`${styles.skillColumn} ${styles.animateFadeInUp}`} style={{ animationDelay: '0.1s' }}>
            <div className={styles.skillCard}>
              <i className="fa-brands fa-css3-alt fa-3x mb-3"></i>
              <h3>CSS</h3>
            </div>
          </div>
          <div className={`${styles.skillColumn} ${styles.animateFadeInUp}`} style={{ animationDelay: '0.2s' }}>
            <div className={styles.skillCard}>
              <i className="fa-brands fa-js fa-3x mb-3"></i>
              <h3>JavaScript</h3>
            </div>
          </div>
          <div className={`${styles.skillColumn} ${styles.animateFadeInUp}`} style={{ animationDelay: '0.3s' }}>
            <div className={styles.skillCard}>
              <i className="fa-brands fa-react fa-3x mb-3"></i>
              <h3>React</h3>
            </div>
          </div>
          <div className={`${styles.skillColumn} ${styles.animateFadeInUp}`} style={{ animationDelay: '0.4s' }}>
            <div className={styles.skillCard}>
              <i className="fa-brands fa-node-js fa-3x mb-3"></i>
              <h3>Node.js</h3>
            </div>
          </div>
          <div className={`${styles.skillColumn} ${styles.animateFadeInUp}`} style={{ animationDelay: '0.5s' }}>
            <div className={styles.skillCard}>
              <i className="fa-solid fa-database fa-3x mb-3"></i>
              <h3>MongoDB</h3>
            </div>
          </div>
          <div className={`${styles.skillColumn} ${styles.animateFadeInUp}`} style={{ animationDelay: '0.6s' }}>
            <div className={styles.skillCard}>
              <i className="fa-brands fa-python fa-3x mb-3"></i>
              <h3>Python</h3>
            </div>
          </div>
          <div className={`${styles.skillColumn} ${styles.animateFadeInUp}`} style={{ animationDelay: '0.7s' }}>
            <div className={styles.skillCard}>
              <i className="fa-brands fa-java fa-3x mb-3"></i>
              <h3>Java</h3>
            </div>
          </div>
          <div className={`${styles.skillColumn} ${styles.animateFadeInUp}`} style={{ animationDelay: '0.8s' }}>
            <div className={styles.skillCard}>
              <i className="fa-brands fa-bootstrap fa-3x mb-3"></i>
              <h3>Bootstrap</h3>
            </div>
          </div>
          <div className={`${styles.skillColumn} ${styles.animateFadeInUp}`} style={{ animationDelay: '0.9s' }}>
            <div className={styles.skillCard}>
              <i className="fa-solid fa-server fa-3x mb-3"></i>
              <h3>Express</h3>
            </div>
          </div>
          <div className={`${styles.skillColumn} ${styles.animateFadeInUp}`} style={{ animationDelay: '1s' }}>
            <div className={styles.skillCard}>
              <i className="fa-solid fa-robot fa-3x mb-3"></i>
              <h3>Machine Learning</h3>
            </div>
          </div>
          <div className={`${styles.skillColumn} ${styles.animateFadeInUp}`} style={{ animationDelay: '1.1s' }}>
            <div className={styles.skillCard}>
              <i className="fa-solid fa-database fa-3x mb-3"></i>
              <h3>SQL</h3>
            </div>
          </div>
          <div className={`${styles.skillColumn} ${styles.animateFadeInUp}`} style={{ animationDelay: '1.2s' }}>
            <div className={styles.skillCard}>
              <i className="fa-brands fa-microsoft fa-3x mb-3"></i>
              <h3>C#</h3>
            </div>
          </div>
          <div className={`${styles.skillColumn} ${styles.animateFadeInUp}`} style={{ animationDelay: '1.3s' }}>
            <div className={styles.skillCard}>
              <i className="fa-solid fa-chart-line fa-3x mb-3"></i>
              <h3>Data Science</h3>
            </div>
          </div>
        </div>
        <div className={`${styles.buttonWrapper} ${styles.animateFadeInUp}`} style={{ animationDelay: '1.5s' }}>
          <button
            className={styles.internBtn}
            onClick={() => scrollToSection('internships')}
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
            Where I’ve Applied?
          </button>
        </div>
      </div>
    </section>
  );
}

export default Skills;