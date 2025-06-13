import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styles from './MakeupHairDetail.module.css';

const MakeupHairDetail = () => {
  const { id } = useParams();
  const [makeuphair, setMakeupAndHair] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const PLACEHOLDER_IMAGE = 'https://via.placeholder.com/150?text=No+Image';

  const fetchMakeupAndHair = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/v1/makeupartist/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setMakeupAndHair(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching makeup and hair:', error);
      setError(error.message || 'Failed to fetch vendor');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMakeupAndHair();
  }, [id]);

  const handleRetry = () => {
    setLoading(true);
    setError(null);
    fetchMakeupAndHair();
  };

  // Format timestamp for display
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Full timestamp for tooltip
  const fullDate = (dateString) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (loading) {
    return (
      <div className={styles.loading}>
        <span className={styles.spinner}></span>
        Loading vendor details...
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.error}>
        <span role="img" aria-label="Error">❌</span> Error: {error}
        <button className={styles.retryButton} onClick={handleRetry}>
          Try Again
        </button>
      </div>
    );
  }

  if (!makeuphair) {
    return (
      <div className={styles.notFound}>
        <span role="img" aria-label="Not found">😔</span> Makeup and Hair Vendor not found
      </div>
    );
  }

  return (
    <div className={styles.detailContainer}>
      <h1>{makeuphair.title}</h1>
      <div className={styles.info}>
        <div className={styles.mainDetails}>
          <h2>Vendor Details</h2>
          <p><strong>Name:</strong> {makeuphair.name}</p>
          <p><strong>Email:</strong> <a href={`mailto:${makeuphair.email}`}>{makeuphair.email}</a></p>
          <p><strong>Phone:</strong> <a href={`tel:${makeuphair.phone}`}>{makeuphair.phone}</a></p>
          <p><strong>Address:</strong> {makeuphair.address}</p>
          <p className={styles.rating}>
            <strong>Rating:</strong> {makeuphair.ratings}/5{' '}
            <span className={styles.star}>★</span>
          </p>
          <p>
            <strong>Status:</strong>{' '}
            <span className={makeuphair.isVerified ? styles.verified : styles.notVerified}>
              {makeuphair.isVerified ? 'Verified ✔' : 'Not Verified'}
            </span>
          </p>
          <p><strong>Description:</strong> {makeuphair.description || 'No description available'}</p>
          <p
            className={styles.timestamp}
            title={fullDate(makeuphair.createdAt)}
          >
            <strong>Created:</strong> {formatDate(makeuphair.createdAt)}
          </p>
          <p
            className={styles.timestamp}
            title={fullDate(makeuphair.updatedAt)}
          >
            <strong>Last Updated:</strong> {formatDate(makeuphair.updatedAt)}
          </p>
          {/* <button
            className={styles.contactButton}
            onClick={() => window.location.href = `mailto:${makeuphair.email}`}
          >
            Contact Vendor
          </button> */}
        </div>
        <div className={styles.profileImages}>
          <h2>Profile Images</h2>
          {makeuphair.makeupimgUrl?.length > 0 ? (
            <div className={styles.profileImageGrid}>
              {makeuphair.makeupimgUrl.map((imgUrl, index) => (
                <img
                  key={index}
                  src={imgUrl || PLACEHOLDER_IMAGE}
                  alt={`${makeuphair.title} ${index + 1}`}
                  className={styles.profileImage}
                />
              ))}
            </div>
          ) : (
            <p className={styles.noImages}>
              <img
                src={PLACEHOLDER_IMAGE}
                alt="No profile images"
                className={styles.profileImage}
              />
              No profile images available
            </p>
          )}
        </div>
      </div>
      <div className={styles.gallery}>
        <h2>Gallery</h2>
        {makeuphair.galleryImages?.length > 0 ? (
          <div className={styles.galleryGrid}>
            {makeuphair.galleryImages.map((galleryItem, index) => (
              <div key={index} className={styles.galleryItem}>
                <div className={styles.imageWrapper}>
                  <img
                    src={galleryItem.makeuppic || PLACEHOLDER_IMAGE}
                    alt={galleryItem.title || `Gallery image ${index + 1}`}
                    className={styles.galleryImage}
                  />
                </div>
                <h3>{galleryItem.title || 'Untitled'}</h3>
                <p>{galleryItem.description || 'No description'}</p>
                {galleryItem.feedback && (
                  <p className={styles.feedback}>
                    <strong>Feedback:</strong> {galleryItem.feedback}
                  </p>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className={styles.noImages}>
            <img
              src={PLACEHOLDER_IMAGE}
              alt="No gallery images"
              className={styles.galleryImage}
            />
            No gallery images available
          </p>
        )}
      </div>
    </div>
  );
};

export default MakeupHairDetail;