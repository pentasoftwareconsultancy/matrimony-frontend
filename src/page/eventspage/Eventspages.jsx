import { useEffect, useState } from "react";
import EventCard from "../../Components/events/eventCards/EventCard";
import styles from "./Eventspages.module.css";
import Eventshero from "../../Components/events/eventshero/Eventshero";
import Eventfilter from "../../Components/events/eventfilter/Eventfilter";
import ScrollingImages from "../../Components/events/scrolling/ScrollingImages";

const Eventspages = () => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Filter states
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedName, setSelectedName] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // State for unique locations and event names
  const [locations, setLocations] = useState([]);
  const [names, setNames] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/v1/events");
        const data = await response.json();
        if (data.success) {
          setEvents(data.data);
          setFilteredEvents(data.data);

          // Extract unique locations and names
          const uniqueLocations = [...new Set(data.data.map(event => event.location))];
          const uniqueNames = [...new Set(data.data.map(event => event.name))];

          setLocations(uniqueLocations);
          setNames(uniqueNames);
        } else {
          setError(data.message || "Failed to fetch events.");
        }
      } catch (err) {
        setError("Error fetching events: " + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Apply filters
  useEffect(() => {
    const filtered = events.filter((event) => {
      const matchesLocation = selectedLocation
        ? event.location?.toLowerCase() === selectedLocation.toLowerCase()
        : true;
      const matchesName = selectedName
        ? event.name?.toLowerCase() === selectedName.toLowerCase()
        : true;
      const matchesQuery = searchQuery
        ? (event.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.description?.toLowerCase().includes(searchQuery.toLowerCase()))
        : true;

      return matchesLocation && matchesName && matchesQuery;
    });

    setFilteredEvents(filtered);
  }, [events, selectedLocation, selectedName, searchQuery]);

  if (loading) return <p>Loading events...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.container}>
      {/* <Eventshero /> */}
      
      <ScrollingImages/>
      
      <Eventfilter
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        selectedName={selectedName}
        setSelectedName={setSelectedName}
        handleSearch={setSearchQuery}
        locations={locations}
        names={names}
      />
      <h1 className={styles.heading}>Events</h1>
      <div className={styles.main}>
      <div className={styles.eventGrid}>
        {filteredEvents.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Eventspages;
