import React from 'react'
import Links from './links/Links'
import styles from './navbar.module.css'
import Link from 'next/link'
import { auth } from '@/lib/auth'

const Navbar = async () => {
  const session = await auth();
  // because in auth.config.js: user in jwt is undefine, so add this
  if (session?.user) {
    session.user.isAdmin = session?.user?.email === process.env.ADMIN_ACCOUNT;
  }
  console.log("page session isAdmin", session)

  return (
    <div className={styles.container}>
      <Link href='/' className={styles.logo}>
        Logo
      </Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  )
}

export default Navbar