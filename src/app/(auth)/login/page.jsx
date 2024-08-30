import React from 'react'
import styles from "./login.module.css";
import { auth } from '@/lib/auth';
import { handleLogin, handleLoginWithCredentials } from '@/lib/action';
import LoginForm from '@/components/loginForm/LoginForm';


export const metadata = {
  title: 'Login Page',
  description: 'Login Page Description',
}

const LoginPage = () => {

  // const session = await auth()
  // console.log(session)

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <form action={handleLogin}>
          <button className={styles.githubbutton}>Login with Github</button>
        </form>
        <LoginForm />
      </div>
    </div>
  )
}

export default LoginPage