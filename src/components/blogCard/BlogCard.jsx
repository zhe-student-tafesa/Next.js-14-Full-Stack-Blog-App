import React from 'react'
import styles from './blogCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

const BlogCard = ({ post }) => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image className={styles.img} alt='' src='https://staging.miningskills.com.au/wp-content/uploads/2024/05/Post-6.jpg' fill />
                </div>
                <span className={styles.date}>12.31.2024</span>
            </div>
            <div className={styles.bottom}>
                <h3 className={styles.title}>{post.title}</h3>
                <p className={styles.desc}>{post.body}</p>
                <Link href={`/blog/${post.id}`} className={styles.link}>READ MORE</Link>
            </div>
        </div>
    )
}

export default BlogCard