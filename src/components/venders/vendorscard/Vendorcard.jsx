import { Link } from "react-router-dom";
import styles from "./VendorCard.module.css";

const VendorCard = ({ vendor }) => {
  const { _id, name, title, description, profilePicUrl, address, phone } = vendor;

  const fallbackImage = "/images/placeholder.png"; // Replace with a local placeholder image

  return (
    <div className={styles.card}>
      <img
        src={profilePicUrl || fallbackImage}
        alt={title}
        className={styles.imagemain}
       
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <div className={styles.timename}>
        <p className={styles.date}><strong>Name:</strong> {name}</p>
        <p className={styles.time}><strong>Phone:</strong> {phone}</p>
        <p className={styles.time}><strong>Address:</strong> {address}</p>
        </div>
        {/* <p className={styles.description}>{description}</p> */}
        <Link to={`/vendordetail/${_id}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default VendorCard;
