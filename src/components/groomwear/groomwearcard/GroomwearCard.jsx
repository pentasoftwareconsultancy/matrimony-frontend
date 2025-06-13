import React from 'react';
import { Link } from 'react-router-dom';
import styles from './GroomwearCard.module.css';

const GroomwearCard = ({ groomwear }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>{groomwear.title}</h3>
        <p>{groomwear.name}</p>
      </div>
      <div className={styles.imageContainer}>
        {groomwear.groomimgUrl && groomwear.groomimgUrl[0] && (
          <img 
            src={groomwear.groomimgUrl[0]} 
            alt={groomwear.title}
            className={styles.image}
          />
        )}
      </div>
      <div className={styles.body}>
        <p>{groomwear.description?.substring(0, 100)}...</p>
        <div className={styles.details}>
          <span>Rating: {groomwear.ratings}/5</span>
          <span>{groomwear.isVerified ? '✔ Verified' : '❌ Not Verified'}</span>
        </div>
      </div>
      <Link to={`/groomwear/${groomwear._id}`} className={styles.detailsLink}>
        View Details
      </Link>
    </div>
  );
};

export default GroomwearCard;
