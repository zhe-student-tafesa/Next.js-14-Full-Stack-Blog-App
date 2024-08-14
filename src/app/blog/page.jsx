import React from 'react'
import styles from "./blog.module.css";
import BlogCard from '@/components/blogCard/BlogCard';

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <BlogCard />
      </div>
      <div className={styles.post}>
        <BlogCard />
      </div>
      <div className={styles.post}>
        <BlogCard />
      </div>
      <div className={styles.post}>
        <BlogCard />
      </div>

    </div>
  )
}

export default BlogPage 