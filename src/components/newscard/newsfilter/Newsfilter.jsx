import React, { useState } from "react";
import { locations, categories, dates } from "../newdata/Newdata"; // Import data
import styles from "./NewsFilter.module.css"; // Updated CSS file name

const NewsFilter = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDate, setSelectedDate] = useState(""); // New filter for date

  return (
    <div className={styles.filterContainer}>
      <h2 className={styles.filterTitle}>Search News</h2>
      <div className={styles.filterBox}>
        <input
          type="text"
          placeholder="Find your next news"
          className={styles.filterInput}
        />
        <select
          className={styles.filterDropdown}
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
        >
          <option value="">News Location</option>
          {locations.map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))}
        </select>
        <select
          className={styles.filterDropdown}
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">News Category</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select
          className={styles.filterDropdown}
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)} // Handling date change
        >
          <option value="">News Date</option>
          {dates.map((date, index) => (
            <option key={index} value={date}>
              {date}
            </option>
          ))}
        </select>
        <button className={styles.searchButton}>Search Now</button>
      </div>
      <p className={styles.footerText}>Discover Latest News</p>
    </div>
  );
};

export default NewsFilter;
