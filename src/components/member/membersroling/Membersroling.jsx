import React from 'react';
import styles from './membersroling.module.css'; // Import the CSS module

// Import partner data
import { row1 } from "../memberdata/Memberdata"; // Import the data from the partnersData file

function Membersroling() {
  return (
    <div className={styles.appContainer}>
      <div className={styles.wrapper}>
        <h2>Our Partners</h2>
        
        {/* First Row */}
        <div className={styles.marquee}>
          <div className={styles.marqueeGroup}>
            {row1.map((el) => (
              <div key={el.id} className={styles.imageGroup}>
                <img src={el.image} className={styles.image} alt={`Partner ${el.id}`} />
              </div>
            ))}
          </div>
          <div className={styles.marqueeGroup}>
            {row1.map((el) => (
              <div key={el.id} className={styles.imageGroup}>
                <img src={el.image} className={styles.image} alt={`Partner ${el.id}`} />
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </div>  
  );
}

export default Membersroling;
