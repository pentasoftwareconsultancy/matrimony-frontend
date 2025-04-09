import React, { useState, useEffect } from 'react';
import styles from "./Bridemain.module.css";
import ProfileList from '../profilelist/Profilelist';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import Sidebar from "../sidebar/sidebarmain/Sidebar";

function Bridemain() {
  const [query, setQuery] = useState("");
  const [profiles, setProfiles] = useState([]);
  const [filters, setFilters] = useState({
    selectedCategory: '',
    selectedCity: '',
    selectedMotherTongue: '',
    selectedEducationField: '',
    selectedAnnualIncome: '',
    selectedMaritalStatus: '',
    selectedHeight: ''
  });

  useEffect(() => {
    const fetchProfiles = async () => {
      const response = await fetch('https://matrimonybackend-nd5n.onrender.com/api/v1/bride-groom?gender=female');
      const data = await response.json();
      if (data.success) {
        setProfiles(data.data);
      }
    };
    fetchProfiles();
  }, []);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleFilterChange = (filterName, value) => {
    setFilters(prevState => ({
      ...prevState,
      [filterName]: value
    }));
  };

  const filteredProfiles = profiles.filter(profile => {
    const matchesQuery = profile.fullName.toLowerCase().includes(query.toLowerCase()) ||
                          profile.city?.toLowerCase().includes(query.toLowerCase()) ||
                          profile.motherTongue?.toLowerCase().includes(query.toLowerCase());

    return (
      matchesQuery &&
      (filters.selectedCategory ? profile[filters.selectedCategory]?.toLowerCase().includes(query.toLowerCase()) : true) &&
      (filters.selectedCity ? profile.city?.toLowerCase() === filters.selectedCity.toLowerCase() : true) &&
      (filters.selectedMotherTongue ? profile.motherTongue?.toLowerCase() === filters.selectedMotherTongue.toLowerCase() : true) &&
      (filters.selectedEducationField ? profile.educationField?.toLowerCase() === filters.selectedEducationField.toLowerCase() : true) &&
      (filters.selectedAnnualIncome ? profile.annualIncome?.toLowerCase() === filters.selectedAnnualIncome.toLowerCase() : true) &&
      (filters.selectedMaritalStatus ? profile.maritalstatus?.toLowerCase() === filters.selectedMaritalStatus.toLowerCase() : true) &&
      (filters.selectedHeight ? profile.height?.toLowerCase() === filters.selectedHeight.toLowerCase() : true)
    );
  });

  return (
    <div className={styles.Bridemain}>
      <div className={styles.sidebar}>
        <Sidebar handleFilterChange={handleFilterChange} />
      </div>
      <div className={styles.mainContent}>
        <div className={styles.searchWrapper}>
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            placeholder="Search profiles..."
            className={styles.searchInput}
          />
          <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
        </div>
        <ProfileList profiles={filteredProfiles} />
      </div>
    </div>
  );
}

export default Bridemain;
