// src/components/Free20.jsx
import React from 'react';
import './Free20.css';

const Free20 = () => {
  return (
    <section className="free20-section">
      {/* Top Banner */}
      <div className="top-banner">
        <h1>#DRUGFREE'20</h1>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Left Side — Text */}
        <div className="text-side">
          <h2 className="highlight-text">
            <span className="red">20 LIVES,</span><br />
            <span className="green">1 MISSION,</span><br />
            <span className="orange">20 ADMISSIONS</span>
          </h2>
          <h3 className="bold-text">ALL IN 1 DAY</h3>
        </div>

        {/* Right Side — Image */}
        <div className="image-side">
          <img
            src="/drugs20.jpeg"
            alt="DRUGFREE'20 Campaign Graphic"
            className="campaign-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Free20;