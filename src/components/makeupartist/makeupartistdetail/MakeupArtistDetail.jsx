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
        setError(error.message || 'Failed to fetch vendor');
        setLoading(false);
      }
    };

    fetchMakeupArtist();
  }, [id]);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  if (!makeupartist) {
    return <div className={styles.notFound}>Makeup Artist not found</div>;
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
          <p><strong>Rating:</strong> {makeupartist.ratings}/5</p>
          <p><strong>Status:</strong> {makeupartist.isVerified ? 'Verified' : 'Not Verified'}</p>
          <p><strong>Description:</strong> {makeupartist.description}</p>
        </div>
        
        <div className={styles.gallery}>
          <h3>Profile Images</h3>
          <div className={styles.profileImages}>
            {makeupartist.makeupimgUrl?.map((imgUrl, index) => (
              <img 
                key={index} 
                src={imgUrl} 
                alt={`${makeupartist.title} ${index + 1}`}
                className={styles.profileImage}
              />
            ))}
          </div>

          <h3>Gallery</h3>
          {makeupartist.galleryImages?.map((galleryItem, index) => (
            <div key={index} className={styles.galleryItem}>
              <img 
                src={galleryItem.makeuppic} 
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

export default MakeupArtistDetail;