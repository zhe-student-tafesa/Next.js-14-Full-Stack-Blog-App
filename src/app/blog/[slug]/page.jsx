import React from 'react'
import styles from "./singleblog.module.css";
import Image from 'next/image';

const SingleBlogPage = () => {
  return (
    <div className={styles.container}>

      <div className={styles.imgContainer}>
        <Image src='https://staging.miningskills.com.au/wp-content/uploads/2024/05/Post-6.jpg' className={styles.imgFeatured} fill />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detailContainer}>
          <Image src='https://staging.miningskills.com.au/wp-content/uploads/2024/05/Post-6.jpg' className={styles.avatar} width={50} height={50} alt='' />
          <div className={styles.detail}>
            <p className={styles.detailTitle}>Author</p>
            <p className={styles.detailValue}>detail Value</p>
          </div>
          <div className={styles.detail}>
            <p className={styles.detailTitle}>Published</p>
            <p className={styles.detailValue}>detail Value2</p>
          </div>
        </div>

        <p className={styles.desc}>
          This is an example page. It’s different from a blog post because it will stay in one place and will show up in your site navigation (in most themes).
          This is an example page. It’s different from a blog post because it will stay in one place and will show up in your site navigation (in most themes).
          This is an example page. It’s different from a blog post because it will stay in one place and will show up in your site navigation (in most themes).

        </p>
      </div>
    </div>
  )
}

export default SingleBlogPage 