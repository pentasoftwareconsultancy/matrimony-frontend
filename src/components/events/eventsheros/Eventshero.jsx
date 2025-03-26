import React from "react";
// Corrected import path for eventData
import { eventData } from "../eventherodata/Eventherodata"; // Fix import path

import styles from "./Eventshero.module.css"; // Ensure your CSS file is correct

const Eventshero = () => {
  // Destructuring the eventData object
  const { category, title, date, location, buttons, image } = eventData;

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${image})` }} // Dynamically set the background image
    >
      <div className={styles.overlay}>
        <div className={styles.content}>
          {/* <span className={styles.category}>{category}</span> */}
          <h1 className={styles.title}>
  {title.split(',').map((part, index) => (
    <span key={index}>
      {part}
      {index === 0 && <br />}
    </span>
  ))}
</h1>
<p className={styles.details}>
  {date} <br />
  {location}
</p>
          {/* <div className={styles.buttons}>
            {buttons.map((button, index) => (
              <a
                key={index}
                href={button.link}
                className={index === 0 ? styles.primaryButton : styles.secondaryButton}
              >
                {button.text}
              </a>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Eventshero;
