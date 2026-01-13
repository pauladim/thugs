// Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // NEW: scroll to top on footer link click
  const handleFooterClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo & Mission */}
        <div className="footer-section footer-about">
          <h3 className="footer-logo">DRUGFREE’20</h3>
          <p>
            Rehabilitating 20 lives in one day — with dignity, care, and community support.
          </p>
          <div className="social-icons">
            {/* social links unchanged */}
            <a href="https://twitter.com/rectorpascal" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L3.001 21.75H.69l7.584-8.63L.69 2.25H7.44l4.838 6.353L18.244 2.25z" />
              </svg>
            </a>
           <a href="https://instagram.com/rectorpascal" target="_blank" rel="noopener noreferrer" aria-label="Instagram" > <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"> <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.28-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.28.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.28-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /> </svg> </a>
            <a href="https://youtube.com/@rectorpascal?si=rrb90HecxAqR1N5F" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.99 6.79c-.09-.82-.78-1.49-1.61-1.58C17.2 5 12 5 12 5s-5.21 0-6.39.19c-.84.09-1.52.76-1.61 1.58C3.77 8.17 3.77 9.96 3.77 12s0 3.83.23 5.21c.09.82.78 1.49 1.61 1.58 1.18.19 6.39.19 6.39.19s5.21 0 6.39-.19c.84-.09 1.52-.76 1.61-1.58.23-1.38.23-3.17.23-5.21zM10 15.3V8.7l6 3.3-6 3.3z" />
              </svg>
            </a>
            <a href="mailto:ferdinandpascal5@gmail.com" aria-label="Gmail">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/" onClick={handleFooterClick}>Home</Link></li>
            <li><Link to="/About" onClick={handleFooterClick}>About Us</Link></li>
            <li><Link to="/DrugFree20" onClick={handleFooterClick}>Programs</Link></li>
            <li><Link to="/Project" onClick={handleFooterClick}>Project</Link></li>
            <li><Link to="/Contact" onClick={handleFooterClick}>Contact Us</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div className="footer-section">
          <h4>Support Us</h4>
          <ul>
            <li>
              <a href="https://www.gofundme.com/f/support-project-drugfree20" target="_blank" rel="noopener noreferrer">
                Donate on GoFundMe
              </a>
            </li>
            <li><Link to="/Contact" onClick={handleFooterClick}>Volunteer</Link></li>
            <li><Link to="/Contact" onClick={handleFooterClick}>Partner With Us</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h4>Contact</h4>
          <address>
            Lagos, Nigeria<br />
            <a href="tel:+2347084394859">+234 708 439 4859</a><br />
            <a href="mailto:ferdinandpascal5@gmail.com">ferdinandpascal5@gmail.com</a>
          </address>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} WE ARE NOT THUGS. All rights reserved.</p>
        <p>Restoring hope • Restoring dignity • Rebuilding community</p>
      </div>
    </footer>
  );
};

export default Footer;
