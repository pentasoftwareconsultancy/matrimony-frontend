// import { Link } from "react-router-dom";
// import styles from "./EventCard.module.css";

// const EventCard = ({ event }) => {
//   if (!event) {
//     console.error("Missing event data in EventCard.");
//     return null;
//   }

//   const {
//     _id,
//     name = "Untitled",
//     description = "No description",
//     imageUrl,
//     date,
//     location,
//   } = event;

//   // Limit description length
//   const truncateText = (text, limit) => {
//     return text.length > limit ? text.substring(0, limit) + "..." : text;
//   };

//   return (
//     <div className={styles.card}>
//       <img
//         src={imageUrl ? imageUrl : "https://png.pngtree.com/png-vector/20201030/ourmid/pngtree-event-vector-text-effects-with-transparent-background-png-image_103047.jpg"} // Fallback image
//         alt={name}
//         className={styles.image}
//       />
//       <div className={styles.content}>
//         <h3 className={styles.title}>{name}</h3>
//         <p className={styles.date}>
//           <strong>Date: </strong>
//           {date ? new Date(date).toLocaleDateString() : "No date available"}
//         </p>
//         <p className={styles.location}>
//           <strong>Location: </strong>{location || "No location available"}
//         </p>
//         <p className={styles.text}>
//           <strong>Description: </strong>{truncateText(description, 50)}
//         </p>
//         <Link to={`/events/${_id}`} className={styles.link}>
//           Read More
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default EventCard;

import { Link } from "react-router-dom";
import styles from "./EventCard.module.css";

const EventCard = ({ event }) => {
  if (!event) return null;

  const {
    _id,
    name = "Untitled Event",
    description = "No description available",
    imageUrl,
    date,
    location,
  } = event;

  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    return {
      monthDay: dateObj.toLocaleDateString(undefined, { month: 'short', day: 'numeric' }),
      time: dateObj.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', hour12: true }),
      weekday: dateObj.toLocaleDateString(undefined, { weekday: 'short' })
    };
  };

  const dateInfo = date ? formatDate(date) : {
    monthDay: "TBD",
    time: "",
    weekday: ""
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <div className={styles.gradientOverlay}></div>
        <img
          src={imageUrl || "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"}
          alt={name}
          className={styles.image}
        />
        
        <div className={styles.dateBadge}>
          <div className={styles.weekday}>{dateInfo.weekday}</div>
          <div className={styles.monthDay}>{dateInfo.monthDay}</div>
          {dateInfo.time && <div className={styles.time}>{dateInfo.time}</div>}
        </div>
      </div>
      
      <div className={styles.content}>
        <div className={styles.locationTag}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" fill="currentColor"/>
          </svg>
          {location || "Location TBD"}
        </div>
        
        <h3 className={styles.title}>{name}</h3>
        
        <p className={styles.description}>
          {description.length > 100 
            ? `${description.substring(0, 100)}...` 
            : description}
        </p>
        
        <div className={styles.footer}>
          <Link to={`/events/${_id}`} className={styles.link}>
            View Details
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18">
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="currentColor"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EventCard;