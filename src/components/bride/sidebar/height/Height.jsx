
// Height.jsx
import React from "react";
import styles from "./Height.module.css";

const Height = ({ handleFilterChange }) => {
  const heightRanges = [
    { label: "All", value: "" },
    { label: "Below 5'0\" (152 cm)", value: "152" },
    { label: "5'0\" - 5'3\" (152-160 cm)", value: "160" },
    { label: "5'3\" - 5'6\" (160-168 cm)", value: "168" },
    { label: "5'6\" - 5'9\" (168-175 cm)", value: "175" },
    { label: "5'9\" - 6'0\" (175-183 cm)", value: "183" },
    { label: "Above 6'0\" (183+ cm)", value: "184" },
  ];

  return (
    <div className={styles.container}>
     
      <div className={styles.dropdown}>
        {heightRanges.map((range) => (
          <label key={range.value} className={styles.radio}>
            <input
              type="radio"
              name="height"
              value={range.value}
              onChange={(e) =>
                handleFilterChange("selectedHeight", e.target.value)
              }
            />
            <span>{range.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Height;