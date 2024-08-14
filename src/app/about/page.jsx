import React from 'react'
import styles from "./about.module.css";
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className={styles.imageContainer}>
      {/* <Image src="/about.png"  alt='' width={500} height={500}/> */}
      <Image src="https://staging.miningskills.com.au/wp-content/uploads/2024/05/site-icon.png"  alt='' fill />
    </div>
  )
}

export default AboutPage