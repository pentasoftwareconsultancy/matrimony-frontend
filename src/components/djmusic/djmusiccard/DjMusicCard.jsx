import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DjMusicCard.module.css';

const DjMusicCard = ({ djmusic }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <h3>{djmusic.title}</h3>
        <p>{djmusic.name}</p>
      </div>
      <div className={styles.imageContainer}>
        {djmusic.djmusicimgUrl && djmusic.djmusicimgUrl[0] && (
          <img 
            src={djmusic.djmusicimgUrl[0]} 
            alt={djmusic.title}
            className={styles.image}
          />
        )}
      </div>
      <div className={styles.body}>
        <p>{djmusic.description?.substring(0, 100)}...</p>
        <div className={styles.details}>
          <span>Rating: {djmusic.ratings}/5</span>
          <span>{djmusic.isVerified ? 'Verified' : 'Not Verified'}</span>
        </div>
      </div>
      <Link to={`/djmusic/${djmusic._id}`} className={styles.detailsLink}>
        View Details
      </Link>
    </div>
  );
};

export default DjMusicCard;