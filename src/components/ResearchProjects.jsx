import React from 'react';

function ResearchProjects() {
  return (
    <div className="row m-0 p-4 justify-content-center">
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
  );
}

export default ResearchProjects;