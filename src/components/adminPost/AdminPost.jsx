import { getPosts } from "@/lib/data"
import styles from "./adminPost.module.css"
import React from 'react'
import Image from "next/image"

import { deletePost } from "@/lib/action";

const AdminPost = async () => {
  const posts = await getPosts()
  // console.log(posts)

  return (
    <div className={styles.container}>
      <h1>Posts</h1>
      {posts.map((post) => (
        <form key={post.id} className={styles.containerOnePost} action={deletePost}>
          <input type="text" name="id" value={post.id} className={styles.input}></input>
          <div>
            <Image src={post?.img ? post?.img : '/noavatar.png'} alt="" width={50} height={50} />
            <span>{post.title}</span>
          </div>
          <button>delete</button>
        </form>
      ))}
    </div>
  )
}

export default AdminPost