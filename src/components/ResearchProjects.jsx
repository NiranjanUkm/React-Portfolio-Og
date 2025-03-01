import React from 'react';
import styles from './ResearchProjects.module.css';

function ResearchProjects() {
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
      <div className={styles.header} id="research-projects">
        <h3 className={styles.subTitle}>Research Projects</h3>
      </div>
      <div className={styles.cardWrapper}>
        <div className={`${styles.researchCard} ${styles.animateSlideInLeft}`}>
          <span className={styles.researchYear}>2024</span>
          <h4>
            Kannada Handwritten Braille Recognition{' '}
            <span className={styles.tech}>with YOLOv5 & CNN</span>
          </h4>
          <p>
            Crafted a cutting-edge system to detect and classify handwritten Kannada Braille dot patterns from real-world images using deep learning techniques.
          </p>
          <a
            href="https://drive.google.com/file/d/1Cxd-8DLUOTNA6rFBjaHiW9exOv1LD0sI/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.researchLink}
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
            Read Paper
          </a>
        </div>
        <div className={`${styles.researchCard} ${styles.animateSlideInRight}`} style={{ animationDelay: '0.2s' }}>
          <span className={styles.researchYear}>2024</span>
          <h4>
            Pathology Dataset Classification{' '}
            <span className={styles.tech}>with Random Forest & KNN</span>
          </h4>
          <p>
            Engineered a predictive model for chronic kidney disease, leveraging multiple algorithms and boosting accuracy with preprocessing and ROC-AUC analysis.
          </p>
          <a
            href="https://drive.google.com/file/d/1Z9ecleIabhfqhOXC18KdEfPMeCfGnolo/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.researchLink}
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
            Read Paper
          </a>
        </div>
      </div>
      <div className={`${styles.buttonWrapper} ${styles.animateFadeInUp}`} style={{ animationDelay: '0.2s' }}>
        <button
          className={styles.hackathonBtn}
          onClick={() => scrollToSection('hackathon-projects')}
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
          Keep Going!
        </button>
      </div>
    </div>
  );
}

export default ResearchProjects;