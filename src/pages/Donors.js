import React from 'react';
import './Donors.css';

const Donors = () => {
  const donors = [
    // {
    //   name: "Dr. Sarah Johnson",
    //   role: "Medical Director",
    //   company: "HealthCare Plus",
    //   image: "https://randomuser.me/api/portraits/women/1.jpg",
    //   quote: "Supporting cancer patients is not just a duty, it's a privilege."
    // },
    // {
    //   name: "Michael Chen",
    //   role: "CEO",
    //   company: "Global Pharma Solutions",
    //   image: "https://randomuser.me/api/portraits/men/2.jpg",
    //   quote: "Every contribution makes a difference in someone's life."
    // },
    // {
    //   name: "Dr. Emily Rodriguez",
    //   role: "Research Director",
    //   company: "Cancer Research Institute",
    //   image: "https://randomuser.me/api/portraits/women/3.jpg",
    //   quote: "Together, we can make cancer treatment accessible to all."
    // }
  ];

  // Placeholder QR code URL
  const qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=joyslifefoundation";

  return (
    <div className="donors-page">
      <section className="page-banner">
        <div className="container">
          <h1>Our Donors</h1>
          <p>Join our mission to support cancer patients and their families</p>
        </div>
      </section>

      <section className="donors-section">
        <div className="container">
          <h2 className="section-title">Our Generous Supporters</h2>
          <div className="donors-grid">
            {donors.map((donor, index) => (
              <div className="donor-card" key={index}>
                <div className="donor-image">
                  <img src={donor.image} alt={donor.name} />
                </div>
                <div className="donor-info">
                  <h3>{donor.name}</h3>
                  <p className="donor-role">{donor.role}</p>
                  <p className="donor-company">{donor.company}</p>
                  <p className="donor-quote">"{donor.quote}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="donate-section">
        <div className="container">
          <h2 className="section-title">Support Our Cause</h2>
          <div className="donate-content">
            <div className="donate-info">
              <h3>Make a Difference Today</h3>
              <p>Your contribution can help us provide better care and support to cancer patients and their families. Scan the QR code to donate directly through UPI or bank transfer.</p>
              <div className="donation-options">
                <div className="donation-option">
                  <h4>UPI Payment</h4>
                  <p>Scan the QR code to donate instantly</p>
                </div>
                <div className="donation-option">
                  <h4>Bank Transfer</h4>
                  <p>Account Number: XXXX XXXX XXXX</p>
                  <p>IFSC Code: XXXX0000000</p>
                </div>
              </div>
            </div>
            <div className="qr-code">
              <img src={qrCodeUrl} alt="Donation QR Code" />
              <p>Scan to donate</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Donors;