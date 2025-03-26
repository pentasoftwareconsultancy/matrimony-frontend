import React, { useState } from "react";
import styles from "./Sectionmain.module.css";
import ganpati from "../../about/image/ganpati.jpg";
import image2 from "../../about/image/image7.jpg";
import image3 from "../../about/image/image3.jpg";
import { Link } from "react-router-dom";

const Sectionmain = () => {
  const images = [ganpati, image2, image3]; // Array of images
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Why Us</h2>
      <div className={styles.card}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <div className={styles.cards}>
            <div className={styles.main}>
              <div className={styles.textmain}>Join Us Today
              </div>
              <div className={styles.cardmain}>
                <div className={styles.maintext}>
                  <p className={styles.text}>
                  Find your perfect life partner in a safe and trusted community. Connect with genuine profiles, enjoy smart
                   matchmaking, and start your journey toward a lifelong bond. Sign up now! 😊
                  </p>
                  <div className={styles.navigation}>
                    <button
                      className={styles.navButton}
                      onClick={handlePrev} // Change image to the previous one
                    >
                      ←
                    </button>
                    <button
                      className={styles.navButton}
                      onClick={handleNext} // Change image to the next one
                    >
                      →
                    </button>
                  </div>
                </div>
                <div className={styles.containermain}>
                  <div className={styles.imageContainer}>
                    <img
                      src={images[currentIndex]} // Display current image
                      alt={`Slide ${currentIndex + 1}`}
                      className={styles.image}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className={styles.rightSection}>
          {/* <h4>Lorem ipsum</h4> */}
          <div className={styles.dolor}>
          Finding a life partner is one of the most important decisions in life, and we are here to make that journey easier, safer, and more
           meaningful. At Akhil Bhartiya Kunbi Samaj Bahuuddeshiya Mandal, we provide a trusted and secure platform with verified profiles, 
           ensuring genuine connections. Our matchmaking process is designed to help you find the right partner effortlessly with advanced 
           filters and personalized suggestions. We respect traditions while embracing modern matchmaking to bring like-minded individuals 
           together. With complete transparency, strong privacy measures, and dedicated support, we make sure your experience is smooth and 
           hassle-free. Join us today and take the first step toward a happy and fulfilling future!
          </div>
          {/* <div className={styles.textmains}>
          <div className={styles.profile}>Verified Profiles</div>
          <div className={styles.profile}>Personalized Matchmaking</div>
          <div className={styles.profile}>Respect for Diversity</div>
          <div className={styles.profile}>Seamless User Experience</div>
          <div className={styles.profile}>Privacy and Security</div>
          <div className={styles.profile}>Success Stories</div>
          <div className={styles.profile}>Expert Assistance</div>
          </div> */}
          <div className={styles.buttons}>
            <button className={styles.primaryButton}><Link to="/register">Get Started</Link></button>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectionmain;
