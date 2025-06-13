import React, { useState, useEffect } from 'react';
import VendorLightingAndSoundCard from "../vendorlightingandsoundcard/VendorLightingAndSoundCard";
import styles from './VendorLightingAndSoundList.module.css';

const VendorLightingAndSoundList = () => {
  const [lightingsound, setLightingAndSound] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLightingAndSound = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/v1/lighting');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setLightingAndSound(Array.isArray(data) ? data : []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching lighting and sound:', error);
        setError(error.message || 'Failed to fetch vendors');
        setLoading(false);
      }
    };

    fetchLightingAndSound();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading lighting and sound vendors...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  if (!Array.isArray(lightingsound) || lightingsound.length === 0) {
    return <div className={styles.noVendors}>No lighting and sound vendors available</div>;
  }

  return (
    <div className={styles.lightingsoundList}>
      <h2>Lighting and Sound Vendor Services</h2>
      <div className={styles.lightingsoundGrid}>
        {lightingsound.map((vendor, index) => (
          <div key={vendor._id} className={styles.gridItem} style={{ animationDelay: `${index * 0.1}s` }}>
            <VendorLightingAndSoundCard lightingsound={vendor} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorLightingAndSoundList;