import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './VendorLightingAndSoundDetail.module.css';

const VendorLightingAndSoundDetail = () => {
  const { id } = useParams();
  const [lightingsound, setLightingAndSound] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLightingAndSound = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/v1/lighting/${id}`);
        const data = await response.json();
        setLightingAndSound(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching lighting and sound:', error);
        setLoading(false);
      }
    };

    fetchLightingAndSound();
  }, [id]);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (!lightingsound) {
    return <div className={styles.notFound}>Lighting and Sound Vendor not found</div>;
  }

  return (
    <div className={styles.detailContainer}>
      <h1>{lightingsound.title}</h1>
      <div className={styles.info}>
        <div className={styles.mainDetails}>
          <p><strong>Name:</strong> {lightingsound.name}</p>
          <p><strong>Email:</strong> {lightingsound.email}</p>
          <p><strong>Phone:</strong> {lightingsound.phone}</p>
          <p><strong>Address:</strong> {lightingsound.address}</p>
          {/* <p><strong>Rating:</strong> {lightingsound.ratings}/5</p>
          <p><strong>Status:</strong> {lightingsound.isVerified ? 'Verified' : 'Not Verified'}</p> */}
          <p><strong>Description:</strong> {lightingsound.description}</p>
        </div>
        <div className={styles.profileImages}>
          {lightingsound.lightingimgUrl?.map((imgUrl, index) => (
            <img 
              key={index} 
              src={imgUrl} 
              alt={`${lightingsound.title} ${index + 1}`}
              className={styles.profileImage}
            />
          ))}
        </div>
      </div>
      <div className={styles.gallery}>
        <h3>Gallery</h3>
        <div className={styles.galleryGrid}>
          {lightingsound.galleryImages?.map((galleryItem, index) => (
            <div key={index} className={styles.galleryItem}>
              <img 
                src={galleryItem.lightingpic} 
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

export default VendorLightingAndSoundDetail;