// src/components/AboutThug.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './AboutThug.css';

const AboutThug = () => {
  return (
    <section className="about-thug-section">
      {/* LEFT SIDE — TEXT + TRANSPARENT OVERLAY */}
      <div className="text-overlay-side">
        <div className="overlay-content">
          <h2 className="section-title">
            <span>PARTNERSHIP</span><br />
            <span>OPPORTUNITIES</span>
          </h2>
          <p className="section-text">
            We invite you to partner with us in making a meaningful impact in the lives of our beneficiaries.
            Our partnership opportunities include:
            •FINANCIAL SUPPORT: Contributions to support our programs and services.
            •IN-KIND DONATIONS: Goods or services that benefit our beneficiaries.
            •PARTNERSHIP COLLABORATIONS: Joint initiatives and projects
          </p>
          <Link to="/About" className="who-we-are-button">
            WHO WE ARE
          </Link>
        </div>
      </div>

      {/* RIGHT SIDE — FULL COLOR IMAGE */}
      <div className="image-side">
        <img
          src="/book.jpeg"
          alt="Students smiling outside school"
          className="students-image"
        />
      </div>
    </section>
  );
};

export default AboutThug;