import React, { useState, useEffect } from 'react';
import DjMusicCard from "../djmusiccard/DjMusicCard";
import styles from './DjMusicList.module.css';

const DjMusicList = () => {
  const [djmusic, setDjMusic] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDjMusic = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/v1/djmusic');
        const data = await response.json();
        setDjMusic(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching DJ music:', error);
        setLoading(false);
      }
    };

    fetchDjMusic();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading DJ music...</div>;
  }

  return (
    <div className={styles.djmusicList}>
      <h2>DJ Music Services</h2>
      <div className={styles.djmusicGrid}>
        {djmusic.map((dj) => (
          <DjMusicCard key={dj._id} djmusic={dj} />
        ))}
      </div>
    </div>
  );
};

export default DjMusicList;