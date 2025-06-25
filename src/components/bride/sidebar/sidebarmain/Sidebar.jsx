import React, { useState } from "react";
import City from "../city/City";
import MotherTongue from "../motherTongue/MotherTongue";
import EducationField from "../educationField/EducationField";
import AnnualIncome from "../annualIncome/AnnualIncome";
import MaritalStatus from "../maritalStatus/MaritalStatus";
import Height from "../height/Height";
import styles from "./Sidebar.module.css";

const Sidebar = ({ handleFilterChange }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className={styles.sidebar}>
      <h3 className={styles.sidebarTitle}>Filters</h3>

      <div className={styles.filterItem}>
        <div className={styles.header}>
          <span className={styles.fieldcity}>City</span>
          {/* City is always visible, no toggle */}
        </div>
        <City handleFilterChange={handleFilterChange} />
      </div>

      {/* <div className={styles.filterItem}>
        <div className={styles.header}>
          <span className={styles.field}>Mother Tongue</span>
          <button
            className={styles.toggleButton}
            onClick={() => toggleDropdown("motherTongue")}
          >
            {openDropdown === "motherTongue" ? "−" : "+"}
          </button>
        </div>
        {openDropdown === "motherTongue" && (
          <MotherTongue handleFilterChange={handleFilterChange} />
        )}
      </div> */}

      <div className={styles.filterItem}>
        <div className={styles.header}>
          <span className={styles.field}>Education Field</span>
          <button
            className={styles.toggleButton}
            onClick={() => toggleDropdown("educationField")}
          >
            {openDropdown === "educationField" ? "−" : "+"}
          </button>
        </div>
        {openDropdown === "educationField" && (
          <EducationField handleFilterChange={handleFilterChange} />
        )}
      </div>

      <div className={styles.filterItem}>
        <div className={styles.header}>
          <span className={styles.field}>Annual Income</span>
          <button
            className={styles.toggleButton}
            onClick={() => toggleDropdown("annualIncome")}
          >
            {openDropdown === "annualIncome" ? "−" : "+"}
          </button>
        </div>
        {openDropdown === "annualIncome" && (
          <AnnualIncome handleFilterChange={handleFilterChange} />
        )}
      </div>

      <div className={styles.filterItem}>
        <div className={styles.header}>
          <span className={styles.field}>Marital Status</span>
          <button
            className={styles.toggleButton}
            onClick={() => toggleDropdown("maritalStatus")}
          >
            {openDropdown === "maritalStatus" ? "−" : "+"}
          </button>
        </div>
        {openDropdown === "maritalStatus" && (
          <MaritalStatus handleFilterChange={handleFilterChange} />
        )}
      </div>

      <div className={styles.filterItem}>
        <div className={styles.header}>
          <span className={styles.field}>Height</span>
          <button
            className={styles.toggleButton}
            onClick={() => toggleDropdown("height")}
          >
            {openDropdown === "height" ? "−" : "+"}
          </button>
        </div>
        {openDropdown === "height" && (
          <Height handleFilterChange={handleFilterChange} />
        )}
      </div>
    </div>
  );
};

export default Sidebar;



