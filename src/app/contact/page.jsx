import React from 'react'
import styles from "./contact.module.css";
import Image from 'next/image';

export const metadata = {
  title: 'Contact Page',
  description: 'Contact Page Description',
}

const ContactPage = () => {
  // console.log('it works here')
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src='/contact.png' alt='' fill 
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 50vw, 33vw"
        />
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