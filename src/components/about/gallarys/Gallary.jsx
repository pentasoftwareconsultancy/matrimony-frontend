


import React, { useEffect, useRef, useState } from 'react';
import { FaChevronLeft, FaChevronRight, FaTimes } from 'react-icons/fa';
import styles from './Gallary.module.css';

// Import images directly
import image1 from '../../about/image/image2.jpg';
import image2 from '../../about/image/image6.jpg';
import image3 from '../../about/image/image7.jpg';
import image4 from '../../about/image/image11.jpg';
import image5 from '../../about/image/image12.jpg';
import image6 from '../../about/image/image13.jpg';
import image7 from '../../about/image/image14.jpg';
import image8 from '../../about/image/image15.jpg';
import image9 from '../../about/image/image16.jpg';
import image10 from '../../about/image/image17.jpg';
import image11 from '../../about/image/image18.jpg';
import image12 from '../../about/image/image19.jpg';

const Gallery = () => {
  const refs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12];
  
  // Touch handling for mobile swipe
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
    );

    refs.current.forEach((ref) => ref && observer.observe(ref));
    
    return () => {
      refs.current.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, []);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
    };

    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  // Touch handlers for swipe navigation
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      // Swipe left
      goToNext();
    } else if (touchStart - touchEnd < -100) {
      // Swipe right
      goToPrev();
    }
  };

  return (
    <section className={styles.gallerySection} id="gallery">
      <h2 className={styles.sectionTitle}>Our Gallery</h2>
      <div className={styles.container}>
        {images.map((img, index) => (
          <div
            key={index}
            className={styles.card}
            ref={(el) => (refs.current[index] = el)}
            style={{ '--delay': `${index * 0.1}s` }}
          >
            <div 
              className={styles.imageWrapper}
              onClick={() => openModal(index)}
            >
              <img 
                src={img} 
                alt={`Gallery ${index + 1}`} 
                loading="lazy"
              />
              <div className={styles.overlay}>
                <span>View</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal with Carousel */}
      {isModalOpen && (
        <div className={styles.modal}>
          <button 
            className={styles.closeButton}
            onClick={closeModal}
            aria-label="Close modal"
          >
            <FaTimes />
          </button>
          
          <div className={styles.modalContent}>
            <button 
              className={styles.navButton} 
              onClick={goToPrev}
              aria-label="Previous image"
            >
              <FaChevronLeft />
            </button>
            
            <div 
              className={styles.carouselContainer}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <img 
                src={images[currentIndex]} 
                alt={`Gallery image ${currentIndex + 1}`} 
                className={styles.modalImage}
              />
            </div>
            
            <button 
              className={styles.navButton} 
              onClick={goToNext}
              aria-label="Next image"
            >
              <FaChevronRight />
            </button>
          </div>
          
          <div className={styles.thumbnails}>
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className={`${styles.thumbnail} ${index === currentIndex ? styles.activeThumbnail : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;