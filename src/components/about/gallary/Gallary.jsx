import React from 'react'
import styles from "./Gallary.module.css"
import image1 from "../../about/image/image2.jpg"
import image2 from "../../about/image/image6.jpg"
import image3 from "../../about/image/image7.jpg"
function Gallary() {
  return (
    <div>

        <div className={styles.container}>
            <div className={styles.container1}><img src={image1}/></div>
            <div className={styles.container1}><img src={image2}/></div>
            <div className={styles.container1}><img src={image1}/></div>
            <div className={styles.container1}><img src={image3}/></div>
        </div>
    </div>
  )
}

export default Gallary