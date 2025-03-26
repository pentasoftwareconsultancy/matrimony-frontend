import React from 'react';
import styles from './Input.module.css';

function Input({ handleChange, value, title, name, color }) {
  return (
    <label className={styles.sidebarlabelcontainer}>
      <input onChange={handleChange} type="radio" value={value} name={name} />
      <span className={styles.checjmark} style={{ background: color }}></span>
      {title}
    </label>
  );
}

export default Input;
