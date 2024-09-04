import React, { Suspense } from 'react'
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
        <div className={styles.postList}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPost />
          </Suspense>
        </div>
        <AdminPostForm className={styles.postForm} />
      </div>


      <div className={styles.containerUser}>
        <div className={styles.nameList}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminUser />
          </Suspense>
        </div>
        <AdminUserForm />
      </div>
    </div>
  )
}

export default AdminPage