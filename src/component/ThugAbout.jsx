// src/components/ThugAbout.jsx
import React from 'react';
import './ThugAbout.css';

// Import your image (update path if needed)
import thugLeader from '/aboutimage.jpeg'; // ← Replace with your actual image path

const ThugAbout = () => {
  return (
    <section className="thug-about">
      <div className="image-column">
        <img src={thugLeader} alt="Founding Member" />
      </div>
      <div className="text-column">
        <h2 className="section-title"> MEET OUR FOUNDER</h2>
        <h3 className="founder-name">Mr.Pascal Ferdinand</h3>
        <p className="section-body">
         Rector Pascal is a dedicated advocate for marginalized individuals and recovery, driven by a deep belief in restoring lives. He founded WE ARE NOT THUGS to provide a safe path from drug abuse to healing, guided by compassion, education, and second chances. He’s the Creative Director of RECTOR FILMZ a media production company that provide services in
          <br />
         •LIVE BROADCAST 
•MUSICAL VIDEO SHOOT
•EDITING
•COLOR GRADING <br />
He’s also the CEO of REJULZ HOMECARE, a Georgia Atlanta based homecare for health care or supportive care provided to individual / patients.
        </p>
      </div>
    </section>
  );
};

export default ThugAbout;