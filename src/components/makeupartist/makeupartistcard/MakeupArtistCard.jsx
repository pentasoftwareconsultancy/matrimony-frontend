import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MakeupArtistCard.module.css';

const MakeupArtistCard = ({ makeupartist }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>{makeupartist.title}</h3>
        <p className={styles.name}>{makeupartist.name}</p>
        {makeupartist.isVerified && (
          <span className={styles.verified}>
            <svg className={styles.verifiedIcon} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            Verified
          </span>
        )}
      </div>
      <div className={styles.imageContainer}>
        {makeupartist.makeupimgUrl && makeupartist.makeupimgUrl[0] && (
          <img 
            src={makeupartist.makeupimgUrl[0]} 
            alt={makeupartist.title}
            className={styles.image}
          />
        )}
      </div>
      <div className={styles.body}>
        <p className={styles.description}>{makeupartist.description?.substring(0, 80)}...</p>
        <div className={styles.details}>
          <span className={styles.rating}>
            <svg className={styles.starIcon} viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
            </svg>
            {makeupartist.ratings}/5
          </span>
          <span className={styles.price}>Starting at ${makeupartist.price || 'TBD'}</span>
        </div>
        <Link to={`/makeupartist/${makeupartist._id}`} className={styles.detailsLink}>
          View Details
        </Link>
      </div>
    </div>
  );
};

export default MakeupArtistCard;