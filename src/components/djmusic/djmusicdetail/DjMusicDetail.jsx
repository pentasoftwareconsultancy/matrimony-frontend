import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './DjMusicDetail.module.css';

const DjMusicDetail = () => {
  const { id } = useParams();
  const [djmusic, setDjMusic] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDjMusic = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/v1/djmusic/${id}`);
        const data = await response.json();
        setDjMusic(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching DJ music:', error);
        setLoading(false);
      }
    };

    fetchDjMusic();
  }, [id]);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (!djmusic) {
    return <div className={styles.notFound}>DJ Music not found</div>;
  }

  return (
    <div className={styles.detailContainer}>
      <h1>{djmusic.title}</h1>
      <div className={styles.info}>
        <div className={styles.mainDetails}>
          <p><strong>Name:</strong> {djmusic.name}</p>
          <p><strong>Email:</strong> {djmusic.email}</p>
          <p><strong>Phone:</strong> {djmusic.phone}</p>
          <p><strong>Address:</strong> {djmusic.address}</p>
          <p><strong>Rating:</strong> {djmusic.ratings}/5</p>
          <p><strong>Status:</strong> {djmusic.isVerified ? 'Verified' : 'Not Verified'}</p>
          <p><strong>Description:</strong> {djmusic.description}</p>
        </div>
        
        <div className={styles.gallery}>
          <h3>Profile Images</h3>
          <div className={styles.profileImages}>
            {djmusic.djmusicimgUrl?.map((imgUrl, index) => (
              <img 
                key={index} 
                src={imgUrl} 
                alt={`${djmusic.title} ${index + 1}`}
                className={styles.profileImage}
              />
            ))}
          </div>

          <h3>Gallery</h3>
          {djmusic.galleryImages?.map((galleryItem, index) => (
            <div key={index} className={styles.galleryItem}>
              <img 
                src={galleryItem.djmusicpic} 
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

export default DjMusicDetail;