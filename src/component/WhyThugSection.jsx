// src/components/WhyThugSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './WhyThugSection.css';

const WhyThugSection = () => {
  return (
    <section className="why-thug-section">
      <div className="image-side">
        <img
          src="/gather.jpeg" // Fixed path to use public folder
          alt="Child focused on writing in school"
          className="child-image"
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            maxHeight: '500px',
            maxWidth: '600px'
          }} // Make image fit completely inside the container
        />
      </div>

      {/* Text on right side with black background */}
      <div className="text-side-right">
        <h2 className="section-title">W.A.N.T?</h2>
        <p className="section-text">
          At the WE ARE NOT THUG INITIATIVE, our mission is to empower marginalized individuals, particularly those living
          on the streets, by providing a platform for storyteling, empowerment, and reintegration into society.
          We strive to provide access to resources, skills training, and support services that enable individuals
          to rebuild their lives with dignity.
        </p>
        <Link to="/About" className="read-more-button">READ MORE</Link>
      </div>
    </section>
  );
};

export default WhyThugSection;