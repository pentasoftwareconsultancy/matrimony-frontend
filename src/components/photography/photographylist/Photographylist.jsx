import React, { useState, useEffect } from 'react';
// import PhotographyCard from "../../photography/photographycard";
import axios from 'axios';
import PhotographyCard from '../photographycard/Photographycard';
import styles from './PhotographyList.module.css';

const PhotographyList = () => {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVendors = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/v1/vendorPhotography/');
        setVendors(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching vendors:', error);
        setLoading(false);
      }
    };
    fetchVendors();
  }, []);

  if (loading) return <div className={styles.loading}>Loading...</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Photography Vendors</h1>
      <div className={styles.grid}>
        {vendors.map((vendor) => (
        //   <PhotographyCard key={vendor._id} vendor={vendor} />
        <PhotographyCard key={vendor._id} vendor={vendor}/>
        ))}
      </div>
    </div>
  );
};

export default PhotographyList;