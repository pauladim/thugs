// src/components/ProjectDetails.jsx
import React from 'react';
import './ProjectDetails.css';

const ProjectDetails = () => {
  return (
    <section className="project-details">
      {/* LEFT SIDE — CAMPAIGN GRAPHIC */}
      <div className="graphic-side">
        <img
          src="/maninchains.jpeg"
          alt="DRUGFREE'20 Campaign Graphic"
          className="campaign-graphic"
        />
      </div>

      {/* RIGHT SIDE — TEXT CONTENT */}
      <div className="text-side">
        {/* Project Objectives */}
        <div className="section">
          <h3 className="section-header orange">Project Objectives:</h3>
          <ol className="section-list">
            <li>Rehabilitate 20 marginalized individuals battling drug abuse.</li>
            <li>Provide a supportive environment for their recovery and reintegration into society.</li>
            <li>Raise awareness about the importance of addressing drug abuse and supporting marginalized individuals.</li>
            <li>Foster community involvement and support for the project.</li>
          </ol>
        </div>

        {/* Project Strategy */}
        <div className="section">
          <h3 className="section-header red">Project Strategy:</h3>
          <ol className="section-list">
            <li>Outreach programs to identify and select 20 individuals for rehabilitation.</li>
            <li>3-month rehabilitation program, including:
              <ul className="nested-list">
                <li>Counseling medical checkups and therapy sessions (₦600,000 per individual for 3 months = ₦1,800,000 total for each individual).</li>
                <li>Provision of basic needs (₦130,000 per individual for 3 months = ₦390,000 total for each individual).</li>
                <li>Wardrobe and welfare support (₦150,000 per individual for 3 months = ₦450,000 total for each individual).</li>
              </ul>
            </li>
            {/* <li>Community engagement and fundraising efforts, including:
              <ul className="nested-list">
                <li>Reaching out to brands and corporate organizations for support.</li>
                <li>Organizing community donation rallies.</li>
                <li>Partnering with schools and churches.</li>
                <li>Collaborating with celebrities for endorsement and support.</li>
              </ul>
            </li> */}
          </ol>
        </div>

        {/* Project Budget */}
        <div className="section">
          <h3 className="section-header green">Project Budget:</h3>
          <p className="section-text">
            The total project cost is estimated at ₦55,800,000, broken down into:
            <br />- Rehabilitation program: ₦52,800,000 (₦2,640,000 per individual x 20 individuals).
            <br />- Operations: ₦3,000,000.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectDetails;