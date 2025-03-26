// Banner.js
import React from 'react';
import styles from './Banner.module.css';
import { bannerData } from '../newdata/Newdata'; // Correct import with curly braces

const Banner = () => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerContent}>
        <h1 className={styles.bannerTitle}>{bannerData.title}</h1>
        <p className={styles.bannerDescription}>{bannerData.description}</p>
        <button className={styles.ctaButton}>{bannerData.buttonText}</button>
      </div>
    </div>
  );
};

export default Banner;
