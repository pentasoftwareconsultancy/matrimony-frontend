// import React from 'react';
// import { Link } from 'react-router-dom';
// import styles from './VendorLightingAndSoundCard.module.css';

// const VendorLightingAndSoundCard = ({ lightingsound }) => {
//   return (
//     <div className={styles.card}>
//       <div className={styles.header}>
//         <h3>{lightingsound.title}</h3>
//         <p>{lightingsound.name}</p>
//       </div>
//       <div className={styles.imageContainer}>
//         {lightingsound.lightingimgUrl && lightingsound.lightingimgUrl[0] && (
//           <img 
//             src={lightingsound.lightingimgUrl[0]} 
//             alt={lightingsound.title}
//             className={styles.image}
//           />
//         )}
//       </div>
//       <div className={styles.body}>
//         <p>{lightingsound.description?.substring(0, 100)}...</p>
//         <div className={styles.details}>
//           {/* <span>Rating: {lightingsound.ratings}/5</span>
//           <span>{lightingsound.isVerified ? 'Verified' : 'Not Verified'}</span> */}
//         </div>
//       </div>
//       <Link to={`/lightingsound/${lightingsound._id}`} className={styles.detailsLink}>
//         View Details
//       </Link>
//     </div>
//   );
// };

// export default VendorLightingAndSoundCard;


import React from 'react';
import { Link } from 'react-router-dom';
import styles from './VendorLightingAndSoundCard.module.css';

const VendorLightingAndSoundCard = ({ lightingsound }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {lightingsound.lightingimgUrl && lightingsound.lightingimgUrl[0] && (
          <img
            src={lightingsound.lightingimgUrl[0]}
            alt={lightingsound.title}
            className={styles.image}
          />
        )}
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.content}>
        <div className={styles.titleWrapper}>
          <h3 className={styles.title}>{lightingsound.title}</h3>
          <p className={styles.name}>{lightingsound.name}</p>
        </div>

        <p className={styles.description}>
          {lightingsound.description?.substring(0, 100)}...
        </p>

        {/* Optional: Uncomment if needed */}
        {/* <div className={styles.rating}>
          <span className={`${styles.star} ${styles.filled}`}>★</span>
          <span>{lightingsound.ratings}/5</span>
        </div>

        <div className={styles.verifiedBadge}>
          <span className={styles.verified}>
            {lightingsound.isVerified ? "✔ Verified" : "✖ Not Verified"}
          </span>
        </div> */}

        <Link
          to={`/lightingsound/${lightingsound._id}`}
          className={styles.detailsLink}
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default VendorLightingAndSoundCard;
