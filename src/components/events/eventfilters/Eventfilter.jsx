import React from "react";
import styles from "./Eventfilter.module.css";

const Eventfilter = ({ 
  selectedLocation, 
  setSelectedLocation, 
  selectedName, 
  setSelectedName, 
  handleSearch, 
  locations, 
  names 
}) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Search Event</h2>
      <div className={styles.searchBox}>
        <input
          type="text"
          placeholder="Find your next event"
          className={styles.input}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <select
          className={styles.dropdown}
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          <option value="">Event Location</option>
          {locations.map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))}
        </select>
        <select
          className={styles.dropdown}
          value={selectedName}
          onChange={(e) => setSelectedName(e.target.value)}
        >
          <option value="">Event Name</option>
          {names.map((name, index) => (
            <option key={index} value={name}>
              {name}
            </option>
          ))}
        </select>
        <button className={styles.button}>Search Now</button>
      </div>
    </div>
  );
};

export default Eventfilter;
