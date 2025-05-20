import React from 'react';
import '../styles/gallery.css';
import gallery1 from '../assets/gallery1.jpeg';
import gallery2 from '../assets/gallery2.jpeg';
import gallery3 from '../assets/gallery3.jpeg';
import gallery4 from '../assets/gallery4.jpeg';
import gallery5 from '../assets/gallery5.jpeg';
import gallery6 from '../assets/gallery6.jpeg';
import gallery7 from '../assets/gallery7.jpeg';
import gallery8 from '../assets/gallery8.jpeg';

const Gallery = () => {
  return (
    <div className="gallery-page">
      <section className="page-banner">
        <div className="container">
          <h1>Gallery</h1>
        </div>
      </section>
      <section className="gallery-content">
        <div className="container">
          <h2>Our Gallery</h2>
          <p>Here you would display images from Joy's Life Cancer Immunity Foundation's activities...</p>
        </div>
      </section>
      <div className="gallery-page">
        <section className="page-banner">
         
          <div className="container">          
            <div className="gallery-grid">
              <div className="gallery-item">
                <img src={gallery1} alt="Food distribution program" />
              </div>
              
              <div className="gallery-item">
                <img src={gallery2} alt="Medicine donation initiative" />
              </div>
              
              <div className="gallery-item">
                <img src={gallery3} alt="Community support activity" />
              </div>
              
              <div className="gallery-item">
                <img src={gallery4} alt="Food distribution to rural communities" />
              </div>
              
              <div className="gallery-item">
                <img src={gallery5} alt="Asha Foundation banner" />
              </div>
              
              <div className="gallery-item">
                <img src={gallery6} alt="Group photo with beneficiaries" />
              </div>
              
              <div className="gallery-item">
                <img src={gallery7} alt="Rice and medicine distribution" />
              </div>
              
              <div className="gallery-item">
                <img src={gallery8} alt="Foundation volunteer distributing supplies" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Gallery;