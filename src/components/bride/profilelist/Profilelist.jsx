import React, { useState } from 'react';
import ProfileCard from '../profilecard/Profilecard';
import styles from './Profilelist.module.css';

const ProfileList = ({ profiles }) => {
  const profilesPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastProfile = currentPage * profilesPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profilesPerPage;
  const currentProfiles = profiles.slice(indexOfFirstProfile, indexOfLastProfile);

  const totalPages = Math.ceil(profiles.length / profilesPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(prevPage => prevPage - 1);
    }
  };

  return (
    <div className={styles.profileListContainer}>
      <div className={styles.profileList}>
        {currentProfiles.length > 0 ? (
          currentProfiles.map(profile => (
            <ProfileCard key={profile._id} profile={profile} />
            
          ))
        ) : (
          <p>No profiles found</p>
        )}
      </div>
      <div className={styles.paginationButtons}>
        <button className={styles.previous} onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        
        <span> {currentPage} of {totalPages}</span>
        <button className={styles.next} onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ProfileList;