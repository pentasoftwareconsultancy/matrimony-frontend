import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MakeupHairCard.module.css';

const MakeupHairCard = ({ makeuphair }) => {
  const handleFavoriteClick = () => {
    // Add logic to toggle favorite status (e.g., API call or state update)
    console.log(`Favorited ${makeuphair.title}`);
  };

  return (
    <div className={styles.card}>
         <div className={styles.imageContainer}>
        {makeuphair.makeupimgUrl && makeuphair.makeupimgUrl[0] && (
          <img
            src={makeuphair.makeupimgUrl[0]}
            alt={makeuphair.title}
            className={styles.image}
          />
        )}
        {/* <button
          className={styles.favoriteButton}
          onClick={handleFavoriteClick}
          aria-label={`Favorite ${makeuphair.title}`}
        /> */}
      </div>
      <div className={styles.header}>
        <h3>{makeuphair.title}</h3>
        <p>{makeuphair.name}</p>
      </div>
      {/* <div className={styles.imageContainer}>
        {makeuphair.makeupimgUrl && makeuphair.makeupimgUrl[0] && (
          <img
            src={makeuphair.makeupimgUrl[0]}
            alt={makeuphair.title}
            className={styles.image}
          />
        )}
        <button
          className={styles.favoriteButton}
          onClick={handleFavoriteClick}
          aria-label={`Favorite ${makeuphair.title}`}
        />
      </div> */}
      <div className={styles.body}>
        <p>{makeuphair.description?.substring(0, 100)}...</p>
        <div className={styles.details}>
          <span data-tooltip={`Rated ${makeuphair.ratings} out of 5`}>Rating: {makeuphair.ratings}/5</span>
          <span data-tooltip={makeuphair.isVerified ? 'Verified Professional' : 'Not Verified'}>
            {makeuphair.isVerified ? 'Verified' : 'Not Verified'}
          </span>
        </div>
      </div>
      <Link
        to={`/makeuphair/${makeuphair._id}`}
        className={styles.detailsLink}
        aria-label={`View details for ${makeuphair.title}`}
      >
        View Details
      </Link>
    </div>
  );
};

export default MakeupHairCard;