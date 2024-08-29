import React from 'react'
import styles from "./login.module.css";
import { auth } from '@/lib/auth';
import { handleLogin, handleLoginWithCredentials } from '@/lib/action';


export const metadata = {
  title: 'Login Page',
  description: 'Login Page Description',
}

const LoginPage = async () => {

  // const session = await auth()
  // console.log(session)

  return (
    <div>
      <form action={handleLoginWithCredentials}>
        <input type='text' name='username' placeholder='User Name'></input>
        <input type='password' name='password' placeholder='Password'></input>
        <button>Login with Credentials</button>
      </form>
      <form action={handleLogin}>
        <button>Login with Github</button>
      </form>
    </div>
  )
}

export default LoginPage