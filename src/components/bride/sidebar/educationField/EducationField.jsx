import React from "react";
import styles from "./EducationField.module.css";

const EducationField = ({ handleFilterChange }) => {
  const fields = [
    "Administration & HR",
    "Advertising, Media & Entertainment",
    "Agriculture",
    "Airline & Aviation",
    "BPO, KPO, & Customer Support",
    "Beauty, Fashion & Jewellery Designers",
    "Civil Services / Law Enforcement",
    "Corporate Professionals",
    "Defense",
    "Education & Training",
    "Engineering",
    "IT & Software Engineering",
    "Legal",
    "Medical & Healthcare",
    "Non Working",
    "Others",
    "Sales & Marketing",
  ];

  return (
    <div className={styles.dropdown}>
      {/* All Option */}
      <label className={styles.radio}>
        <input
          type="radio"
          value=""
          name="educationField"
          onChange={(e) =>
            handleFilterChange("selectedEducationField", e.target.value)
          }
        />
        All
      </label>

      {/* Other Education Field Options */}
      {fields.map((field) => (
        <label key={field} className={styles.radio}>
          <input
            type="radio"
            value={field.toLowerCase().replace(/\s+/g, "_")}
            name="educationField"
            onChange={(e) =>
              handleFilterChange("selectedEducationField", e.target.value)
            }
          />
          {field}
        </label>
      ))}
    </div>
  );
};

export default EducationField;