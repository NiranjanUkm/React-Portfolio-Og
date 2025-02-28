import React from 'react';
import cineHubPreview from '../assets/images/preview/CineHub.png';

function Projects() {
  return (
    <div className="row m-0 p-4 justify-content-center">
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
    </div>
  );
}

export default Projects;