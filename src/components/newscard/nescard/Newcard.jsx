import React from "react";
import { Link } from "react-router-dom";
import styles from "./Newcard.module.css"; // Make sure this path is correct

const Newcard = ({ id, title, description, author, content, image }) => {
  return (
    <div className={styles.main}>

    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.author}>By: {author}</p>
        <p className={styles.text}>{description}</p>
        <Link to={`/card-detail/${id}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>

    </div>
  );
};

export default Newcard;
