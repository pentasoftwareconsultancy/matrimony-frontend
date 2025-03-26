import React from "react";
import styles from "./Venderhero.module.css"; // Importing the CSS module
import vendor1 from "../image/image1.avif"; // Image to be used as background

function Venderhero() {
  return (
    <div
      className={styles.pageContainer}
      style={{
        backgroundImage: `url(${vendor1})`,
      }}
    >
      <div className={styles.spContainer}>
        <div className={styles.spContent}>
          <h1 className={styles.big}>Dream Big, Sell Bigger!</h1>
          <p className={styles.success}>Success Starts with You!</p>
          <h2 className={styles.sell}>Believe, Sell, Succeed!</h2>
        </div>
      </div>
    </div>
  );
}

export default Venderhero;
