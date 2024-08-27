import React from 'react'
import styles from "./login.module.css";
import { auth, signIn } from '@/lib/auth';


export const metadata = {
  title: 'Login Page',
  description: 'Login Page Description',
}

const LoginPage = async () => {
  const session = await auth()
  console.log(session)

  const handleLogin = async () => {
    'use server' // in Action
    await signIn("github")
  }
  return (
    <div>
      <form action={handleLogin}>
        <button>Login with Github</button>
      </form>
    </div>
  )
}

export default LoginPage