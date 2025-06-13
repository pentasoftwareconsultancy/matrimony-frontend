import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styles from "./VendorJewelryDetail.module.css";

const VendorJewelryDetail = () => {
  const { id } = useParams();
  const [jewelry, setJewelry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJewelry = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/v1/jewelry/${id}`);
        const data = response.data.data || response.data;
        setJewelry(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching jewelry:', error);
        setError(`Failed to fetch Jewelry vendor: ${error.response?.data?.message || error.message}`);
        setLoading(false);
      }
    };

    fetchJewelry();
  }, [id]);

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (!jewelry || error) {
    return <div className={styles.notFound}>{error || 'Jewelry Vendor not found'}</div>;
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
          <p><strong>Rating:</strong> {jewelry.ratings.toFixed(1)}/5</p>
          <p><strong>Status:</strong> {jewelry.isVerified ? 'Verified' : 'Not Verified'}</p>
          <p><strong>Description:</strong> {jewelry.description}</p>
        </div>
        <div className={styles.profileImages}>
          {jewelry.jewelryimgUrl?.length > 0 ? (
            jewelry.jewelryimgUrl.map((imgUrl, index) => (
              <img
                key={index}
                src={imgUrl}
                alt={`${jewelry.title} ${index + 1}`}
                className={styles.profileImage}
                onError={(e) => (e.target.src = "/images/placeholder.png")}
              />
            ))
          ) : (
            <p>No Profile Images</p>
          )}
        </div>
      </div>
      <div className={styles.gallery}>
        <h3>Gallery</h3>
        <div className={styles.galleryGrid}>
          {jewelry.galleryImages?.length > 0 ? (
            jewelry.galleryImages.map((galleryItem, index) => (
              <div key={index} className={styles.galleryItem}>
                <img
                  src={galleryItem.jewelrypic || "/images/placeholder.png"}
                  alt={galleryItem.title || "Gallery Image"}
                  className={styles.galleryImage}
                  onError={(e) => (e.target.src = "/images/placeholder.png")}
                />
                <h4>{galleryItem.title}</h4>
                <p>{galleryItem.description}</p>
                {galleryItem.feedback && (
                  <p><strong>Feedback:</strong> {galleryItem.feedback}</p>
                )}
              </div>
            ))
          ) : (
            <p>No Gallery Images</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default VendorJewelryDetail;
