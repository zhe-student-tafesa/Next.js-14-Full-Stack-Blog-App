import React from 'react'
import styles from "./admin.module.css";
import AdminUser from '@/components/adminUser/AdminUser';
import AdminUserForm from '@/components/adminUserForm/AdminUserForm';
import AdminPost from '@/components/adminPost/AdminPost';
import AdminPostForm from '@/components/adminPostForm/AdminPostForm';

export const metadata = {
  title: 'Admin Page',
  description: 'Admin Page Description',
}

const AdminPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.containerPost}>
        <AdminPost />
        <AdminPostForm />
      </div>
      <div className={styles.containerUser}>
        <AdminUser />
        <AdminUserForm />
      </div>
    </div>
  )
}

export default AdminPage