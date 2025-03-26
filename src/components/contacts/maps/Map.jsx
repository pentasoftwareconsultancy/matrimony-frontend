import React from 'react';
// import styles from "./Map.module.css"
import styles from "./Map.module.css"

const Map = () => {
  return (
    <>
      <div>
        <h2
          style={{
            textAlign: 'center',
            marginTop: '10px',
            color: '#b81358',
            fontFamily: 'Your Font, sans-serif', // Ensure a fallback font is specified
            fontSize: '2.3rem',
          }}
        >
          Get in touch with Osome
        </h2>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.mapSection}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.4182158531553!2d73.78816727530582!3d18.56043828719625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf7f8df5f3b7%3A0x204bda65046fa605!2sBaner%20Rd%2C%20Pune%2C%20Maharashtra%20411045%2C%20India!5e0!3m2!1sen!2sin!4v1696667823169!5m2!1sen!2sin"
            title="Google Map"
            className={styles.map}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Map;
