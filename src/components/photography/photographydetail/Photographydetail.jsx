import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './PhotographyDetail.module.css';

const PhotographyDetail = () => {
  const { id } = useParams();
  const [vendor, setVendor] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVendor = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/v1/vendorPhotography/${id}`);
        setVendor(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching vendor details:', error);
        setLoading(false);
      }
    };
    fetchVendor();
  }, [id]);

  if (loading) return <div className={styles.loading}>Loading...</div>;
  if (!vendor) return <div className={styles.error}>Vendor not found</div>;

  const imageUrl = vendor.profileimgUrl?.[0] || 'https://via.placeholder.com/400x300';

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img src={imageUrl} alt={vendor.title} className={styles.image} />
        <div className={styles.content}>
          <h1 className={styles.title}>{vendor.title}</h1>
          <div className={styles.details}>
            <p><span className={styles.label}>Name:</span> {vendor.name}</p>
            <p><span className={styles.label}>Email:</span> {vendor.email}</p>
            <p><span className={styles.label}>Phone:</span> {vendor.phone}</p>
            <p><span className={styles.label}>Address:</span> {vendor.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotographyDetail;