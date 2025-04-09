import React, { useState, useEffect } from "react";
import styles from "./City.module.css";

const City = ({ handleFilterChange }) => {
  const config = {
    cUrl: "https://api.countrystatecity.in/v1/countries",
    ckey: "NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA==",
  };

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  useEffect(() => {
    fetch(config.cUrl, {
      headers: { "X-CSCAPI-KEY": config.ckey },
    })
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error loading countries:", error));
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      fetch(`${config.cUrl}/${selectedCountry}/states`, {
        headers: { "X-CSCAPI-KEY": config.ckey },
      })
        .then((response) => response.json())
        .then((data) => setStates(data))
        .catch((error) => console.error("Error loading states:", error));
    } else {
      setStates([]);
    }
    setSelectedState("");
    setSelectedCity("");
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedCountry && selectedState) {
      fetch(`${config.cUrl}/${selectedCountry}/states/${selectedState}/cities`, {
        headers: { "X-CSCAPI-KEY": config.ckey },
      })
        .then((response) => response.json())
        .then((data) => setCities(data))
        .catch((error) => console.error("Error loading cities:", error));
    } else {
      setCities([]);
    }
    setSelectedCity("");
  }, [selectedCountry, selectedState]);

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
    handleFilterChange("selectedCity", e.target.value); // Pass city selection to parent
  };

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor="country">
        Country
      </label>
      <select
        id="country"
        className={styles.select}
        value={selectedCountry}
        onChange={(e) => setSelectedCountry(e.target.value)}
      >
        <option value="">Select Country</option>
        {countries.map((country) => (
          <option key={country.iso2} value={country.iso2}>
            {country.name}
          </option>
        ))}
      </select>

      <label className={styles.label} htmlFor="state">
        State
      </label>
      <select
        id="state"
        className={styles.select}
        value={selectedState}
        onChange={(e) => setSelectedState(e.target.value)}
        disabled={!selectedCountry}
      >
        <option value="">Select State</option>
        {states.map((state) => (
          <option key={state.iso2} value={state.iso2}>
            {state.name}
          </option>
        ))}
      </select>

      <label className={styles.label} htmlFor="city">
        City
      </label>
      <select
        id="city"
        className={styles.select}
        value={selectedCity}
        onChange={handleCityChange}
        disabled={!selectedState}
      >
        <option value="">Select City</option>
        {cities.map((city) => (
          <option key={city.iso2} value={city.iso2}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default City;