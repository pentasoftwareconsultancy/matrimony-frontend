import React from 'react';
import { Link } from 'react-router-dom';
import styles from './BridalwearCard.module.css';

const BridalwearCard = ({ bridalwear }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>{bridalwear.title}</h3>
        <p>{bridalwear.name}</p>
      </div>
      <div className={styles.imageContainer}>
        {bridalwear.bridalimgUrl && bridalwear.bridalimgUrl[0] && (
          <img 
            src={bridalwear.bridalimgUrl[0]} 
            alt={bridalwear.title}
            className={styles.image}
          />
        )}
      </div>
      <div className={styles.body}>
        <p>{bridalwear.description?.substring(0, 100)}...</p>
        <div className={styles.details}>
          <span>Rating: {bridalwear.ratings}/5</span>
          <span>{bridalwear.isVerified ? 'Verified' : 'Not Verified'}</span>
        </div>
      </div>
      <Link to={`/bridalwear/${bridalwear._id}`} className={styles.detailsLink}>
        View Details
      </Link>
    </div>
  );
};

export default BridalwearCard;