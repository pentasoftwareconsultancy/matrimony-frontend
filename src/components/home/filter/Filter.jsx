import React, { useState } from "react";
import styles from "./Filter.module.css";

const Filter = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    // Simulate an API call or form processing
    setTimeout(() => {
      setLoading(false);
      alert("Filters applied!");
    }, 2000);
  };

  return (
    <form className={styles.main} onSubmit={handleSubmit}>
      <div className={styles.filters}>
        {/* Gender */}
        <select className={styles.select} defaultValue="">
          <option value="" disabled>
            Gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        {/* Marital Status */}
        <select className={styles.select} defaultValue="">
          <option value="" disabled>
            Marital Status
          </option>
          <option value="unmarried">Unmarried</option>
          <option value="separated">Separated</option>
          <option value="widowed">Widowed</option>
        </select>

        {/* Caste */}
        <select className={styles.select} defaultValue="">
          <option value="" disabled>
            Caste
          </option>
          <option value="kunbi">Kunbi</option>
          <option value="maratha">Maratha</option>
        </select>

        {/* Education */}
        <select className={styles.select} defaultValue="">
          <option value="" disabled>
            Education
          </option>
          <option value="below_10th">Below 10th</option>
          <option value="12th">12th</option>
          <option value="graduate">Graduate</option>
          <option value="master">Master</option>
        </select>

        {/* Max Height */}
        <select className={styles.select} defaultValue="">
          <option value="" disabled>
            Max Height
          </option>
          <option value="4">4</option>
          <option value="4.5">4.5</option>
          <option value="5">5</option>
          <option value="5.5">5.5</option>
        </select>

        {/* Min Height */}
        <select className={styles.select} defaultValue="">
          <option value="" disabled>
            Min Height
          </option>
          <option value="5">5</option>
          <option value="5.5">5.5</option>
          <option value="6">6</option>
          <option value="6.5">6.5</option>
        </select>

        {/* Blood Group */}
        <select className={styles.select} defaultValue="">
          <option value="" disabled>
            Blood Group
          </option>
          <option value="a_positive">A+</option>
          <option value="a_negative">A-</option>
          <option value="b_positive">B+</option>
          <option value="b_negative">B-</option>
          <option value="ab_positive">AB+</option>
          <option value="ab_negative">AB-</option>
          <option value="o_positive">O+</option>
          <option value="o_negative">O-</option>
        </select>

        {/* Min Age */}
        <select className={styles.select} defaultValue="">
          <option value="" disabled>
            Min Age
          </option>
          {[...Array(8)].map((_, i) => (
            <option key={i} value={18 + i}>
              {18 + i}
            </option>
          ))}
        </select>

        {/* Max Age */}
        <select className={styles.select} defaultValue="">
          <option value="" disabled>
            Max Age
          </option>
          {[...Array(11)].map((_, i) => (
            <option key={i} value={25 + i}>
              {25 + i}
            </option>
          ))}
        </select>

        {/* Apply Button */}
      
      </div>
      <div className={styles.buttonContainer}>
          <button type="submit" className={styles.apply} disabled={loading}>
            {loading ? "Applying..." : "Apply Now"}
          </button>
        </div>
    </form>
  );
};

export default Filter;
