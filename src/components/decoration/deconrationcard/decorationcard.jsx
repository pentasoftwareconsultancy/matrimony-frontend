import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DecorationCard.module.css';

const DecorationCard = ({ decoration }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>{decoration.title}</h3>
        <p>{decoration.name}</p>
      </div>
      <div className={styles.imageContainer}>
        {decoration.decorationimgUrl && decoration.decorationimgUrl[0] && (
          <img 
            src={decoration.decorationimgUrl[0]} 
            alt={decoration.title}
            className={styles.image}
          />
        )}
      </div>
      <div className={styles.body}>
        <p>{decoration.description?.substring(0, 100)}...</p>
        <div className={styles.details}>
          <span>Rating: {decoration.ratings}/5</span>
          <span>{decoration.isVerified ? 'Verified' : 'Not Verified'}</span>
        </div>
      </div>
      <Link to={`/decorations/${decoration._id}`} className={styles.detailsLink}>
        View Details
      </Link>
    </div>
  );
};

export default DecorationCard;