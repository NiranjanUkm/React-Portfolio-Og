import React, { useState, useEffect } from 'react';
import profileImage from '../assets/images/profile/profile.png';
import styles from './Hero.module.css';

function Hero() {
  const fullText = 'MCA Aspirant!';
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;
    const type = () => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
        setTimeout(type, 200);
      } else {
        setTimeout(() => {
          index = 0;
          setDisplayText('');
          type();
        }, 1000);
      }
    };
    type();
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.row}>
        <div className={styles.textColumn}>
          <p className={styles.subHead1}>Hey, This is</p>
          <h1 className={styles.head}>Niranjan</h1>
          <p className={styles.subHead2}>
            an <span className={styles.dynamicText}>{displayText}</span>
          </p>
          <a
            href="#about"
            className={styles.knowMoreBtn}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#def71c';
              e.target.style.boxShadow = '0 8px 25px rgba(222, 247, 28, 0.7)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#b6cb18';
              e.target.style.boxShadow = '0 6px 20px rgba(182, 203, 24, 0.5)';
            }}
          >
            Scroll Down <i className="fa-solid fa-arrow-down ms-3"></i>
          </a>
        </div>
        <div className={styles.photoArea}></div>
      </div>
    </section>
  );
}

export default Hero;