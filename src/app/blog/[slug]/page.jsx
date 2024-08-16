import React, { Suspense } from "react";
import styles from "./singleblog.module.css";
import Image from "next/image";
import PostUser from "@/components/postUser/PostUser";
import { getPost } from "@/lib/data";

const getData = async (slug) => {
  //console.log('https://jsonplaceholder.typicode.com/posts/'+slug)
  const result = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + slug
  );
  if (!result.ok) {
    throw new Error("error in single blog page fetching data");
  }
  return result.json();
};

const SingleBlogPage = async ({ params }) => {
  // !!! {slug} = params;
  const { slug } = params;

  // use API to fetch data
  // const post = await getData(slug);

  // use DATA.js to fetch data
  const post = await getPost(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://staging.miningskills.com.au/wp-content/uploads/2024/05/Post-6.jpg"
          className={styles.imgFeatured}
          alt=""
          fill
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detailContainer}>
          <Image
            src="https://staging.miningskills.com.au/wp-content/uploads/2024/05/Post-6.jpg"
            className={styles.avatar}
            width={50}
            height={50}
            alt=""
          />
          <Suspense fallback={<div>Loading......</div>}>
            <PostUser userId={post.userId} />
          </Suspense>

          <div className={styles.detail}>
            <p className={styles.detailTitle}>Published</p>
            <p className={styles.detailValue}>detail Value2</p>
          </div>
        </div>

        <p className={styles.desc}>{post.body}</p>
      </div>
    </div>
  );
};

export default SingleBlogPage;
