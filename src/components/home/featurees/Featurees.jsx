import React, { useEffect } from 'react';
import styles from'./Featurees.module.css';

function Featurees() {
    const featureTexts = [
       "Find your perfect match within the Kunbi community.",
        "Verified profiles for a safe matchmaking experience.",
        "Smart filters to match your preferences.",
       "Blend of tradition and modern matchmaking.",
        "Personalized support for your marriage journey.",
        "Easy-to-use platform for effortless searching.",
        "Meaningful connections for lifelong happiness.",
        // "Pioneers in research on Maharashtrian wedding industry.",
      ];

      useEffect(() => {
        const featureItems = document.querySelectorAll(`.${styles.featureItem}`);
        
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add(styles.visible);
            } else {
              entry.target.classList.remove(styles.visible);
            }
          });
        }, {
          threshold: 0.5
        });
    
        featureItems.forEach(item => observer.observe(item));
    
        return () => {
          featureItems.forEach(item => observer.unobserve(item));
        };
      }, []);
    
      return (
        <div className={styles.container}>
          <div className="row">
            <div className="col-lg-12">
              <h2 className={styles.sectionTitle}>"Why Akhil Bhartiya Kunbi Samaj Bahuuddeshiya Mandal, Akola is the Perfect Place to Find Your Ideal Match!"</h2>
            </div>
          </div>
    
          <div className="row">
            <div className="col-lg-12">
              <div className={styles.featuresDivWrap}>
                <ul className={styles.featuresUl}>
                  {featureTexts.map((text, index) => (
                    <li key={index} className={`${styles.featureItem} d-flex align-items-center`}>
                      <div className={styles.featuresText}>{text}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
    
export default Featurees;
