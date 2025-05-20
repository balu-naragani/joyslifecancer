import React from 'react';
import './Donate.css';

const Donate = () => {
  const qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=joyslifefoundation";

  return (
    <div className="donate-page">
      <section className="page-banner">
        <div className="container">
          <h1>Support Our Cause</h1>
          <p>Make a Difference Today</p>
        </div>
      </section>

      <section className="donate-section">
        <div className="container">
          <div className="donate-content">
            <div className="donate-intro">
              <h2>Make a Difference Today</h2>
              <p>Your contribution can help us provide better care and support to cancer patients and their families. Scan the QR code to donate directly through UPI or bank transfer.</p>
            </div>

            <div className="donation-methods">
              <div className="method-card upi-card">
                <h3>UPI Payment</h3>
                <p>Scan the QR code to donate instantly</p>
                <div className="qr-code">
                  <img src={qrCodeUrl} alt="Donation QR Code" />
                </div>
              </div>

              <div className="method-card bank-card">
                <h3>Bank Transfer</h3>
                <div className="bank-details">
                  <div className="detail-item">
                    <span className="label">Account Name:</span>
                    <span className="value">Joy's Life Foundation</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Account Number:</span>
                    <span className="value">XXXX XXXX XXXX</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">Bank Name:</span>
                    <span className="value">[Bank Name]</span>
                  </div>
                  <div className="detail-item">
                    <span className="label">IFSC Code:</span>
                    <span className="value">XXXX0000000</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="impact-section">
              <h3>Your Impact</h3>
              <div className="impact-grid">
                <div className="impact-item">
                  <div className="icon">💊</div>
                  <h4>Medical Support</h4>
                  <p>Help provide essential medicines and treatments to patients in need</p>
                </div>
                <div className="impact-item">
                  <div className="icon">🏥</div>
                  <h4>Healthcare Access</h4>
                  <p>Support hospital visits and medical procedures for underprivileged patients</p>
                </div>
                <div className="impact-item">
                  <div className="icon">👨‍👩‍👧‍👦</div>
                  <h4>Family Support</h4>
                  <p>Provide counseling and resources to families affected by cancer</p>
                </div>
                <div className="impact-item">
                  <div className="icon">🎓</div>
                  <h4>Education</h4>
                  <p>Support awareness programs and cancer education initiatives</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donate; 