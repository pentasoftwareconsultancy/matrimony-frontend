import React, { useState, useEffect } from 'react';
import MemberCard from '../membercard/Membercard';
import MemberDetail from '../memberdetails/Memberdetail'; // Corrected path relative to MemberList
import styles from './Memberlist.module.css';

const MemberList = () => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/v1/sanchalak");
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
            key={member._id}
            member={member}
            onClick={() => setSelectedMember(member)}
          />
        ))}
      </div>

      {selectedMember && (
        <div className={styles.detailOverlay}>
          <div className={styles.detailModal}>
            <button
              className={styles.closeButton}
              onClick={() => setSelectedMember(null)}
            >
              ×
            </button>
            <MemberDetail member={selectedMember} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MemberList;