import React from "react";
import styles from "./blog.module.css";
import BlogCard from "@/components/blogCard/BlogCard";
import { getPosts } from "@/lib/data";

const getData = async () => {
  // use cache:  {cache: "force-cache"} : DEFAULT
  // not use cache:  {cache: "no-store"}
  // {next: {revalidate: 3600}}:  every 1 hour fetch new data
  const result = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
  });
  if (!result.ok) {
    throw new Error("error in blog page fetching data");
  }
  return result.json();
};

export const metadata = {
  title: 'Blog Page | NextJS 14 Fullstack Blog',
  description: 'Blog Page Description',
}

const BlogPage = async () => {
  // use API to fetch data
  // const posts = await getData();

  // !!! use DATA.js to fetch data
  const posts = await getPosts();
  // console.log(posts)
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <BlogCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
