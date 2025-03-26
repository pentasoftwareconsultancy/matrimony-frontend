import React from 'react'
import styles from "./Homeabout.module.css"
import image from "../../homes/hero/images/slide1.jpg"
import { Link } from "react-router-dom";
function Homeabout() {
  return (
  
        <div className={styles.container}>
            {/* <div className={styles.images}> */}
          <img src={image} alt={image} className={styles.image} />
          {/* </div> */}
          <div className={styles.content}>
            <h2>About Akhil Bhartiya Kunbi Samaj Bahuuddeshiya Mandal, Akola</h2>
            <p className={styles.akhile}>
            "Akhil Bhartiya Kunbi Samaj Bahuuddeshiya Mandal, Akola is a community organization dedicated to
             bringing people together and supporting their growth. It helps individuals find their perfect match 
             while preserving cultural values and traditions. The organization also works to strengthen social bonds
              and promote development through various activities. With a trusted platform for matchmaking and community 
              support, it plays an important role in creating a better future for everyone."
            </p>
            <button className={styles.buttonview}><Link to ="/about"> View More</Link>
            </button>
          </div>
        </div>
      );
    };

export default Homeabout;