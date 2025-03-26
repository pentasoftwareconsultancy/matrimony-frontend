import { useEffect, useState } from "react";
import Groomprofile from "../groomprofile/Groomprofile"; // Import Groomprofile component
import styles from "./Groomlist.module.css"; // CSS for layout

const Groomlist = () => {
  const [userProfiles, setUserProfiles] = useState([]); // Store profiles from backend
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(""); // Error state

  // Fetch profiles from backend
  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/v1/bride-groom?gender=male");
        const data = await response.json();

        if (response.ok && data.success) {
          setUserProfiles(data.data); // Store profiles if response is successful
        } else {
          setError(data.message || "Failed to fetch profiles.");
        }
      } catch (err) {
        setError("Error fetching profiles: " + err.message);
      } finally {
        setLoading(false); // Stop loading after the fetch
      }
    };

    fetchProfiles();
  }, []);

  if (loading) return <p>Loading profiles...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.profilesContainer}>
      {userProfiles.map((userProfile) => (
        <Groomprofile key={userProfile._id} userProfile={userProfile} /> // Pass userProfile as prop
      ))}
    </div>
  );
};

export default Groomlist;
