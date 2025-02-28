import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import profileImage from '../assets/images/profile/profile.png';
import cineHubPreview from '../assets/images/preview/CineHub.png'; // Import the preview image

function Portfolio() {
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
    <div className="portfolio-wrapper square scrollbar-cyan bordered-cyan" style={{ backgroundColor: '#161616' }}>
      <Navbar />
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

      <section
        id="about"
        className="container-fluid text-white py-5"
        style={{ minHeight: '100vh', backgroundColor: '#1a1a1a' }}
      >
        <div className="row m-0 p-4 justify-content-center">
          <div className="col-sm-12 col-md-6 col-lg-5 col-xl-5 mb-5 animate-fade-in-up">
            <h2 className="abt-head-left mb-4" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              About Me
            </h2>
            <div
              className="about-card p-4"
              style={{
                background: 'linear-gradient(145deg, #222222, #2a2a2a)',
                borderRadius: '15px',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)',
              }}
            >
              <p className="text-justify" style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                I’m a dedicated 5th-year Integrated MCA student at <strong>Amrita Vishwa Vidyapeetham, Mysuru</strong>, with a deep passion for coding and problem-solving. I’ve honed my skills through a Full MERN Stack course at Entri and built projects like <em>CineHub</em>, a movie ticket booking app. My goal? To land an internship where I can apply my technical expertise—spanning languages like Java, Python, and JavaScript—and make a real impact in the tech world.
              </p>
            </div>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-5 col-xl-5 mb-5 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="abt-head-right mb-4 text-end" style={{ fontSize: '2.5rem', fontWeight: 700 }}>
              Contact Me
            </h2>
            <div
              className="contact-card p-4"
              style={{
                background: 'linear-gradient(145deg, #222222, #2a2a2a)',
                borderRadius: '15px',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)',
              }}
            >
              <div className="contact-item d-flex align-items-center mb-4">
                <i className="fas fa-phone fa-lg me-3" style={{ color: '#def71c' }}></i>
                <div>
                  <span className="hover" style={{ fontSize: '1.1rem', color: '#888888' }}>Phone:</span>
                  <p style={{ fontSize: '1.2rem', margin: 0 }}>(+91) 944 7277118</p>
                </div>
              </div>
              <div className="contact-item d-flex align-items-center mb-4">
                <i className="fas fa-envelope fa-lg me-3" style={{ color: '#def71c' }}></i>
                <div>
                  <span className="hover" style={{ fontSize: '1.1rem', color: '#888888' }}>Email:</span>
                  <p style={{ fontSize: '1.2rem', margin: 0 }}>officialniranjan10@gmail.com</p>
                </div>
              </div>
              <div className="contact-item d-flex align-items-center">
                <i className="fas fa-location-dot fa-lg me-3" style={{ color: '#def71c' }}></i>
                <div>
                  <span className="hover" style={{ fontSize: '1.1rem', color: '#888888' }}>Location:</span>
                  <p style={{ fontSize: '1.2rem', margin: 0 }}>Thrissur, Kerala, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-12 col-md-8 col-lg-6 col-xl-5 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h2 className="mb-4 text-center" style={{ fontSize: '2rem', fontWeight: 700, color: '#def71c' }}>
              Quick Facts
            </h2>
            <div
              className="facts-card p-4 text-center"
              style={{
                background: 'linear-gradient(145deg, #222222, #2a2a2a)',
                borderRadius: '15px',
                boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)',
              }}
            >
              <p style={{ fontSize: '1.2rem', margin: '0 0 10px' }}>
                <strong>Education:</strong> 5th Year Integrated MCA, Amrita Vishwa Vidyapeetham, Mysuru
              </p>
              <p style={{ fontSize: '1.2rem', margin: '0 0 10px' }}>
                <strong>Training:</strong> Full MERN Stack Course, Entri
              </p>
              <p style={{ fontSize: '1.2rem', margin: '0 0 15px' }}>
                <strong>Passion:</strong> Coding, Problem-Solving, Tech Innovation
              </p>
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

      <section
        id="skills"
        className="container-fluid text-white py-5"
        style={{ minHeight: '100vh', backgroundColor: '#1a1a1a' }}
      >
        <div className="row m-0 p-4 justify-content-center">
          <h2
            className="skills-head mb-5 text-center animate-fade-in-up"
            style={{ fontSize: '2.5rem', fontWeight: 700, color: '#def71c' }}
          >
            Skills
          </h2>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4 animate-fade-in-up">
            <div className="skill-card p-4 text-center">
              <i className="fa-brands fa-html5 fa-3x mb-3" style={{ color: '#def71c' }}></i>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 600 }}>HTML</h3>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="skill-card p-4 text-center">
              <i className="fa-brands fa-css3-alt fa-3x mb-3" style={{ color: '#def71c' }}></i>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 600 }}>CSS</h3>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="skill-card p-4 text-center">
              <i className="fa-brands fa-js fa-3x mb-3" style={{ color: '#def71c' }}></i>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 600 }}>JavaScript</h3>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="skill-card p-4 text-center">
              <i className="fa-brands fa-react fa-3x mb-3" style={{ color: '#def71c' }}></i>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 600 }}>React</h3>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="skill-card p-4 text-center">
              <i className="fa-brands fa-node-js fa-3x mb-3" style={{ color: '#def71c' }}></i>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 600 }}>Node.js</h3>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <div className="skill-card p-4 text-center">
              <i className="fa-solid fa-database fa-3x mb-3" style={{ color: '#def71c' }}></i>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 600 }}>MongoDB</h3>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="skill-card p-4 text-center">
              <i className="fa-brands fa-python fa-3x mb-3" style={{ color: '#def71c' }}></i>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 600 }}>Python</h3>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <div className="skill-card p-4 text-center">
              <i className="fa-brands fa-java fa-3x mb-3" style={{ color: '#def71c' }}></i>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 600 }}>Java</h3>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="skill-card p-4 text-center">
              <i className="fa-brands fa-bootstrap fa-3x mb-3" style={{ color: '#def71c' }}></i>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 600 }}>Bootstrap</h3>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
            <div className="skill-card p-4 text-center">
              <i className="fa-solid fa-server fa-3x mb-3" style={{ color: '#def71c' }}></i>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 600 }}>Express</h3>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4 animate-fade-in-up" style={{ animationDelay: '1s' }}>
            <div className="skill-card p-4 text-center">
              <i className="fa-solid fa-robot fa-3x mb-3" style={{ color: '#def71c' }}></i>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 600 }}>Machine Learning</h3>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4 animate-fade-in-up" style={{ animationDelay: '1.1s' }}>
            <div className="skill-card p-4 text-center">
              <i className="fa-solid fa-database fa-3x mb-3" style={{ color: '#def71c' }}></i>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 600 }}>SQL</h3>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
            <div className="skill-card p-4 text-center">
              <i className="fa-brands fa-microsoft fa-3x mb-3" style={{ color: '#def71c' }}></i>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 600 }}>C#</h3>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-3 col-xl-2 mb-4 animate-fade-in-up" style={{ animationDelay: '1.3s' }}>
            <div className="skill-card p-4 text-center">
              <i className="fa-solid fa-chart-line fa-3x mb-3" style={{ color: '#def71c' }}></i>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 600 }}>Data Science</h3>
            </div>
          </div>
          <div className="col-12 text-center mt-4 animate-fade-in-up" style={{ animationDelay: '1.5s' }}>
            <a
              href="#internships"
              className="intern-btn d-inline-block"
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
              Where I’ve Applied?
            </a>
          </div>
        </div>
      </section>

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

      <section
        id="projects"
        className="container-fluid text-white py-5"
        style={{ minHeight: '100vh', backgroundColor: '#1a1a1a' }}
      >
        <div className="row m-0 p-4 justify-content-center">
          <h2
            className="mb-5 text-center animate-fade-in-up"
            style={{ fontSize: '2.5rem', fontWeight: 700, color: '#def71c' }}
          >
            Projects
          </h2>
          <div className="col-12 mb-5">
            <h3
              className="text-center animate-fade-in-up"
              style={{ fontSize: '2rem', fontWeight: 600, color: '#ffffff' }}
            >
              Application Projects
            </h3>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-5 col-xl-4 mb-4 animate-fade-in-up">
            <div className="project-card p-4">
              <h4 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#def71c', marginBottom: '15px' }}>
                Movie Ticket Booking App
              </h4>
              <div
                className="project-preview mb-3"
                style={{
                  height: '300px',
                  borderRadius: '10px',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={cineHubPreview}
                  alt="Movie Ticket Booking App Preview"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div className="project-tools mb-3 d-flex justify-content-start gap-2">
                <i className="fa-brands fa-react fa-2x" style={{ color: '#def71c' }} title="React"></i>
                <i className="fa-brands fa-js fa-2x" style={{ color: '#def71c' }} title="JavaScript"></i>
                <i className="fa-brands fa-node-js fa-2x" style={{ color: '#def71c' }} title="Node.js"></i>
                <i className="fa-solid fa-database fa-2x" style={{ color: '#def71c' }} title="MongoDB"></i>
              </div>
              <a
                href="https://cinehub-frontend-12.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link d-inline-block"
                style={{
                  padding: '0.6rem 1.5rem',
                  fontSize: '1rem',
                  backgroundColor: '#b6cb18',
                  color: '#161616',
                  borderRadius: '20px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = '#def71c';
                  e.target.style.boxShadow = '0 4px 15px rgba(222, 247, 28, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#b6cb18';
                  e.target.style.boxShadow = 'none';
                }}
              >
                View Live
              </a>
            </div>
          </div>
          <div className="col-12 text-center mt-4 mb-5 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <a
              href="#research-projects"
              className="research-btn d-inline-block"
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
              Not Over!
            </a>
          </div>
          <div className="col-12 mb-5" id="research-projects">
            <h3
              className="text-center animate-fade-in-up"
              style={{ fontSize: '2rem', fontWeight: 600, color: '#ffffff' }}
            >
              Research Projects
            </h3>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-5 col-xl-4 mb-4 animate-fade-in-up">
            <div className="research-card p-4 position-relative">
              <span
                className="research-year"
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
              <h4 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#def71c', marginTop: '30px', marginBottom: '10px' }}>
                Kannada Handwritten Braille Character Recognition
              </h4>
              <p style={{ fontSize: '1.1rem', color: '#ffffff', margin: '0' }}>
                Developed a system using YOLOv5 and CNN to recognize handwritten Kannada Braille, efficiently detecting and classifying dot patterns from real-world images.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-5 col-xl-4 mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="research-card p-4 position-relative">
              <span
                className="research-year"
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
              <h4 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#def71c', marginTop: '30px', marginBottom: '10px' }}>
                Pathology Dataset Classification
              </h4>
              <p style={{ fontSize: '1.1rem', color: '#ffffff', margin: '0' }}>
                Built a predictive model for chronic kidney disease using Random Forest, KNN, and Decision Tree, enhanced by preprocessing and ROC-AUC evaluation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;