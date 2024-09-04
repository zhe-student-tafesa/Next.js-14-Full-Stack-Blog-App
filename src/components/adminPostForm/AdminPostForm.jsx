'use client'
import { createPost } from "@/lib/action";
import styles from "./adminPostForm.module.css"
import React from 'react'
import { useFormState } from "react-dom";

const AdminPostForm = () => {
  const [state, formAction] = useFormState(createPost, undefined);
  return (
    <form className={styles.container} action={formAction}>
      <input type="text" name="title" placeholder="title"></input>
      <textarea type="text" name="desc" placeholder="description" />
      <input type="text" name="img" placeholder="image"></input>
      <input type="text" name="userId" placeholder="user Id"></input>
      <input type="text" name="slug" placeholder="slug"></input>
      <button>Create Post</button>
      {state?.error && state.error}
    </form>
  )
}

export default AdminPostForm