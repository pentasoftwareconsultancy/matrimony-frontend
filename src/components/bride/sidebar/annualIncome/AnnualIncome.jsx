import React from "react";
import styles from "./Annullncome.module.css";

const AnnualIncome = ({ handleFilterChange }) => {
  const incomeRanges = [
    { label: "All", value: "" },
    { label: "₹0 - ₹5L", value: "500000" },
    { label: "₹5L - ₹10L", value: "1000000" },
    { label: "₹10L - ₹15L", value: "1500000" },
    { label: "₹15L - ₹20L", value: "2000000" },
    { label: "₹20L+", value: "2000001" },
  ];

  return (
    <div className={styles.dropdown}>
      {incomeRanges.map((range) => (
        <label key={range.value} className={styles.radio}>
          <input
            type="radio"
            name="annualIncome"
            value={range.value}
            onChange={(e) =>
              handleFilterChange("selectedAnnualIncome", e.target.value)
            }
          />
          {range.label}
        </label>
      ))}
    </div>
  );
};

export default AnnualIncome;
