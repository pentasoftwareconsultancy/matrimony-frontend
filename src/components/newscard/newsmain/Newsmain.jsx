import React from 'react'
import styles from "./Newmain.module.css"
import Card from '../card/Card'
import Newcard from '../nescard/Newcard'
function Newsmain() {
  return (
    <div className={styles.main}>
        <div className={styles.Newsmain}></div>
        <div className={styles.Newsmain1}><Newcard/></div>
        <div className={styles.Newsmain2}></div>
    </div>
  )
}

export default Newsmain