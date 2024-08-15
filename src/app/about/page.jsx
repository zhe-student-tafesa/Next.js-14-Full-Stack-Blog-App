import React from 'react'
import styles from "./about.module.css";
import Image from 'next/image';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textcontainer}>
        <h2 className={styles.subheading}>About Agency</h2>
        <h1 className={styles.heading}>We create digital ideas that are bigger, bolder, braver and better.</h1>
        <p className={styles.desc}> We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.</p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h2 className={styles.boxNunber}>10+</h2>
            <p className={styles.boxDesc}>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h2 className={styles.boxNunber}>324K+</h2>
            <p className={styles.boxDesc}>People reached</p>
          </div>
          <div className={styles.box}>
            <h2 className={styles.boxNunber}>5K+</h2>
            <p className={styles.boxDesc}>Services and plugins</p>
          </div>
        </div>
      </div>
      <div className={styles.imagecontainer}>
        <Image className={styles.aboutImage} src="/about.png" 
         alt='' fill sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
}

export default AboutPage