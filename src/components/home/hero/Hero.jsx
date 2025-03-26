import React, { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import image1 from "../hero/images/image13.webp"
import image2 from "../hero/images/image12.webp"
import image3 from "../hero/images/image13.webp"

import image5 from "../hero/images/slide2.jpg"
import image6 from "../hero/images/image12.webp"

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    
      {
        image: image1,
        title: "Fuel Your Passion for Change with Shadi Bes - Website of Impact",
        subtitle: "Together, let's create a world of boundless opportunities on this journey with Shadi Bes.",
      },
      {
        image: image2,
        title: "Ignite Hope and Passion with Shadi Bes - Join the Movement",
        subtitle: "Your commitment sparks lasting transformation. Be part of the change with Shadi Bes.",
      },
      {
        image: image3,
        title: "Empower Communities with Passion and Purpose - Shadi Bes Website",
        subtitle: "Building a brighter future, together. It starts here with Shadi Bes.",
      },
      {
        image: image6,
        title: "Transform Education with Passion - Shadi Bes at Your Service",
        subtitle: "Unlocking potential, one mind at a time with Shadi Bes. Let’s make it happen.",
      },
      {
        image: image5,
        title: "Spread Kindness and Passion - The Shadi Bes Way",
        subtitle: "Every act of kindness ripples across the world. Join us on this website to create impact with Shadi Bes.",
      },
    ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className={styles.hero}>
      <div
        className={styles.slides}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className={styles.slide} key={index}>
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className={styles.image}
            />
           <div className={styles.textOverlay}>
  <h1>{slide.title.split(' - ').map((part, index) => (
    <>
      {index > 0 && <br />}
      {part}
    </>
  ))}</h1>
  <p>{slide.subtitle}</p>
</div>
          </div>
        ))}
      </div>
      <div className={styles.dots}>
        {slides.map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${
              currentIndex === index ? styles.active : ""
            }`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
