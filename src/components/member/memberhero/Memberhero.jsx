import React from 'react';
import styles from './Memberhero.module.css'; // Optional if you want to keep other styles separate
import member1 from '../image/image2.webp';

const Memberhero = () => {
  return (
    <div
      className={styles.heroSection}
      style={{
        backgroundImage: `url(${member1})`,
        backgroundSize: 'cover', // Optional: Makes sure the image covers the entire section
        backgroundPosition: 'center', // Optional: Centers the image
      }}
    >
      <div className={styles.overlay}>
        <h1 className={styles.title}>Gratitude for the Pillars of <br/>Our Success</h1>
        <p className={styles.subtitle}>
          Honoring the Dedication and Support of Our Committee Members
        </p>
      </div>
    </div>
  );
};

export default Memberhero;
