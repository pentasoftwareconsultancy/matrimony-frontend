import React, { useState, useEffect } from 'react';
import GroomwearCard from "../groomwearcard/GroomwearCard";
import styles from './GroomwearList.module.css';

const GroomwearList = () => {
  const [groomwear, setGroomwear] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGroomwear = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/v1/groomwear');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setGroomwear(Array.isArray(data) ? data : []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching groomwear:', error);
        setError(error.message || 'Failed to fetch vendors');
        setLoading(false);
      }
    };

    fetchGroomwear();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading groomwear vendors...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  if (!Array.isArray(groomwear) || groomwear.length === 0) {
    return <div className={styles.noVendors}>No groomwear vendors available</div>;
  }

  return (
    <div className={styles.groomwearList}>
      <h2>Groomwear Vendor Services</h2>
      <div className={styles.groomwearGrid}>
        {groomwear.map((vendor) => (
          <GroomwearCard key={vendor._id} groomwear={vendor} />
        ))}
      </div>
    </div>
  );
};

export default GroomwearList;