// import React from 'react';
// import { Link } from 'react-router-dom';
// import styles from './DecorationCard.module.css';

// const DecorationCard = ({ decoration }) => {
//   return (
//     <div className={styles.card}>
//       <div className={styles.header}>
//         <h3>{decoration.title}</h3>
//         <p>{decoration.name}</p>
//       </div>
//       <div className={styles.imageContainer}>
//         {decoration.decorationimgUrl && decoration.decorationimgUrl[0] && (
//           <img 
//             src={decoration.decorationimgUrl[0]} 
//             alt={decoration.title}
//             className={styles.image}
//           />
//         )}
//       </div>
//       <div className={styles.body}>
//         <p>{decoration.description?.substring(0, 100)}...</p>
//         <div className={styles.details}>
//           <span>Rating: {decoration.ratings}/5</span>
//           <span>{decoration.isVerified ? 'Verified' : 'Not Verified'}</span>
//         </div>
//       </div>
//       <Link to={`/decorations/${decoration._id}`} className={styles.detailsLink}>
//         View Details
//       </Link>
//     </div>
//   );
// };

// export default DecorationCard;


import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DecorationCard.module.css';

const DecorationCard = ({ decoration }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        {decoration.decorationimgUrl && decoration.decorationimgUrl[0] && (
          <img
            src={decoration.decorationimgUrl[0]}
            alt={decoration.title}
            className={styles.image}
          />
        )}
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.content}>
        <div className={styles.titleWrapper}>
          <h3 className={styles.title}>{decoration.title}</h3>
          <p className={styles.name}>{decoration.name}</p>
        </div>

        <p className={styles.description}>
          {decoration.description?.substring(0, 100)}...
        </p>

        {/* Optional: Uncomment if needed */}
        {/* <div className={styles.rating}>
          <span className={`${styles.star} ${styles.filled}`}>★</span>
          <span>{decoration.ratings}/5</span>
        </div>

        <div className={styles.verifiedBadge}>
          <span className={styles.verified}>
            {decoration.isVerified ? "✔ Verified" : "✖ Not Verified"}
          </span>
        </div> */}

        <Link
          to={`/decorations/${decoration._id}`}
          className={styles.detailsLink}
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default DecorationCard;
