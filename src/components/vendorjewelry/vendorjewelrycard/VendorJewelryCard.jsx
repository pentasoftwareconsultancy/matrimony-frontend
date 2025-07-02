import React from 'react';
import { Link } from 'react-router-dom';
import styles from './VendorJewelryCard.module.css';

const VendorJewelryCard = ({ jewelry }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>{jewelry.title}</h3>
        <p>{jewelry.name}</p>
      </div>
      <div className={styles.imageContainer}>
        {jewelry.jewelryimgUrl && jewelry.jewelryimgUrl[0] && (
          <img 
            src={jewelry.jewelryimgUrl[0]} 
            alt={jewelry.title}
            className={styles.image}
          />
        )}
      </div>
      <div className={styles.body}>
        <p>{jewelry.description?.substring(0, 100)}...</p>
        {/* <div className={styles.details}>
          <span>Rating: {jewelry.ratings}/5</span>
          <span>{jewelry.isVerified ? 'Verified' : 'Not Verified'}</span>
        </div> */}
      </div>
      <Link to={`/jewelry/${jewelry._id}`} className={styles.detailsLink}>
        View Details
      </Link>
    </div>
  );
};

export default VendorJewelryCard;