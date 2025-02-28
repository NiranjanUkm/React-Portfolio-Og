import React from 'react';

function Internships() {
  return (
    <section
      id="internships"
      className="container-fluid text-white py-5"
      style={{ minHeight: '100vh', backgroundColor: '#1a1a1a' }}
    >
      <div className="row m-0 p-4 justify-content-center">
        <h2
          className="mb-5 text-center animate-fade-in-up"
          style={{ fontSize: '2.5rem', fontWeight: 700, color: '#def71c' }}
        >
          Internship Experience
        </h2>
        <div className="col-sm-12 col-md-6 col-lg-5 col-xl-5 mb-4 animate-fade-in-up">
          <div className="intern-card p-4 position-relative">
            <span
              className="intern-year"
              style={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                fontSize: '1.2rem',
                fontWeight: 600,
                color: '#b6cb18',
              }}
            >
              2024
            </span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '30px' }}>Web Developer Intern</h3>
            <p style={{ fontSize: '1.2rem', color: '#888888', margin: '5px 0' }}>
              Unified Mentor
            </p>
            <p style={{ fontSize: '1.1rem', color: '#ffffff', margin: '5px 0' }}>
              Developed a Clinic Management System using Vue.js and Firebase as part of a certification-backed internship project.
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-5 col-xl-5 mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="intern-card p-4 position-relative">
            <span
              className="intern-year"
              style={{
                position: 'absolute',
                top: '10px',
                left: '10px',
                fontSize: '1.2rem',
                fontWeight: 600,
                color: '#b6cb18',
              }}
            >
              2024
            </span>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '30px' }}>Web Developer Intern</h3>
            <p style={{ fontSize: '1.2rem', color: '#888888', margin: '5px 0' }}>
              TheWebsiteMakers
            </p>
            <p style={{ fontSize: '1.1rem', color: '#ffffff', margin: '5px 0' }}>
              Built a Gym Management System using React.js and Firebase during a certification-focused internship project.
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-5 col-xl-5 mb-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div className="intern-card p-4 position-relative">
            <span
              className="intern-year"
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
            <h3 style={{ fontSize: '1.5rem', fontWeight: 600, marginTop: '30px' }}>Machine Learning Intern</h3>
            <p style={{ fontSize: '1.2rem', color: '#888888', margin: '5px 0' }}>
              Skolar
            </p>
            <p style={{ fontSize: '1.1rem', color: '#ffffff', margin: '5px 0' }}>
              Worked on various Machine Learning models as part of a certification-based internship project.
            </p>
          </div>
        </div>
        <div className="col-12 text-center mt-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <a
            href="#projects"
            className="projects-btn d-inline-block"
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
            What I’ve Built?
          </a>
        </div>
      </div>
    </section>
  );
}

export default Internships;