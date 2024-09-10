import React, { Suspense } from 'react'
import styles from "./admin.module.css";
import AdminUser from '@/components/adminUser/AdminUser';
import AdminUserForm from '@/components/adminUserForm/AdminUserForm';
import AdminPost from '@/components/adminPost/AdminPost';
import AdminPostForm from '@/components/adminPostForm/AdminPostForm';
import { auth } from '@/lib/auth';
import { connectToDB } from '@/lib/utils';
import { User } from '@/lib/models';

export const metadata = {
  title: 'Admin Page',
  description: 'Admin Page Description',
}

const AdminPage = async () => {
  const session = await auth();
  let userId = '';
  try {
    connectToDB();
    const user = await User.findOne({ email: session?.user?.email })
    userId = user.id;

  } catch (error) {
    console.log(error, 'fail to query admin user')
  }
  // console.log("user.id??: ", userId)
  return (
    <div className={styles.container}>
      <div className={styles.containerPost}>
        <div className={styles.postList}>
          <Suspense fallback={<div>Loading...</div>}>
            <AdminPost />
          </Suspense>
        </div>
        <AdminPostForm className={styles.postForm} userId={userId === '' ? "66d6a8cbd94cb3840db3af6d" : userId} />
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