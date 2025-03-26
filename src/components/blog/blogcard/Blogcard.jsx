import React from "react";
import { Link } from "react-router-dom";
import styles from "./BlogCard.module.css";

const BlogCard = ({ id, title, author, content, blogimageUrl }) => {
  return (
    <div className={styles.card}>
      <div className={styles.main}>
      <img src={blogimageUrl} alt={title} className={styles.imgmain} />
      </div>
      <div className={styles.details}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.author}><strong>By:</strong> {author}</p>
        <p className={styles.content}>{content.slice(0, 100)}...</p>
        <Link to={`/blog/${id}`} className={styles.readMore}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
