import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './MakeupArtistDetail.module.css';

const MakeupArtistDetail = () => {
  const { id } = useParams();
  const [makeupartist, setMakeupArtist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMakeupArtist = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/v1/makeupartist/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setMakeupArtist(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching makeup artist:', error);
        setError(error.message || 'Failed to fetch makeup artist');
        setLoading(false);
      }
    };

    fetchMakeupArtist();
  }, [id]);

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.error}>
        <svg className={styles.errorIcon} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
        </svg>
        Error: {error}
      </div>
    );
  }

  if (!makeupartist) {
    return (
      <div className={styles.notFound}>
        <svg className={styles.notFoundIcon} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm4-8c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z"/>
        </svg>
        Makeup Artist not found
      </div>
    );
  }

  return (
    <div className={styles.detailContainer}>
      <h1>{makeupartist.title}</h1>
      <div className={styles.info}>
        <div className={styles.mainDetails}>
          <p><strong>Name:</strong> {makeupartist.name}</p>
          <p><strong>Email:</strong> {makeupartist.email}</p>
          <p><strong>Phone:</strong> {makeupartist.phone}</p>
          <p><strong>Address:</strong> {makeupartist.address}</p>
          <p>
            <strong>Rating:</strong> 
            <span className={styles.rating}>
              <svg className={styles.starIcon} viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
              </svg>
              {makeupartist.ratings}/5
            </span>
          </p>
          <p>
            <strong>Status:</strong> 
            <span className={styles.status}>
              {makeupartist.isVerified ? (
                <>
                  <svg className={styles.verifiedIcon} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  Verified
                </>
              ) : (
                'Not Verified'
              )}
            </span>
          </p>
          <p><strong>Description:</strong> {makeupartist.description}</p>
        </div>
        <div className={styles.profileImageContainer}>
          {makeupartist.makeupimgUrl?.[0] && (
            <img 
              src={makeupartist.makeupimgUrl[0]} 
              alt={`${makeupartist.title} profile`}
              className={styles.profileImage}
            />
          )}
        </div>
      </div>
      <div className={styles.gallery}>
        <h3>Gallery</h3>
        <div className={styles.galleryGrid}>
          {makeupartist.galleryImages?.map((galleryItem, index) => (
            <div key={index} className={styles.galleryItem}>
              <img 
                src={galleryItem.makeuppic} 
                alt={galleryItem.title}
                className={styles.galleryImage}
              />
              {/* <div className={styles.galleryContent}>
                <h4>{galleryItem.title}</h4>
                <p>{galleryItem.description}</p>
                {galleryItem.feedback && (
                  <p><strong>Feedback:</strong> {galleryItem.feedback}</p>
                )}
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MakeupArtistDetail;