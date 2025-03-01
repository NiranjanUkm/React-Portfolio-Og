import React from 'react';
import './About.module.css'; // Back to global style, pre-split way

function About() {
  return (
    <section id="about" className="container-fluid text-white py-5" style={{ minHeight: '100vh', backgroundColor: '#1a1a1a' }}>
      <div className="row m-0 p-4 justify-content-center">
        <div className="col-sm-12 col-md-6 col-lg-5 col-xl-5 mb-5 animate-fade-in-up">
          <h2 className="abt-head-left mb-4">About Me</h2>
          <div className="about-card p-4">
            <p className="text-justify">
              I’m a dedicated 5th-year Integrated MCA student at <strong>Amrita Vishwa Vidyapeetham, Mysuru</strong>, with a deep passion for coding and problem-solving. I’ve honed my skills through a Full MERN Stack course at Entri and built projects like <em>CineHub</em>, a movie ticket booking app. My goal? To land an internship where I can apply my technical expertise—spanning languages like Java, Python, and JavaScript—and make a real impact in the tech world.
            </p>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-5 col-xl-5 mb-5 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <h2 className="abt-head-right mb-4 text-end">Contact Me</h2>
          <div className="contact-card p-4">
            <div className="contact-item d-flex align-items-center mb-4">
              <i className="fas fa-phone fa-lg me-3" style={{ color: '#def71c' }}></i>
              <div>
                <span className="hover">Phone:</span>
                <p>(+91) 944 7277118</p>
              </div>
            </div>
            <div className="contact-item d-flex align-items-center mb-4">
              <i className="fas fa-envelope fa-lg me-3" style={{ color: '#def71c' }}></i>
              <div>
                <span className="hover">Email:</span>
                <p>officialniranjan10@gmail.com</p>
              </div>
            </div>
            <div className="contact-item d-flex align-items-center">
              <i className="fas fa-location-dot fa-lg me-3" style={{ color: '#def71c' }}></i>
              <div>
                <span className="hover">Location:</span>
                <p>Thrissur, Kerala, India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-8 col-lg-6 col-xl-5 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <h2 className="mb-4 text-center" style={{ fontSize: '2rem', fontWeight: 700, color: '#def71c' }}>
            Quick Facts
          </h2>
          <div className="facts-card p-4 text-center">
            <p><strong>Education:</strong> 5th Year Integrated MCA, Amrita Vishwa Vidyapeetham, Mysuru</p>
            <p><strong>Training:</strong> Full MERN Stack Course, Entri</p>
            <p><strong>Passion:</strong> Coding, Problem-Solving, Tech Innovation</p>
            <a
              href="#education"
              className="edu-btn d-inline-block"
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
              Know More?
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;