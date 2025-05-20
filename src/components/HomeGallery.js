import React from 'react';
import { Link } from 'react-router-dom';
import './HomeGallery.css';

const HomeGallery = () => {
  const galleryImages = [
    {
      id: 1,
      src: 'https://source.unsplash.com/800x600/?medical,camp',
      title: 'Medical Camp'
    },
    {
      id: 2,
      src: 'https://source.unsplash.com/800x600/?hospital,care',
      title: 'Patient Care'
    },
    {
      id: 3,
      src: 'https://source.unsplash.com/800x600/?medicine,health',
      title: 'Medicine Distribution'
    }
  ];

  return (
    <section className="home-gallery">
      <div className="container">
        <div className="gallery-grid">
          {galleryImages.map((image) => (
            <div className="gallery-item" key={image.id}>
              <div className="image-container">
                <img 
                  src={image.src} 
                  alt={image.title}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="view-more">
          <Link to="/gallery" className="btn btn-primary">
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeGallery; 