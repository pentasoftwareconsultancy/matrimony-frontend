
import React from "react";
import styles from "./Media.module.css";
import image1 from "../image/image6.jpg";
import image2 from "../image/image4.jpg";
import image3 from "../image/image7.jpg";
import image4 from "../image/image8.jpg";
import image5 from "../image/image11.jpg";
import image6 from "../image/image10.jpg";

const Media = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>Our Community Gallery</h2>
        <p>Celebrating love stories and happy unions</p>
        <div className={styles.divider}></div>
      </div>
      
      <div className={styles.content}>
        <div className={styles.textSection}>
          <div className={styles.textContent}>
            <p>
              <span className={styles.quoteMark}>“</span>
              Finding your ideal life partner has never been easier! Akhil Bhartiya Kunbi Samaj Bahuuddeshiya Mandal is dedicated to helping you connect with like-minded individuals who share your values, beliefs, and aspirations.
            </p>
            <p>
              With a trusted and secure platform, verified profiles, and advanced matchmaking features, we ensure a seamless and meaningful experience in your search for a life partner.
            </p>
            <p>
              Our community is built on authenticity, tradition, and compatibility, making it the perfect place to form genuine connections. Join today and begin your journey toward a beautiful and lasting relationship!
            </p>
            <p>With verified profiles, secure matchmaking, and culturally aligned connections, we make your journey to a meaningful relationship smooth and authentic. Join today and take the first step toward a lifelong bond.</p>
            <button className={styles.button}>Join Our Community</button>
          </div>
        </div>
        
        <div className={styles.gallerySection}>
          <div className={styles.imageGrid}>
            <div className={`${styles.imageWrapper} ${styles.featured}`}>
              <img src={image1} alt="Happy Couple" className={styles.image} />
              <div className={styles.caption}>Newly Married Couple</div>
            </div>
            <div className={styles.imageWrapper}>
              <img src={image2} alt="Wedding Ceremony" className={styles.image} />
              <div className={styles.caption}>Traditional Ceremony</div>
            </div>
            <div className={styles.imageWrapper}>
              <img src={image3} alt="Bride" className={styles.image} />
              <div className={styles.caption}>Beautiful Bride</div>
            </div>
            <div className={styles.imageWrapper}>
              <img src={image4} alt="Couple" className={styles.image} />
              <div className={styles.caption}>Happy Together</div>
            </div>
            <div className={styles.imageWrapper}>
              <img src={image6} alt="Couple" className={styles.image} />
              <div className={styles.caption}>Wedding Celebration</div>
            </div>
            <div className={styles.imageWrapper}>
              <img src={image5} alt="Couple" className={styles.image} />
              <div className={styles.caption}>Joyful Union</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;