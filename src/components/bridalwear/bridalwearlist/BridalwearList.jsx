import React, { useState, useEffect } from 'react';
import BridalwearCard from "../bridalwearcard/BridalwearCard";
import styles from './BridalwearList.module.css';

const BridalwearList = () => {
  const [bridalwear, setBridalwear] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBridalwear = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/v1/bridalwear');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setBridalwear(Array.isArray(data) ? data : []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching bridalwear:', error);
        setError(error.message || 'Failed to fetch vendors');
        setLoading(false);
      }
    };

    fetchBridalwear();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading bridalwear vendors...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  if (!Array.isArray(bridalwear) || bridalwear.length === 0) {
    return <div className={styles.noVendors}>No bridalwear vendors available</div>;
  }

  return (
    <div className={styles.bridalwearList}>
      <h2>Bridalwear Vendor Services</h2>
      <div className={styles.bridalwearGrid}>
        {bridalwear.map((vendor) => (
          <BridalwearCard key={vendor._id} bridalwear={vendor} />
        ))}
      </div>
    </div>
  );
};

export default BridalwearList;