import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from "./VendorJewelryDetail.module.css";

const VendorJewelryDetail = () => {
  const { id } = useParams();
  const [jewelry, setJewelry] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJewelry = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/v1/jewelry/${id}`);
        const data = await response.json();
        setJewelry(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching jewelry:', error);
        setLoading(false);
      }
    };

    fetchJewelry();
  }, [id]);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (!jewelry) {
    return <div className={styles.notFound}>Jewellery Vendor not found</div>;
  }

  return (
    <div className={styles.detailContainer}>
      <h1>{jewelry.title}</h1>
      <div className={styles.info}>
        <div className={styles.mainDetails}>
          <p><strong>Name:</strong> {jewelry.name}</p>
          <p><strong>Email:</strong> {jewelry.email}</p>
          <p><strong>Phone:</strong> {jewelry.phone}</p>
          <p><strong>Address:</strong> {jewelry.address}</p>
          {/* <p><strong>Rating:</strong> {jewelry.ratings}/5</p>
          <p><strong>Status:</strong> {jewelry.isVerified ? 'Verified' : 'Not Verified'}</p> */}
          <p><strong>Description:</strong> {jewelry.description}</p>
        </div>
        <div className={styles.profileImages}>
          {jewelry.jewelryimgUrl?.map((imgUrl, index) => (
            <img 
              key={index} 
              src={imgUrl} 
              alt={`${jewelry.title} ${index + 1}`}
              className={styles.profileImage}
            />
          ))}
        </div>
      </div>
      <div className={styles.gallery}>
        <h3>Gallery</h3>
        <div className={styles.galleryGrid}>
          {jewelry.galleryImages?.map((galleryItem, index) => (
            <div key={index} className={styles.galleryItem}>
              <img 
                src={galleryItem.jewelrypic} 
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

export default VendorJewelryDetail;