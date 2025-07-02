import React, { useState, useEffect } from 'react';
import VendorJewelryCard from "../vendorjewelrycard/VendorJewelryCard";
import styles from './VendorJewelryList.module.css';

const VendorJewelryList = () => {
  const [jewelry, setJewelry] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJewelry = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/v1/jewelry');
        const data = await response.json();
        setJewelry(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching jewelry:', error);
        setLoading(false);
      }
    };

    fetchJewelry();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading jewellery vendors...</div>;
  }

  return (
    <div className={styles.jewelryList}>
      <h2>Jewellery Vendor Services</h2>
      <div className={styles.jewelryGrid}>
        {jewelry.map((vendor, index) => (
          <div key={vendor._id} className={styles.gridItem} style={{ animationDelay: `${index * 0.1}s` }}>
            <VendorJewelryCard jewelry={vendor} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default VendorJewelryList;