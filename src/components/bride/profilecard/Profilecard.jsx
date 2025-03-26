// import React from "react";
// import { useNavigate } from "react-router-dom"; // Import useNavigate
// import styles from "./ProfileCard.module.css";

// const ProfileCard = ({ profile }) => {
//   const navigate = useNavigate(); // Hook for navigation

//   // Function to handle click on the card and navigate to the detailed profile
//   const handleCardClick = () => {
//     navigate(`/profile/${profile._id}`); // Navigate to the detailed profile page with the profile ID
//   };

//   return (
//     <div className={styles.card} onClick={handleCardClick}>
//       <div className={styles.content}>
//         {/* Profile Image */}
//         <div className={styles.image}>
//           <img
//             src={profile.profilePhoto  || "https://via.placeholder.com/100"}
//             alt={profile.fullName || "Avatar"}
//             className={styles.avatar}
//           />
//         </div>
        
//         {/* Profile Info */}
//         <div className={styles.main}>
//           <h2 className={styles.fullName}>{profile.fullName}</h2>
//           <div className={styles.info}>
//             <p><strong>Age:</strong> {profile.age}</p>
//             <p><strong>Mobile Number:</strong> {profile.mobileNumber}</p>
//             <p><strong>Mother Tongue:</strong>{profile.motherTongue}</p>
//             {/* <p><strong>Date of Birth:</strong> {profile.dateOfBirth}</p> */}
//             <p><strong>Location:</strong> {profile.city}</p>
//             <p><strong>Education Level:</strong> {profile.educationLevel}</p>
//             <p><strong>Annual Income:</strong> {profile.annualIncome}</p>
//             <button className={styles.connect}>Connect Now</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileCard;


import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import styles from "./ProfileCard.module.css"; // ProfileCard styling
import stackingStyles from "./ProfileCard.module.css"; // Import stacking card styles
import Scrolltotop from "../../scrolltotops/Scrolltotop";

// Function to capitalize the first letter of a string
const capitalizeFirstLetter = (name) => {
  if (!name) return "";
  return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
};

const formatDate = (dob) => {
  if (!dob) return "";
  const date = new Date(dob);
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};
const ProfileCard = ({ profile, cardIndex }) => {
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle click on the card and navigate to the detailed profile
  const handleCardClick = () => {
    navigate(`/profile/${profile._id}`); // Navigate to the detailed profile page with the profile ID
  };

  return (
    <div
      className={`${styles.card} ${stackingStyles.card} ${stackingStyles[`card${cardIndex + 1}`]}`} // Apply stacking card class
      onClick={handleCardClick}
    >
      <Scrolltotop/>
      <div className={styles.content}>
        {/* Profile Image */}
        <div className={styles.image}>
          <img
            src={profile.profilePhoto || "https://via.placeholder.com/100"}
            alt={profile.fullName || "Avatar"}
            className={styles.avatar}
          />
        </div>

        {/* Profile Info */}
        <div className={styles.main}>
          <h2 className={styles.fullName}>
            {capitalizeFirstLetter(profile.fullName)} {/* Capitalize first letter */}
          </h2>
          
          <div className={styles.info}>
            <p><strong>Name :</strong> {capitalizeFirstLetter(profile.fullName)}</p>
            <p><strong>Date of Birth:</strong> {formatDate(profile.dateOfBirth)}</p>
            <p><strong>Height:</strong> {profile.height}</p>
            <p><strong>Complexion:</strong> {profile.complexion}</p>
            <p><strong>Mobile Number:</strong> {profile.mobileNumber}</p>
            {/* <p><strong>Mother Tongue:</strong> {profile.motherTongue}</p> */}
            {/* <p><strong>Date of Birth:</strong> {profile.dateOfBirth}</p> */}
            <p><strong>Location:</strong> {profile.city}</p>
            <p><strong>Father's Name:</strong> {profile.fatherName}</p>
            <p><strong>Education Level:</strong> {profile.educationLevel}</p>
            <p><strong>Mobile Number:</strong> {profile.mobileNumber}</p>
            <p><strong>Annual Income:</strong> {profile.annualIncome}</p>
          </div>
         
          <button className={styles.mains_same}>
            <div className={styles.submit}>Connect Now</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;

