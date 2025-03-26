import React, { useState } from "react";
import City from "../city/City";
import MotherTongue from "../motherTongue/MotherTongue";
import EducationField from "../educationField/EducationField";
import AnnualIncome from "../annualIncome/AnnualIncome";
import styles from "./Sidebar.module.css"; // Import CSS module

const Sidebar = ({ handleFilterChange }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown);
  };

  return (
    <div className={styles.sidebar}>
      <h3>Filter</h3>

      {/* City Filter */}
      <City handleFilterChange={handleFilterChange} />

      {/* Mother Tongue Filter */}
      {/* <div className={styles.filterItem}>
        <div className={styles.main}>
        <div className={styles.field}>Mother Tongue</div>
        <button className={styles.mainbutton} onClick={() => toggleDropdown("motherTongue")}>
          {openDropdown === "motherTongue" ? "-" : "+"}
        </button>
        </div>
        {openDropdown === "motherTongue" && (
          <MotherTongue handleFilterChange={handleFilterChange} />
        )}
      </div> */}

      {/* Education Field Filter */}
      <div className={styles.filterItem}>
      <div className={styles.main}>
        <div className={styles.field}>Education Field</div>
        <button className={styles.mainbutton} onClick={() => toggleDropdown("educationField")}>
          {openDropdown === "educationField" ? "-" : "+"}
        </button>
        </div>
        {openDropdown === "educationField" && (
          <EducationField handleFilterChange={handleFilterChange} />
        )}
      </div>

      {/* Annual Income Filter */}
      <div className={styles.filterItem}>
      <div className={styles.main}>
        <div className={styles.field}>Annual Income</div>
        <button className={styles.mainbutton} onClick={() => toggleDropdown("annualIncome")}>
          {openDropdown === "annualIncome" ? "-" : "+"}
        </button>
        </div>
        {openDropdown === "annualIncome" && (
          <AnnualIncome handleFilterChange={handleFilterChange} />
        )}
      </div>
    </div>
  );
};

export default Sidebar;
