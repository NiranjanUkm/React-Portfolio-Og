import React from 'react';
import styles from './HackathonProjects.module.css';

function HackathonProjects() {
  return (
    <div className={styles.container}>
      <div className={styles.header} id="hackathon-projects">
        <h3 className={styles.subTitle}>Hackathon Projects</h3>
      </div>
      <div className={styles.cardWrapper}>
        <div className={`${styles.hackathonCard} ${styles.animateSlideInLeft}`}>
          <span className={styles.hackathonYear}>2024</span>
          <h4>
            Face-Swap Deep Fake Detection{' '}
            <span className={styles.tech}>with CNNs & LSTMs</span>
          </h4>
          <p>
            Built an AI/ML solution to detect face-swap deep fakes using CNNs, LSTMs, and Grad-CAM, boosting digital security with explainable insights.
          </p>
        </div>
        <div className={`${styles.hackathonCard} ${styles.animateSlideInRight}`} style={{ animationDelay: '0.2s' }}>
          <span className={styles.hackathonYear}>2023</span>
          <h4>
            Medicinal Leafs Identification{' '}
            <span className={styles.tech}>with Deep Learning</span>
          </h4>
          <p>
            Created a CNN-based system to classify medicinal leaves by shape and texture, streamlining research and healthcare applications.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HackathonProjects;