import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './PhotographyCard.module.css';

const PhotographyCard = ({ vendor }) => {
  const navigate = useNavigate();
  const imageUrl = vendor.profileimgUrl?.[0] || 'https://via.placeholder.com/300x200';

  const handleClick = () => {
    navigate(`/vendor/${vendor._id}`);
  };

  return (
    <div onClick={handleClick} className={styles.card}>
      <img src={imageUrl} alt={vendor.title} className={styles.image} />
      <div className={styles.content}>
        <h2 className={styles.title}>{vendor.title}</h2>
        <p className={styles.name}>{vendor.name}</p>
      </div>
    </div>
  );
};

export default PhotographyCard;