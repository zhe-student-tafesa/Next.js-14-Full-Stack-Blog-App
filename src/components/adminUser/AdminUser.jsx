
import styles from "./adminUser.module.css"
import { getPosts, getUsers } from "@/lib/data"
import React from 'react'
import Image from "next/image"

import { deleteUser } from "@/lib/action";

const AdminUser = async () => {
  const users = await getUsers()
  // console.log(users)
  return (
    <div className={styles.container}>
      <h1>Users</h1>
      {users.map((user) => (
        <form key={user.id} className={styles.containerOneUser} action={deleteUser}>
          <input type="text" name="id" value={user.id} className={styles.input} readOnly></input>
          <div className={styles.imgAndName}>
            <Image src={user?.img ? user?.img : '/noavatar.png'} alt="" width={50} height={50} />
            <span>{user.username}</span>
          </div>
          <button className={styles.button}>delete</button>
        </form>
      ))}
    </div>
  )
}

export default AdminUser