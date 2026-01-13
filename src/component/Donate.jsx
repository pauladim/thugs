// src/components/Donate.jsx
import React from 'react';
import './Donate.css';

const Donate = () => {
  return (
    <section className="call-to-action">
      <div className="cta-content">
        <h2>Join Us in Making a Difference</h2>
        <p>
          DRUGFREE’20 aims to rehabilitate 20 marginalized individuals battling drug abuse in just one day — giving them dignity, care, and a second chance at life.
        </p>

        <div className="cta-buttons">
          <a
            href="https://www.gofundme.com/f/support-project-drugfree20?lang=en_GB"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            Donate via GoFundMe
          </a>
        </div>

        {/* Access Bank Donation Option */}
        <div className="bank-donation">
          <div className="bank-header">
            <span className="bank-icon">🏦</span>
            <h3>Make a direct bank transfer</h3>
          </div>

          <div className="bank-info-row">
            <div className="bank-details">
              <p className="bank-nam">Access Bank • 1444117918</p>
              <p className="account-nam">Account Name: Pascal U. Ferdinand</p>
            </div>

            {/* Image Slot — Replace placeholder with actual QR code or bank screenshot */}
            <div className="bank-image-placeholder">
              <img
                src="/access.jpeg"
                alt="Bank Transfer QR Code"
                className="bank-image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;