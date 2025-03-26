import { Link } from "react-router-dom";
import styles from "./EventCard.module.css";

const EventCard = ({ event }) => {
  if (!event) {
    console.error("Missing event data in EventCard.");
    return null;
  }

  const {
    _id,
    name = "Untitled",
    description = "No description",
    imageUrl,
    date,
    location,
  } = event;

  // Limit description length
  const truncateText = (text, limit) => {
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  };

  return (
    <div className={styles.card}>
      <img
        src={imageUrl ? imageUrl : "https://png.pngtree.com/png-vector/20201030/ourmid/pngtree-event-vector-text-effects-with-transparent-background-png-image_103047.jpg"} // Fallback image
        alt={name}
        className={styles.image}
      />
      <div className={styles.content}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.date}>
          <strong>Date: </strong>
          {date ? new Date(date).toLocaleDateString() : "No date available"}
        </p>
        <p className={styles.location}>
          <strong>Location: </strong>{location || "No location available"}
        </p>
        <p className={styles.text}>
          <strong>Description: </strong>{truncateText(description, 50)}
        </p>
        <Link to={`/events/${_id}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
