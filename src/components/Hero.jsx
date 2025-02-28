import React, { useState, useEffect } from 'react';
import profileImage from '../assets/images/profile/profile.png';

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
    <section
      id="hero"
      className="container-fluid text-white p-0"
      style={{
        minHeight: '100vh',
        paddingTop: '100px',
        background: 'linear-gradient(135deg, rgba(22, 22, 22, 0.95), rgba(50, 50, 50, 0.85))',
      }}
    >
      <div className="row m-0 p-0" style={{ minHeight: '100vh' }}>
        <div className="col-sm-12 col-md-6 col-lg-7 col-xl-6 d-flex flex-column justify-content-center px-5">
          <p className="sub-head-1 m-0 animate-fade-in" style={{ fontSize: '3.5rem', letterSpacing: '2px' }}>
            Hey, This is
          </p>
          <h1
            className="head m-0 animate-slide-up"
            style={{
              fontSize: '8rem',
              fontWeight: 700,
              background: 'linear-gradient(to right, #def71c, #ffffff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 4px 12px rgba(222, 247, 28, 0.3)',
            }}
          >
            Niranjan
          </h1>
          <p className="sub-head-2 m-0 animate-fade-in" style={{ fontSize: '2.5rem', color: '#888888', fontStyle: 'italic' }}>
            an <span className="dynamic-text" style={{ color: '#def71c', fontWeight: 600 }}>{displayText}</span>
          </p>
          <a
            href="#about"
            className="know-more-btn mt-5 d-inline-block animate-bounce"
            style={{
              padding: '1rem 2.5rem',
              fontSize: '1.5rem',
              backgroundColor: '#b6cb18',
              color: '#161616',
              borderRadius: '50px',
              textDecoration: 'none',
              boxShadow: '0 6px 20px rgba(182, 203, 24, 0.5)',
              transition: 'all 0.3s ease',
            }}
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
        <div
          className="col-sm-12 col-md-12 col-lg-5 col-xl-6 photo-area"
          style={{
            backgroundImage: `url(${profileImage})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.5)',
          }}
        ></div>
      </div>
    </section>
  );
}

export default Hero;