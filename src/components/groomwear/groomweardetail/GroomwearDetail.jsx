import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './GroomwearDetail.module.css';

const GroomwearDetail = () => {
  const { id } = useParams();
  const [groomwear, setGroomwear] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGroomwear = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/v1/groomwear/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setGroomwear(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching groomwear:', error);
        setError(error.message || 'Failed to fetch vendor');
        setLoading(false);
      }
    };

    fetchGroomwear();
  }, [id]);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  if (!groomwear) {
    return <div className={styles.notFound}>Groomwear Vendor not found</div>;
  }

  return (
    <div className={styles.detailContainer}>
      <h1>{groomwear.title}</h1>
      <div className={styles.info}>
        <div className={styles.mainDetails}>
          <p><strong>Name:</strong> {groomwear.name}</p>
          <p><strong>Email:</strong> {groomwear.email}</p>
          <p><strong>Phone:</strong> {groomwear.phone}</p>
          <p><strong>Address:</strong> {groomwear.address}</p>
          <p><strong>Rating:</strong> {groomwear.ratings}/5</p>
          <p><strong>Status:</strong> {groomwear.isVerified ? 'Verified' : 'Not Verified'}</p>
          <p><strong>Description:</strong> {groomwear.description}</p>
        </div>
        <div className={styles.profileImages}>
          {groomwear.groomimgUrl?.map((imgUrl, index) => (
            <img 
              key={index} 
              src={imgUrl} 
              alt={`${groomwear.title} ${index + 1}`}
              className={styles.profileImage}
            />
          ))}
        </div>
      </div>
      <div className={styles.gallery}>
        <h3>Gallery</h3>
        <div className={styles.galleryGrid}>
          {groomwear.galleryImages?.map((galleryItem, index) => (
            <div key={index} className={styles.galleryItem}>
              <img 
                src={galleryItem.groompic} 
                alt={galleryItem.title}
                className={styles.galleryImage}
              />
              <h4>{galleryItem.title}</h4>
              <p>{galleryItem.description}</p>
              {galleryItem.feedback && (
                <p><strong>Feedback:</strong> {galleryItem.feedback}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GroomwearDetail;