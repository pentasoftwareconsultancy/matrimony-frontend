import React from "react";
import styles from "./Media.module.css";
import image1 from "../image/image6.jpg";
import image2 from "../image/image4.jpg";
import image3 from "../image/image7.jpg";
import image4 from "../image/image8.jpg";
import image5 from "../image/image11.jpg"
import image6 from "../image/image10.jpg";

const Media = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <div className={styles.section}>
          "Finding your ideal life partner has never been easier! Akhil Bhartiya
          Kunbi Samaj Bahuuddeshiya Mandal is dedicated to helping you connect
          with like-minded individuals who share your values, beliefs, and
          aspirations. With a trusted and secure platform, verified profiles,
          and advanced matchmaking features, we ensure a seamless and meaningful
          experience in your search for a life partner.
          <br />
          <br />
          Our community is built on authenticity, tradition, and compatibility,
          making it the perfect place to form genuine connections. Whether
          you're looking for companionship, love, or a lifelong commitment, we
          provide the right tools to help you take the next step toward a happy
          and fulfilling future. Join today and begin your journey toward a
          beautiful and lasting relationship!"
        </div>
      </div>

      <div className={styles.imageGrid}>
        <div className={styles.imageWrapper}>
          <img src={image1} alt="Couple 1" className={styles.image} />
        </div>
        <div className={styles.imageWrapper}>
          <img src={image2} alt="Couple 2" className={styles.image} />
        </div>
        <div className={styles.imageWrapper}>
          <img src={image3} alt="Bride" className={styles.image} />
        </div>
        <div className={styles.imageWrapper}>
          <img src={image4} alt="Couple 3" className={styles.image} />
        </div>
        <div className={styles.imageWrapper}>
          <img src={image6} alt="Couple 4" className={styles.image} />
        </div>
         <div className={styles.imageWrapper}>
          <img src={image5} alt="Couple 4" className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default Media;
