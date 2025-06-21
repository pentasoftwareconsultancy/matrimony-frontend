import React, { useState, useEffect } from 'react'; // Fixed the import syntax
import { useParams } from 'react-router-dom';
import styles from './DecorationDetail.module.css';

const DecorationDetail = () => {
  const { id } = useParams();
  const [decoration, setDecoration] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDecoration = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/v1/decoration/${id}`);      
        const data = await response.json();
        setDecoration(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching decoration:', error);
        setLoading(false);
      }
    };       

    fetchDecoration();
  }, [id]);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (!decoration) {
    return <div className={styles.notFound}>Decoration not found</div>;
  }

  return (
    <div className={styles.detailContainer}>
      <h1>{decoration.title}</h1>
      <div className={styles.info}>
        <div className={styles.mainDetails}>
          <p><strong>Name:</strong> {decoration.name}</p>
          <p><strong>Email:</strong> {decoration.email}</p>
          <p><strong>Phone:</strong> {decoration.phone}</p>
          <p><strong>Address:</strong> {decoration.address}</p>
          <p><strong>Rating:</strong> {decoration.ratings}/5</p>
          <p><strong>Status:</strong> {decoration.isVerified ? 'Verified' : 'Not Verified'}</p>
          <p><strong>Description:</strong> {decoration.description}</p>
        </div>
        
        <div className={styles.gallery}>
          <h3>Profile Images</h3>
          <div className={styles.profileImages}>
            {decoration.decorationimgUrl?.map((imgUrl, index) => (
              <img 
                key={index} 
                src={imgUrl} 
                alt={`${decoration.title} ${index + 1}`}
                className={styles.profileImage}
              />
            ))}
          </div>

          <h3>Gallery</h3>
          {decoration.galleryImages?.map((galleryItem, index) => (
            <div key={index} className={styles.galleryItem}>
              <img 
                src={galleryItem.decorationpic} 
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

export default DecorationDetail;