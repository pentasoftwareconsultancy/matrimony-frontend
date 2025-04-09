import React from "react";
import styles from "./Maritalstatus.module.css";

const MaritalStatus = ({ handleFilterChange }) => {
  const maritalStatuses = [
    { label: "All", value: "" },
    { label: "Single", value: "single" },
    { label: "Married", value: "married" },
    { label: "Divorced", value: "divorced" },
    { label: "Widowed", value: "widowed" },
  ];

  return (
    <div className={styles.dropdown}>
      {maritalStatuses.map((status) => (
        <label key={status.value} className={styles.radio}>
          <input
            type="radio"
            name="maritalStatus"
            value={status.value}
            onChange={(e) =>
              handleFilterChange("selectedMaritalStatus", e.target.value)
            }
          />
          {status.label}
        </label>
      ))}
    </div>
  );
};

export default MaritalStatus;