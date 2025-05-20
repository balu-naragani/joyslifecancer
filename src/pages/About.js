import React from 'react';
import '../styles/about.css';
import aboutImage from '../assets/joyslife-logo.png';

const About = () => {
  return (
    <div className="about-page">
      <section className="page-banner">
        <div className="container">
          <h1>About Us</h1>
          <p>Learn more about our mission and vision</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-grid">
            <div className="about-image">
              <img src={aboutImage} alt="Joyslife Foundation volunteers" />
            </div>
            <div className="about-text">
              <h2>Our Story</h2>
              <p>
                Joy's Life Cancer Immunity Foundation was established with a clear vision to fight hunger and provide
                nourishment to those who need it most. Our journey began when we witnessed the
                struggles of hospital patients who couldn't afford proper meals during their
                treatment.
              </p>
              <p>
                What started as a small initiative providing 10 meals a day has now grown into a
                foundation that serves nearly 100 meals daily. Our dedicated team works tirelessly to
                ensure that nutritious food reaches everyone in need, regardless of their background
                or circumstances.
              </p>
              <h2>Our Mission</h2>
              <p>
                Our mission is to combat food insecurity and hunger by providing nutritious meals to
                underprivileged individuals and communities. We believe that food, health, and
                education are fundamental rights that everyone should have access to.
              </p>
              <h2>Our Vision</h2>
              <p>
                We envision a world where no one goes to bed hungry, where everyone has access to
                nutritious food, quality healthcare, and education. We strive to create sustainable
                solutions that address the root causes of hunger and poverty.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
