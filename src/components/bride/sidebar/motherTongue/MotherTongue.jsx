import React from "react";
import styles from "./MotherTongue.module.css";

const MotherTongue = ({ handleFilterChange }) => {
  return (
    <div className={styles.dropdown}>
      <label className={styles.mainradio}>
        <input
          type="radio"
          value=""
          name="motherTongue"
          onChange={(e) =>
            handleFilterChange("selectedMotherTongue", e.target.value)
          }
          className={styles.radio}
        />
        All
      </label>

      {[
        "Marathi",
        "Hindi",
        "Konkani",
        "Gujarati",
        "Urdu",
        "Bhojpuri",
        "Kannada",
        "Tamil",
        "Malayalam",
      ].map((language) => (
        <label key={language} className={styles.mainradio}>
          <input
            type="radio"
            value={language.toLowerCase()}
            name="motherTongue"
            onChange={(e) =>
              handleFilterChange("selectedMotherTongue", e.target.value)
            }
            className={styles.radio}
          />
          {language}
        </label>
      ))}
    </div>
  );
};

export default MotherTongue;
