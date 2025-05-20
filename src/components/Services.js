import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: "Orphanage Home",
      description: "At Joy's Life Cancer Immunity Foundation, we believe that every child deserves a loving and nurturing environment, regardless of their circumstances. Our orphanage homes are dedicated to providing shelter, education, healthcare, and emotional support to orphaned and abandoned children.",
      icon: "🏠"
    },
    {
      title: "Annadhanam",
      description: "At Joy's Life Cancer Immunity Foundation, we believe that healing begins with care, compassion, and nourishment. Our Annadhanam Program is a humble yet powerful initiative dedicated to serving wholesome, nutritious meals to underprivileged cancer patients and their caregivers.",
      icon: "🍲"
    },
    {
      title: "Medicine Donation",
      description: "At Joy's Life Cancer Immunity Foundation, we believe that access to essential medicines should not be a privilege, but a right for every cancer patient. Through our Medicine Donation Program, we aim to support underprivileged individuals battling cancer by providing them with life-saving medications at no cost. Our initiative welcomes donations of unused, sealed, and unexpired cancer-related medications from individuals, pharmacies, hospitals, and pharmaceutical companies. Each donated medicine is carefully verified by our medical team to ensure safety and compliance before being distributed to those in need.",
      icon: "💊"
    },
    {
      title: "Child Education",
      description: "At Joy's Life Cancer Immunity Foundation, we recognize that cancer affects not just the body, but every part of a person's life — especially the lives of children in affected families. Our Child Education Support Program is dedicated to ensuring that the children of cancer patients do not have to sacrifice their education due to financial hardship. We provide school supplies, tuition assistance, scholarships, and emotional support to help children stay in school and pursue their dreams, even in the face of adversity. Our goal is to empower the next generation through education, helping them build a brighter, healthier future.",
      icon: "📚"
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 