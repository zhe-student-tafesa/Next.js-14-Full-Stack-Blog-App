'use client'
import { handleLoginWithCredentials } from '@/lib/action';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useFormState } from "react-dom";
import styles from './loginForm.module.css'
import Link from 'next/link';

const LoginForm = () => {
    const router = useRouter();
    // useEffect(() => {
    //     state?.success && router('/')
    // }, [state?.success, router])
    const [state, formAction] = useFormState(handleLoginWithCredentials, undefined);
    return (
        <form action={formAction} className={styles.container}>
            <input type='text' name='username' placeholder='username'></input>
            <input type='password' name='password' placeholder='Password'></input>
            <button>Login with Credentials</button>
            {state?.error}
            <Link href='/register'>
                {"Don't have an account, "} <b> Register</b>
            </Link>
        </form>
    )
}
export default LoginForm