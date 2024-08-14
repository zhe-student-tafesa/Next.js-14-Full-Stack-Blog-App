import React from 'react'
import styles from "./contact.module.css";
import Image from 'next/image';

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src='/contact.png' fill />
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form} action=''>
          <input placeholder='Name and Surname'></input>
          <input placeholder='Email Address'></input>
          <input placeholder='Phone Number (Optional)'></input>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  )
}

export default ContactPage 