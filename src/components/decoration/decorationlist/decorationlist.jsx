import React, { useState, useEffect } from 'react';
import DecorationCard from "../deconrationcard/decorationcard";
import styles from './DecorationList.module.css';

const DecorationList = () => {
  const [decorations, setDecorations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDecorations = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/v1/decoration');
        const data = await response.json();
        setDecorations(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching decorations:', error);
        setLoading(false);
      }
    };

    fetchDecorations();
  }, []);

  if (loading) {
    return <div className={styles.loading}>Loading decorations...</div>;
  }

  return (
    <div className={styles.decorationList}>
      <h2>Decoration Services</h2>
      <div className={styles.decorationGrid}>
        {decorations.map((decoration) => (
          <DecorationCard key={decoration._id} decoration={decoration} />
          
        ))}
      </div>
    </div>
  );
};

export default DecorationList;