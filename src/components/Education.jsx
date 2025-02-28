import React from 'react';

function Education() {
  return (
    <section
      id="education"
      className="container-fluid text-white py-5"
      style={{ minHeight: '100vh', backgroundColor: '#1a1a1a' }}
    >
      <div className="row m-0 p-4 justify-content-center">
        <h2
          className="mb-5 text-center animate-fade-in-up"
          style={{ fontSize: '2.5rem', fontWeight: 700, color: '#def71c' }}
        >
          Education & Certifications
        </h2>
        <div className="col-sm-12 col-md-6 col-lg-5 col-xl-4 mb-4 animate-fade-in-up">
          <div className="edu-card p-4 position-relative">
            <span
              className="edu-year"
              style={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                fontSize: '1.2rem',
                fontWeight: 600,
                color: '#b6cb18',
              }}
            >
              2018
            </span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '30px' }}>SSLC (10th)</h3>
            <p style={{ fontSize: '1.2rem', color: '#888888', margin: '5px 0' }}>
              GHSS Panjal, Kerala Board of Public Examinations (KBPE)
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-5 col-xl-4 mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="edu-card p-4 position-relative">
            <span
              className="edu-year"
              style={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                fontSize: '1.2rem',
                fontWeight: 600,
                color: '#b6cb18',
              }}
            >
              2020
            </span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '30px' }}>DHSE (12th)</h3>
            <p style={{ fontSize: '1.2rem', color: '#888888', margin: '5px 0' }}>
              GHSS Panjal, Kerala Board of Public Examinations (KBPE)
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-5 col-xl-4 mb-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="edu-card p-4 position-relative">
            <span
              className="edu-year"
              style={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                fontSize: '1.2rem',
                fontWeight: 600,
                color: '#b6cb18',
              }}
            >
              2025
            </span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '30px' }}>Integrated MCA</h3>
            <p style={{ fontSize: '1.2rem', color: '#888888', margin: '5px 0' }}>
              Amrita Vishwa Vidyapeetham, Mysuru, Amrita University
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-5 col-xl-4 mb-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="edu-card p-4 position-relative">
            <span
              className="edu-year"
              style={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                fontSize: '1.2rem',
                fontWeight: 600,
                color: '#b6cb18',
              }}
            >
              2023
            </span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '30px' }}>
              Data Science with Machine Learning
            </h3>
            <p style={{ fontSize: '1.2rem', color: '#888888', margin: '5px 0' }}>
              Skolar, Certification Course
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-5 col-xl-4 mb-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="edu-card p-4 position-relative">
            <span
              className="edu-year"
              style={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                fontSize: '1.2rem',
                fontWeight: 600,
                color: '#b6cb18',
              }}
            >
              2025
            </span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '30px' }}>
              Full MERN Stack Certification
            </h3>
            <p style={{ fontSize: '1.2rem', color: '#888888', margin: '5px 0' }}>
              Entri Elevate, Online Course
            </p>
          </div>
        </div>
        <div className="col-12 text-center mt-4 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <a
            href="#skills"
            className="skills-btn d-inline-block"
            style={{
              padding: '0.8rem 2rem',
              fontSize: '1.1rem',
              backgroundColor: '#b6cb18',
              color: '#161616',
              borderRadius: '25px',
              textDecoration: 'none',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#def71c';
              e.target.style.boxShadow = '0 6px 20px rgba(222, 247, 28, 0.5)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#b6cb18';
              e.target.style.boxShadow = 'none';
            }}
          >
            Skills Mastered?
          </a>
        </div>
      </div>
    </section>
  );
}

export default Education;