import React, { useState, useEffect } from "react";
import styles from "./Newshero.module.css"; // Import the CSS module
import { heroNewsData, newsBodyData } from "../newdata/Newdata"; // Adjust the path to match your folder structure

const Newshero = () => {
  const { images, title, subtitle } = heroNewsData;
  const { heading, content } = newsBodyData;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup interval
  }, [images.length]);

  const nextIndex = (currentIndex + 1) % images.length; // Calculate the next image index

  return (
    <div className={styles.pageContainer}>
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{title}</h1>
          <p className={styles.heroSubtitle}>{subtitle}</p>
        </div>
        <div className={styles.slider}>
          <div className={styles.imageWrapper}>
            <img
              src={images[currentIndex]}
              alt={`Current image ${currentIndex + 1}`}
              className={`${styles.sliderImage} ${styles.currentImage}`}
            />
            <img
              src={images[nextIndex]}
              alt={`Upcoming image ${nextIndex + 1}`}
              className={`${styles.sliderImage} ${styles.upcomingImage}`}
            />
          </div>
        </div>
      </section>
      {/* <section className={styles.newsBody}>
        <h2 className={styles.newsHeading}>{heading}</h2>
        <p className={styles.newsContent}>{content}</p>
      </section> */}
    </div>
  );
};

export default Newshero;
