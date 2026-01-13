import React from "react";
import { Link } from "react-router-dom";

import "./AnnualReport.css";

const AnnualReport = () => {
  return (
    <section className="annual-report">
      <div className="annual-report-container">
        <h1>
          Join Us in Making a Difference
        </h1>

        <p>
          Together, we can create positive change in our community.
        </p>

        <div className="annual-report-actions">
          <Link to="/Contact" className="download-btn">
            Volunteer
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AnnualReport;