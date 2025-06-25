// import React from 'react';
// import styles from './Abouthero.module.css';
// import image1 from '../../about/image/image3.jpg';
// import image2 from '../../about/image/image5.png';

// function Abouthero() {
//   return (
//     <div className={styles.container}>
//       <div className={styles.flowerContainer}>
//         {[...Array(10)].map((_, index) => (
//           <div
//             key={index}
//             className={styles.flower}
//             style={{ backgroundImage: `url(${image2})` }}
//           ></div>
//         ))}
//       </div>
//       <div className={styles.content}>
//         <div className={styles.imageContainer}>
//           <img src={image1} alt="Couple" className={styles.image} />
//           {/* <div className={styles.flowerContainer}>
//         {[...Array(10)].map((_, index) => (
//           <div
//             key={index}
//             className={styles.flower}
//             style={{ backgroundImage: `url(${image2})` }}
//           ></div>
//         ))}
//         </div> */}
//         </div>
//         <div className={styles.textContainer}>
//           <div className={styles.title}>FIND YOUR</div>
//           <div className={styles.subtitle}>Find your perfect match today!</div>
//           <p className={styles.description}>
//           Love and respect make a strong relationship.
// Support each other through every journey.
// Grow together and create a happy life.
// A true match brings joy and harmony. 💕
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Abouthero;



import React from 'react';
import styles from './Abouthero.module.css';
import image1 from '../../about/image/image11.jpg';
import image2 from '../../about/image/image5.png';

function Abouthero() {
  return (
    <div className={styles.container}>
      <div className={styles.heroSection}>
        <div className={styles.content}>
          <div className={styles.textContainer}>
            <div className={styles.title}>FIND YOUR</div>
            <div className={styles.subtitle}>Perfect Match Today!</div>
            <p className={styles.description}>
              Love and respect make a strong relationship. Support each other through every journey.
              Grow together and create a happy life. A true match brings joy and harmony. 💕
            </p>
            <div className={styles.ctaContainer}>
              <button className={styles.ctaButton}>Find Your Match</button>
              <button className={styles.secondaryButton}>Learn More</button>
            </div>
          </div>
          
          <div className={styles.imageContainer}>
            <div className={styles.imageWrapper}>
              <img src={image1} alt="Happy Couple" className={styles.image} />
              <div className={styles.imageOverlay}></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.flowerContainer}>
        {[...Array(15)].map((_, index) => (
          <div
            key={index}
            className={styles.flower}
            style={{ 
              backgroundImage: `url(${image2})`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${15 + Math.random() * 15}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className={styles.decorativeElement}></div>
    </div>
  );
}

export default Abouthero;