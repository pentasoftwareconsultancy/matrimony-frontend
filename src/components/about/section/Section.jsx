import React from "react";
import styles from "./Section.module.css";
import { LuHeartHandshake } from "react-icons/lu";
import image1 from "../../image/image2.jpg";
import { Link } from "react-router-dom";

const Section = () => {
  return (
    <div className={styles.container1}>
      <div className={styles.container}>
        <div className={styles.main}>
          <div className={styles.method}>
            <div className={styles.heartIcon}>
              <LuHeartHandshake />
            </div>
            {/* <h2 className={styles.title}>
              The BVowed
              <br /> Method
            </h2>
            <p className={styles.subtitle}>As simple as 1, 2, 3!</p> */}
          </div>
          <div className={styles.media}>
            <div className={styles.imagemains}>
              <img src={image1} alt="Image 1" className={styles.imagemain} />
            </div>
            <div className={styles.images}>
              <img src={image1} alt="Image 2" className={styles.image} />
              <img src={image1} alt="Image 3" className={styles.image} />
              <img src={image1} alt="Image 4" className={styles.image} />
            </div>
          </div>
        </div>
        <div className={styles.method1}>
          <div className={styles.step}>
            <h1 className={styles.stepNumber}>01</h1>
            <div className={styles.tell}>
              <p className={styles.about}>Tell Us About Yourself!"</p>
              <p className={styles.stepDescription}>
              "Tell us about yourself so others can get to know you better. Share your hobbies, interests, and values to 
              find someone who truly connects with you. Mention what you’re looking for in a life partner to make your profile 
              more meaningful. A clear and honest description increases your chances of finding the right match. Be yourself,
               express your thoughts, and take the first step toward a happy and lasting relationship!"
              </p>
            </div>
          </div>
          <div className={styles.joinTexts}>
            <div className={styles.joinUs}>
              <h3 className={styles.joinTitle}>Join Us Today</h3>
              <p className={styles.joinText}>
              "Looking for a life partner? Join Akhil Bhartiya Kunbi Samaj Bahuuddeshiya Mandal today and start your journey to love!"
              </p>
              <button className={styles.registerButton}><Link to ="/register">Register Now</Link> </button>
            </div>
            {/* <p className={styles.footerText}>
              ✨ We have 15,000+ members online!
            </p> */}
          </div>
        </div>
      </div>
    </div>

    //         </div>
    //         </div>
    //   <div className={styles.method}>
    //     <h2 className={styles.title}>
    //       <span className={styles.heartIcon}>❤️</span> The BVowed Method
    //     </h2>
    //     <p className={styles.subtitle}>As simple as 1, 2, 3!</p>
    //     <div className={styles.step}>
         
    //       <p className={styles.stepDescription}>
    //         BVowed is an exclusive platform for singles looking for a life partner. Tell us about yourself and go through our stringent verification process to become a BVowed member.
    //       </p>
          
    //     </div>
    //     <div className={styles.joinUs}>
    //       <h3 className={styles.joinTitle}>Join Us Today</h3>
    //       <p className={styles.joinText}>
    //         Learn more about our exclusive platform and take your first step to finding your life partner.
    //       </p>
    //       <button className={styles.registerButton}>Register Now</button>
    //     </div>
    //   </div>
    //   <p className={styles.footerText}>✨ We have 15,000+ members online!</p>
    //   </section>
      
  );
};

export default Section;
