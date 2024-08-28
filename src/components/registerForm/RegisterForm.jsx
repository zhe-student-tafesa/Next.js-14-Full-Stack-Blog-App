import React from 'react'
import styles from "./registerForm.module.css";
import { handleRegister } from '@/lib/action';

const RegisterForm = () => {
    return (
        <div>
            <form action={handleRegister} className={styles.container}>
                <input type='text' placeholder='User Name' name='username'></input>
                <input type='text' placeholder='Email' name='email'></input>
                <input type='password' placeholder='Password' name='password'></input>
                <input type='password' placeholder='Password Again' name='passwordrepeat'></input>
                <button>Register Now</button>
            </form>
        </div>
    )
}

export default RegisterForm