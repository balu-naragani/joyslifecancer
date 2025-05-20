import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css';
import heroImage from '../assets/hero-image.png';
import BannerImage from '../assets/banner.jpeg'
import handsImage from '../assets/hands.jpg';
import donationImage from '../assets/donate-hands.jpg';
import orphanageImage from '../assets/orphanage.jpg';
import annadanamImage from '../assets/annadanam.jpg';
import childeducationImage from '../assets/child-education.jpg';
import medicineImage from '../assets/medicine-donation.jpg';
import '../styles/gallery.css';
import gallery1 from '../assets/gallery1.jpeg';
import gallery2 from '../assets/gallery2.jpeg';
import gallery3 from '../assets/gallery3.jpeg';
import gallery4 from '../assets/gallery4.jpeg';
import gallery5 from '../assets/gallery5.jpeg';
import gallery6 from '../assets/gallery6.jpeg';
import gallery7 from '../assets/gallery7.jpeg';
import gallery8 from '../assets/gallery8.jpeg';
import ServicesSlider from '../components/ServicesSlider';

const services = [
  {
    image: orphanageImage,
    title: 'Orphanage Homes',
    description: 'Our program is dedicated to supporting orphanage homes that lack sufficient funds to meet their needs.'
  },
  {
    image: annadanamImage,
    title: 'Annadanam',
    description: 'At the Asha Foundation, we are committed to ensuring that no one in our community goes to bed hungry.'
  },
  {
    image: medicineImage,
    title: 'Medicine Donation',
    description: 'Our program aims to bridge gaps in healthcare access by providing vital resources to those who need them.'
  },
  {
    image: childeducationImage,
    title: 'Child Education',
    description: 'Our child education program is dedicated to support orphaned and underprivilieged children by provided.'
  }
];

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="container hero-content">
          <div className="welcome-text">
            <h2>Welcome To</h2>
            <h2>Joy's Life Cancer Immunity Foundation</h2>
            <p>FOOD HEALTH AND EDUCATION IS EVERY BODY'S RIGHT</p>
            <Link to="/contact" className="btn btn-contact">
              Contact Us →
            </Link>
          </div>
        </div>
      </section>

      <section className="intro">
        <div className="container">
          <div className="intro-content">
            <div className="intro-text">
              <h2>Welcome To</h2>
              <h1>Joy's Life Cancer Immunity Foundation</h1>
              <p>
                At the Joy's Life Cancer Immunity Foundation, we believe that no one should endure the pain of hunger. Our
                mission is to provide nutritious food to those in need and combat food insecurity
                within our communities. Through our food donation program, we deliver essential
                nourishment, ensuring no one goes to bed hungry and working towards a hunger-free
                world.
              </p>
              <p>
                Our philosophy is straightforward: to offer easy access to essential food items that
                sustain and nourish individuals in their daily lives. Many people in India face food
                insecurity due to inconsistent income, which motivated us to take action. We began by
                providing meals to patients in various hospitals, initially serving 10 meals a day.
                Today, we provide nearly 100 meals daily and strive to increase this number to ensure
                everyone has access to food. This unwavering commitment is at the heart of our belief
                system.
              </p>
              <Link to="/about" className="btn btn-more">
                More About Us →
              </Link>
            </div>
            <div className="intro-image">
              <img src={handsImage} alt="Helping hands" />
            </div>
          </div>
        </div>
      </section>

      <ServicesSlider services={services} />

      <section className="concern-about">
        <div className="container">
          <div className="concern-content">
            <div className="concern-image">
              <img src={donationImage} alt="Hands joining for donation" />
            </div>
            <div className="concern-text">
              <h2>Concern About</h2>
              <div className="concern-tabs">
                <button className="tab-btn active">Our Mission</button>
                <button className="tab-btn">Our Vision</button>
                <button className="tab-btn">Our Goal</button>
              </div>
              <div className="tab-content">
                <p>
                  Our mission is to drive positive and lasting change in our community by alleviating
                  suffering, eradicating hunger, and improving access to healthcare and education.
                  Through our dedicated social welfare programs...
                </p>
                <Link to="/about" className="btn btn-mission">
                  Our Mission →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gallery-page">
        <section className="page-banner">
          <div className="container">
            <h1>Gallery</h1>
            <p>See the impact of our work in the community</p>
          </div>
          <div className="container">          
            <div className="gallery-grid">
              <div className="gallery-item">
                <img src={gallery1} alt="Food distribution program" />
                <div className="gallery-overlay">
                  {/* <div className="gallery-caption">Food distribution program</div> */}
                </div>
              </div>
              
              <div className="gallery-item">
                <img src={gallery2} alt="Medicine donation initiative" />
                <div className="gallery-overlay">
                  {/* <div className="gallery-caption">Medicine donation initiative</div> */}
                </div>
              </div>
              
              <div className="gallery-item">
                <img src={gallery3} alt="Community support activity" />
                <div className="gallery-overlay">
                  {/* <div className="gallery-caption">Community support activity</div> */}
                </div>
              </div>
              
              <div className="gallery-item">
                <img src={gallery4} alt="Food distribution to rural communities" />
                <div className="gallery-overlay">
                  {/* <div className="gallery-caption">Food distribution to rural communities</div> */}
                </div>
              </div>
              
              <div className="gallery-item">
                <img src={gallery5} alt="Asha Foundation banner" />
                <div className="gallery-overlay">
                  {/* <div className="gallery-caption">Asha Foundation banner</div> */}
                </div>
              </div>
              
              <div className="gallery-item">
                <img src={gallery6} alt="Group photo with beneficiaries" />
                <div className="gallery-overlay">
                  {/* <div className="gallery-caption">Group photo with beneficiaries</div> */}
                </div>
              </div>
              
              <div className="gallery-item">
                <img src={gallery7} alt="Rice and medicine distribution" />
                <div className="gallery-overlay">
                  {/* <div className="gallery-caption">Rice and medicine distribution</div> */}
                </div>
              </div>
              
              <div className="gallery-item">
                <img src={gallery8} alt="Foundation volunteer distributing supplies" />
                <div className="gallery-overlay">
                  {/* <div className="gallery-caption">Foundation volunteer distributing supplies</div> */}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
