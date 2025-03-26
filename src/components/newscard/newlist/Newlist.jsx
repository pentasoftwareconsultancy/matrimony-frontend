// src/pages/CardPage.js

import React from 'react';
// import cardData from '../data';
import cardData from '../newdata/Newdata';
import Card from "../card/Card";
// import styles from './newpage.module.css';

const Newlist = () => {
  return (
    <div className={styles.cardPage}>
      <h1>Card List</h1>
      <div className={styles.cardContainer}>
        {cardData.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Newlist;
