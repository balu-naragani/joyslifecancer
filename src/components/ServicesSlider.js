import React, { useRef, useState, useEffect } from 'react';
import '../styles/home.css';

const ServicesSlider = ({ services }) => {
  const sliderRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const scroll = (direction) => {
    const slider = sliderRef.current;
    const cardWidth = 320; // Width of each service card
    const gap = 30; // Gap between cards
    const scrollAmount = (cardWidth + gap) * (direction === 'left' ? -1 : 1);
    
    slider.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });

    setCurrentIndex(prev => {
      const newIndex = direction === 'left' ? prev - 1 : prev + 1;
      return Math.max(0, Math.min(newIndex, services.length - 1));
    });
  };

  // Auto-scroll functionality
  useEffect(() => {
    const autoScroll = setInterval(() => {
      if (!isDragging) {
        if (currentIndex >= services.length - 1) {
          setCurrentIndex(0);
          sliderRef.current.scrollTo({
            left: 0,
            behavior: 'smooth'
          });
        } else {
          scroll('right');
        }
      }
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(autoScroll);
  }, [currentIndex, isDragging]);

  useEffect(() => {
    const handleResize = () => {
      setShowControls(window.innerWidth > 992);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="our-services">
      <h2 className="section-title">Our Services</h2>
      <div className="services-slider"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <div className="service-cards">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-image">
                <img src={service.image} alt={service.title} />
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showControls && (
        <div className="scroll-controls">
          <button 
            className="scroll-button"
            onClick={() => scroll('left')}
            aria-label="Scroll left"
            disabled={currentIndex === 0}
          >
            ←
          </button>
          <button 
            className="scroll-button"
            onClick={() => scroll('right')}
            aria-label="Scroll right"
            disabled={currentIndex === services.length - 1}
          >
            →
          </button>
        </div>
      )}
    </div>
  );
};

export default ServicesSlider; 