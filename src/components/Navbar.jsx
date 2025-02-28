import React from 'react';

function Navbar() {
  return (
    <nav
      className="custom-navbar d-flex align-items-center justify-content-end py-4 text-white"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1000,
        padding: '0 6rem', // Matches your original CSS
      }}
    >
      <div className="social-links d-flex align-items-center gap-5 justify-content-end">
        <i className="fa-brands fa-instagram icons"></i>
        <i className="fa-brands fa-linkedin-in icons"></i>
      </div>
    </nav>
  );
}

export default Navbar;