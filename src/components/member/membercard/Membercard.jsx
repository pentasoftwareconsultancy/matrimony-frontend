import React from "react";
import { Link } from "react-router-dom";
import styles from "./Membercard.module.css";

const MemberCard = ({ member }) => {
  return (
    <Link to={`/members/${member._id}`} className={styles.card}>
      <div className={styles.main}>
      <img src={member.profilePic} alt={member.name} className={styles.image} />
     
<div className={styles.maintext}>
      <h3 className={styles.name}>{member.name}</h3>
      <p className={styles.title}>{member.designation}</p>
      {/* <p className={styles.title}>{member.phone}</p> */}
      </div>
      </div>
    </Link>
  );
};

export default MemberCard;
