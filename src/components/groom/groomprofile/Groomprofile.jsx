import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import styles from "./Groomprofile.module.css";

const Groomprofile = ({ userProfile = {} }) => { // Default `userProfile` to an empty object
  const navigate = useNavigate(); // Hook for navigation

  // Function to handle click on the card and navigate to the detailed profile
  const handleCardClick = () => {
    if (userProfile._id) {
      navigate(`/profile/${userProfile._id}`); // Navigate to the detailed profile page with the profile ID
    }
  };

  return (
    <div className={styles.card} onClick={handleCardClick}>
      <div className={styles.content}>
        {/* Profile Image */}
        <div className={styles.image}>
          <img
            src={userProfile.profilePhoto || "https://via.placeholder.com/100"} // Fallback to placeholder
            alt={userProfile.fullName || "Avatar"} // Fallback to "Avatar"
            className={styles.avatar}
          />
        </div>

        {/* Profile Information */}
        <div className={styles.main}>
          <h2 className={styles.fullName}>{userProfile.fullName || "Unknown"}</h2>
          <div className={styles.info}>
            <p><strong>Age:</strong> {userProfile.age || "N/A"}</p>
            <p><strong>Mobile Number:</strong> {userProfile.mobileNumber || "N/A"}</p>
            <p><strong>Mother Tongue:</strong> {userProfile.motherTongue || "N/A"}</p>
            {/* Uncomment if Date of Birth is required */}
            {/* <p><strong>Date of Birth:</strong> {userProfile.dateOfBirth || "N/A"}</p> */}
            <p><strong>Location:</strong> {userProfile.city || "N/A"}</p>
            <p><strong>Education Level:</strong> {userProfile.educationLevel || "N/A"}</p>
            <p><strong>Annual Income:</strong> {userProfile.annualIncome || "N/A"}</p>
            <button className={styles.connect}>Connect Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Groomprofile;
