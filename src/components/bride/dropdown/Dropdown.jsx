import React, { useState } from 'react';
import styles from './Dropdown.module.css';

const Dropdown = ({ label, options }) => {
  const [isOpen, setIsOpen] = useState(true); // Initially open
  const [selectedOption, setSelectedOption] = useState(null); // Track the selected option

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCheckboxChange = (option) => {
    // If the option is already selected, deselect it, otherwise select the new one
    setSelectedOption(selectedOption === option ? null : option);
  };

  return (
    <div className={styles.maniss}>
    <div className={styles.dropdown}>
      <div className={styles.header} onClick={toggleDropdown}>
        {label}
        <span className={styles.icon}>{isOpen ? '−' : '+'}</span>
      </div>
      {isOpen && (
        <ul className={styles.menu}>
          {options.map((option, index) => (
            <li key={index} className={styles.option}>
              <label className={styles.main}>
                <input className={styles.checkbox}
                  type="checkbox"
                  checked={selectedOption === option} 
                  onChange={() => handleCheckboxChange(option)}
                />
                {option}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
    </div>
  );
};

export default Dropdown;
