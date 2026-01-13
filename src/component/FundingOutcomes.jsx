// src/components/FundingOutcomes.jsx
import React from 'react';
import './FundingOutcomes.css';

const FundingOutcomes = () => {
  return (
    <section className="funding-outcomes">
      {/* LEFT SIDE — TEXT CONTENT */}
      <div className="text-side">
        {/* Funding Strategy */}
        <div className="section">
          <h3 className="section-header blue">Funding Strategy:</h3>
          <p className="section-text">
            To achieve the project goal, we plan to:
          </p>
          <ol className="section-list">
            <li>Reach out to brands and corporate organizations for sponsorship and support.</li>
            <li>Organize community donation rallies to engage the public.</li>
            <li>Partner with schools to raise awareness and gather support.</li>
            <li>Collaborate with celebrities to endorse and support the project.</li>
            <li>Engage with major churches to promote the project and gather support.</li>
          </ol>
        </div>

        {/* Expected Outcomes */}
        <div className="section">
          <h3 className="section-header gray">Expected Outcomes:</h3>
          <ol className="section-list">
            <li>Successful rehabilitation of 20 marginalized individuals.</li>
            <li>Increased awareness about the importance of addressing drug abuse and supporting marginalized individuals.</li>
            <li>Enhanced community involvement and support for the project.</li>
            <li>Improved dignity and self-esteem for the rehabilitated individuals.</li>
          </ol>
        </div>

        {/* Closing Statement */}
        <div className="closing-statement">
          <p>
            By supporting the <strong>DRUGFREE'20</strong> project, we can make a significant impact in our community and provide a chance for these individuals to rebuild their lives.
          </p>
        </div>
      </div>

      {/* RIGHT SIDE — CAMPAIGN GRAPHIC */}
      <div className="graphic-side">
        <img
          src="/drugfree200.jpeg"
          alt="DRUGFREE'20 Campaign Graphic"
          className="campaign-graphic"
        />
      </div>
    </section>
  );
};

export default FundingOutcomes;