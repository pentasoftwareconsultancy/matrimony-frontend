import React, { useEffect, useRef, useState } from 'react';
import styles from './Gallary.module.css';

import image1 from '../../about/image/image2.jpg';
import image2 from '../../about/image/image6.jpg';
import image3 from '../../about/image/image7.jpg';
import image4 from '../../about/image/image11.jpg';
import image5 from '../../about/image/image12.jpg';
import image6 from '../../about/image/image13.jpg';

const Gallary = () => {
  const images = [image1, image2, image3, image4, image5, image6];
  const [visibleItems, setVisibleItems] = useState([]);
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((ref) => ref && observer.observe(ref));

    return () => {
      refs.current.forEach((ref) => ref && observer.unobserve(ref));
    };
  }, []);

  return (
    <div className={styles.container}>
      {images.map((img, index) => (
        <div
          key={index}
          className={`${styles.card} ${visibleItems.includes(index) ? styles.fadeInUp : ''}`}
          style={{ animationDelay: `${index * 0.15}s` }}
          ref={(el) => (refs.current[index] = el)}
        >
          <img src={img} alt={`Gallery ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default Gallary;
