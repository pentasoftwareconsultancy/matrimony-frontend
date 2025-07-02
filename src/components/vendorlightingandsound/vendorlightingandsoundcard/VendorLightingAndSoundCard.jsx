import React from 'react';
import { Link } from 'react-router-dom';
import styles from './VendorLightingAndSoundCard.module.css';

const VendorLightingAndSoundCard = ({ lightingsound }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>{lightingsound.title}</h3>
        <p>{lightingsound.name}</p>
      </div>
      <div className={styles.imageContainer}>
        {lightingsound.lightingimgUrl && lightingsound.lightingimgUrl[0] && (
          <img 
            src={lightingsound.lightingimgUrl[0]} 
            alt={lightingsound.title}
            className={styles.image}
          />
        )}
      </div>
      <div className={styles.body}>
        <p>{lightingsound.description?.substring(0, 100)}...</p>
        <div className={styles.details}>
          {/* <span>Rating: {lightingsound.ratings}/5</span>
          <span>{lightingsound.isVerified ? 'Verified' : 'Not Verified'}</span> */}
        </div>
      </div>
      <Link to={`/lightingsound/${lightingsound._id}`} className={styles.detailsLink}>
        View Details
      </Link>
    </div>
  );
};

export default VendorLightingAndSoundCard;