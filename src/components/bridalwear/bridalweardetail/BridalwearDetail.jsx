import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './BridalwearDetail.module.css';

const BridalwearDetail = () => {
  const { id } = useParams();
  const [bridalwear, setBridalwear] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBridalwear = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/v1/bridalwear/${id}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch bridalwear: ${response.status}`);
        }
        const data = await response.json();
        setBridalwear(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching bridalwear:', error);
        setError(error.message || 'Failed to fetch vendor');
        setLoading(false);
      }
    };

    fetchBridalwear();
  }, [id]);

  if (loading) {
    return <div className={styles.loading}>Loading bridalwear details...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  if (!bridalwear) {
    return <div className={styles.notFound}>Bridalwear Vendor not found</div>;
  }

  return (
    <div className={styles.detailContainer}>
      <h1>{bridalwear.title}</h1>
      <div className={styles.info}>
        <div className={styles.mainDetails}>
          <p><strong>Name:</strong> {bridalwear.name}</p>
          <p><strong>Email:</strong> {bridalwear.email}</p>
          <p><strong>Phone:</strong> {bridalwear.phone}</p>
          <p><strong>Address:</strong> {bridalwear.address}</p>
          <p><strong>Rating:</strong> {bridalwear.ratings}/5</p>
          <p><strong>Status:</strong> {bridalwear.isVerified ? 'Verified' : 'Not Verified'}</p>
          <p><strong>Description:</strong> {bridalwear.description}</p>
        </div>
        <div className={styles.profileImageContainer}>
          {bridalwear.bridalimgUrl?.length > 0 ? (
            <img
              src={bridalwear.bridalimgUrl[0]}
              alt={`${bridalwear.title} profile`}
              className={styles.profileImage}
            />
          ) : (
            <p className={styles.noProfileImage}>No profile image available</p>
          )}
        </div>
      </div>
      <div className={styles.gallery}>
        <h3>Gallery</h3>
        {bridalwear.galleryImages?.length > 0 ? (
          <div className={styles.galleryGrid}>
            {bridalwear.galleryImages.map((galleryItem, index) => (
              <div key={index} className={styles.galleryItem}>
                <img
                  src={galleryItem.bridalpic}
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
        ) : (
          <p className={styles.noImages}>No gallery images available</p>
        )}
      </div>
    </div>
  );
};

export default BridalwearDetail;