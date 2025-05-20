import React from 'react';
import ServicesComponent from '../components/Services';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page">
      <section className="page-banner">
        <div className="container">
          <h1>Our Services</h1>
          <p>Making a difference in the lives of cancer patients and their families</p>
        </div>
      </section>
      <ServicesComponent />
    </div>
  );
};

export default Services;