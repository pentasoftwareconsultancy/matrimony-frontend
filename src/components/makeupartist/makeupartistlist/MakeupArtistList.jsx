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
        setError(error.message || 'Failed to fetch makeup artists');
        setLoading(false);
      }
    };

    fetchMakeupArtists();
  }, []);

  if (loading) {
    return (
      <div className={styles.loading}>
        <div className={styles.spinner}></div>
        Loading makeup artists...
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.error}>
        <svg className={styles.errorIcon} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
        </svg>
        Error: {error}
      </div>
    );
  }

  if (!Array.isArray(makeupartists) || makeupartists.length === 0) {
    return (
      <div className={styles.noVendors}>
        <svg className={styles.noVendorsIcon} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm4-8c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z"/>
        </svg>
        No makeup artists available
      </div>
    );
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