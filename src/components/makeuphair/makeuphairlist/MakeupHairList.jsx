import React, { useState, useEffect } from 'react';
import MakeupHairCard from "../makeuphaircard/MakeupHairCard";
import styles from './MakeupHairList.module.css';

const MakeupHairList = () => {
  const [makeuphair, setMakeupAndHair] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMakeupAndHair = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/v1/mehndi');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setMakeupAndHair(Array.isArray(data) ? data : []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching makeup and hair:', error);
        setError(error.message || 'Failed to fetch vendors');
        setLoading(false);
      }
    };

    fetchMakeupAndHair();
  }, []);

  const handleRetry = () => {
    setLoading(true);
    setError(null);
    fetchMakeupAndHair();
  };

  if (loading) {
    return (
      <div className={styles.loading}>
        <span className={styles.spinner}></span>
        Loading makeup and hair vendors...
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

  if (!Array.isArray(makeuphair) || makeuphair.length === 0) {
    return (
      <div className={styles.noVendors}>
        <span role="img" aria-label="No vendors">😔</span> No makeup and hair vendors available
      </div>
    );
  }

  return (
    <div className={styles.makeuphairList}>
      <h2>Makeup and Hair Vendor Services</h2>
      <div className={styles.makeuphairGrid} role="grid">
        {makeuphair.map((vendor) => (
          <MakeupHairCard key={vendor._id} makeuphair={vendor} />
        ))}
      </div>
    </div>
  );
};

export default MakeupHairList;