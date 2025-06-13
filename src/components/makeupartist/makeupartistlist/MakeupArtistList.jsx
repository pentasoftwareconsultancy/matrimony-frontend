import React, { useState, useEffect } from 'react';
import MakeupArtistCard from '../makeupartistcard/MakeupArtistCard';
import styles from './MakeupArtistList.module.css';

const MakeupArtistList = () => {
  const [makeupartists, setMakeupArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMakeupArtists = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/v1/makeupartist');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setMakeupArtists(Array.isArray(data) ? data : []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching makeup artists:', error);
        setError(error.message || 'Failed to fetch vendors');
        setLoading(false);
      }
    };

    fetchMakeupArtists();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading makeup artists...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  if (!Array.isArray(makeupartists) || makeupartists.length === 0) {
    return <div className={styles.noVendors}>No makeup artists available</div>;
  }

  return (
    <div className={styles.makeupartistList}>
      <h2>Makeup Artist Services</h2>
      <div className={styles.makeupartistGrid}>
        {makeupartists.map((vendor) => (
          <MakeupArtistCard key={vendor._id} makeupartist={vendor} />
        ))}
      </div>
    </div>
  );
};

export default MakeupArtistList;