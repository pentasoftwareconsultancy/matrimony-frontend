// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import styles from "./Eventsdetail.module.css";
// import event1 from "../image/image3.jpg" // Importing the background image

// const Eventsdetail = () => {
//   const { id } = useParams(); // Get event ID from URL
//   const [event, setEvent] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   useEffect(() => {
//     const fetchEvent = async () => {
//       try {
//         const response = await fetch(`https://matrimonybackend-nd5n.onrender.com/api/v1/events/${id}`);
//         const data = await response.json();
//         if (data.success) {
//           setEvent(data.data); // Populate event details
//         } else {
//           setError(data.message || "Failed to fetch event details.");
//         }
//       } catch (err) {
//         setError("Error fetching event: " + err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEvent();
//   }, [id]);

//   if (loading) return <p>Loading event details...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div
//       className={styles.cardDetail}
//       style={{
//         backgroundImage: `url(${event1})`, // Inline background image style
//         backgroundSize: "cover", // Makes sure the image covers the whole container
//         backgroundPosition: "center", // Centers the background image
//         backgroundRepeat: "no-repeat", // Prevents repeating the background image
//       }}
//     >
//       <h1 className={styles.name}>{event.name}</h1>
//       <div className={styles.eventContent}>
//         <img
//           src={event.imageUrl || "https://via.placeholder.com/300"}
//           alt={event.name}
//           className={styles.imagemain}
//         />
//         <div className={styles.textContent}>
//           <p className={styles.eventDetails}>
//             <strong>Location:</strong> {event.location}
//           </p>
//           <p className={styles.eventDetails}>
//             <strong>Date:</strong> {new Date(event.date).toLocaleDateString()}
//           </p>
//           <p className={styles.eventDetails}>
//             <strong>Time Of Event:</strong> {event.timeOfEvent}
//           </p>
          
//           <p className={styles.eventDetails}>
//             <strong>Contact No:</strong> {event.contact}
//           </p>
//           <p className={styles.eventDetails}>
//             <strong>Category:</strong> {event.category}
//           </p>
//           <p className={styles.eventDetails}>
//             <strong>Organizer:</strong> {event.organizer || "N/A"}
//           </p>
//         </div>
//       </div>
//       <div className={styles.descriptionmain}>
//         <p className={styles.description}>{event.description}</p>
//       </div>
//       <div className={styles.attendees}>
//         <h3 className={styles.attendeemain}>Attendees:</h3>
//         {event.attendees && event.attendees.length > 0 ? (
//           <ul className={styles.maincard}>
//             {event.attendees.map((attendee, index) => (
//               <li key={index} className={styles.attendee}>
//                 <img
//                   src={attendee.image || "https://via.placeholder.com/50"}
//                   alt={attendee.name}
//                   className={styles.attendeeImage}
//                 />
//                 <div className={styles.phone}>
//                   <p><strong>{attendee.name}</strong></p>
//                   <p>{attendee.phone}</p>
//                   <p>{attendee.email}</p>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No attendees yet.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Eventsdetail;




import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Eventsdetail.module.css";
import eventBg from "../image/image3.jpg";
import { FaMapMarkerAlt, FaCalendarAlt, FaClock, FaPhone, FaTag, FaUserFriends } from "react-icons/fa";

const Eventsdetail = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`https://matrimonybackend-nd5n.onrender.com/api/v1/events/${id}`);
        const data = await response.json();
        if (data.success) {
          setEvent(data.data);
        } else {
          setError(data.message || "Failed to fetch event details.");
        }
      } catch (err) {
        setError("Error fetching event: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) return <div className={styles.loadingContainer}><div className={styles.loadingSpinner}></div></div>;
  if (error) return <div className={styles.errorContainer}><p>{error}</p></div>;

  return (
    <div className={styles.pageContainer} style={{ backgroundImage: `url(${eventBg})` }}>
      <div className={styles.cardDetail}>
        <div className={styles.eventHeader}>
          <h1 className={styles.name}>{event.name}</h1>
          <div className={styles.headerMeta}>
            <span className={styles.categoryBadge}>
              <FaTag className={styles.icon} /> {event.category}
            </span>
            <span className={styles.organizer}>
              <FaUserFriends className={styles.icon} /> {event.organizer || "Event Team"}
            </span>
          </div>
        </div>
        
        <div className={styles.eventContent}>
          <div className={styles.imageSection}>
            <img
              src={event.imageUrl || "https://via.placeholder.com/600x400"}
              alt={event.name}
              className={styles.imagemain}
            />
          </div>
          
          <div className={styles.detailsSection}>
            <div className={styles.detailCard}>
              <div className={styles.detailItem}>
                <FaMapMarkerAlt className={styles.icon} />
                <div>
                  <h3>Location</h3>
                  <p>{event.location}</p>
                </div>
              </div>
              
              <div className={styles.detailItem}>
                <FaCalendarAlt className={styles.icon} />
                <div>
                  <h3>Date</h3>
                  <p>{new Date(event.date).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}</p>
                </div>
              </div>
              
              <div className={styles.detailItem}>
                <FaClock className={styles.icon} />
                <div>
                  <h3>Time</h3>
                  <p>{event.timeOfEvent}</p>
                </div>
              </div>
              
              <div className={styles.detailItem}>
                <FaPhone className={styles.icon} />
                <div>
                  <h3>Contact</h3>
                  <p>{event.contact}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.descriptionSection}>
          <h2 className={styles.sectionTitle}>Event Description</h2>
          <p className={styles.description}>{event.description}</p>
        </div>
        
        <div className={styles.attendeesSection}>
          <h2 className={styles.sectionTitle}>
            <FaUserFriends className={styles.icon} /> Attendees
          </h2>
          
          {event.attendees && event.attendees.length > 0 ? (
            <div className={styles.attendeesGrid}>
              {event.attendees.map((attendee, index) => (
                <div key={index} className={styles.attendeeCard}>
                  <div className={styles.attendeeHeader}>
                    <img
                      src={attendee.image || "https://via.placeholder.com/100"}
                      alt={attendee.name}
                      className={styles.attendeeImage}
                    />
                    <h3>{attendee.name}</h3>
                  </div>
                  <div className={styles.attendeeDetails}>
                    <p className={styles.phone}>{attendee.phone}</p>
                    <p className={styles.email}>{attendee.email}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.noAttendees}>
              <p>No attendees yet. Be the first to join!</p>
              <button className={styles.joinButton}>Join Event</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Eventsdetail;