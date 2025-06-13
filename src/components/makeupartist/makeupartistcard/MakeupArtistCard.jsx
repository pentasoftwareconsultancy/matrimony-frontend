import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MakeupArtistCard.module.css';

const MakeupArtistCard = ({ makeupartist }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>{makeupartist.title}</h3>
        <p>{makeupartist.name}</p>
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
        <p>{makeupartist.description?.substring(0, 100)}...</p>
        <div className={styles.details}>
          <span>Rating: {makeupartist.ratings}/5</span>
          <span>{makeupartist.isVerified ? 'Verified' : 'Not Verified'}</span>
        </div>
      </div>
      <Link to={`/makeupartist/${makeupartist._id}`} className={styles.detailsLink}>
        View Details
      </Link>
    </div>
  );
};

export default MakeupArtistCard;