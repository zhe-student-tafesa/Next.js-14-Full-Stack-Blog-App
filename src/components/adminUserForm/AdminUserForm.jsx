'use client'

import { createUser } from "@/lib/action";
import styles from "./adminUserForm.module.css"
import React from 'react'
import { useFormState } from "react-dom";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(createUser, undefined);
  return (
    <form className={styles.container} action={formAction}>
      <input type="text" name="username" placeholder="user name"></input>
      <input type="password" name="password" placeholder="password"></input>
      <input type="password" name="passwordrepeat" placeholder="password again"></input>
      <input type="text" name="email" placeholder="email"></input>
      <input type="text" name="img" placeholder="image"></input>
      <select name="isAdmin">
        <option value='false'>Is Admin?</option>
        <option value='true'>Yes</option>
        <option value='false'>No</option>
      </select >
      <button>Create User</button>
      {state?.error && state?.error}
    </form>
  )
}

export default AdminUserForm