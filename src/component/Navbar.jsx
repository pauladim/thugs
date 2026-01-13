// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // NEW: close menu + scroll to top
  const handleMenuClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="main-navbar">
        <div className="main-navbar-glass">
          {/* Logo */}
          <div className="main-navbar-logo">
            <a href="/">
              <img src="../public/vin.png" alt="" />
            </a>
          </div>

          {/* Hamburger */}
          <button 
            className={`main-navbar-menu-btn ${isMenuOpen ? 'active' : ''}`} 
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Backdrop */}
      <div 
        className={`backdrop ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
      ></div>

      {/* Off-canvas menu */}
      {isMenuOpen && (
        <div className={`off-canvas-menu ${isMenuOpen ? 'active' : ''}`}>
          <div className="menu-content">
            <ul className="menu-list">
              <li><Link to="/" onClick={handleMenuClick}>Home</Link></li>
              <li><Link to="/About" onClick={handleMenuClick}>About</Link></li>
              <li><Link to="/DrugFree20" onClick={handleMenuClick}>Programs</Link></li>
              <li><Link to="/Project" onClick={handleMenuClick}>Project</Link></li>
              <li><Link to="/Contact" onClick={handleMenuClick}>Contact</Link></li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
