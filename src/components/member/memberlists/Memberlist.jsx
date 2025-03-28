import React, { useState, useEffect } from 'react';
import MemberCard from '../membercard/Membercard';
import MemberDetail from '../memberdetails/Memberdetail';
import styles from './Memberlist.module.css';

const MemberList = () => {
  const [members, setMembers] = useState([]); // State for all members
  const [loading, setLoading] = useState(true); // State for loading status
  const [error, setError] = useState(""); // State for errors
  const [selectedMember, setSelectedMember] = useState(null); // State for the selected member

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/v1/sanchalak"); // Backend API
        const data = await response.json();
        if (data.success) {
          setMembers(data.data);
        } else {
          setError(data.message || "Failed to fetch members.");
        }
      } catch (err) {
        setError("Error fetching members: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  if (loading) return <p>Loading members...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.container}>
      <div className={styles.cardGrid}>
        {members.map((member) => (
          <MemberCard
            key={member._id} // Use `_id` (or whatever unique identifier your backend provides)
            member={member}
            onClick={() => setSelectedMember(member)} // Set the selected member
          />
        ))}
      </div>

      {/* Render MemberDetail only if a member is selected */}
      {selectedMember && (
        <div className={styles.detailOverlay}>
          <div className={styles.detailModal}>
            <button
              className={styles.closeButton}
              onClick={() => setSelectedMember(null)} // Clear selected member on close
            >
              &times;
            </button>
            <MemberDetail member={selectedMember} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MemberList;
