'use client'
import React, { useEffect, useState } from 'react'
import { useFormState } from "react-dom";
import styles from "./registerForm.module.css";
import { handleRegister } from '@/lib/action';
import { useRouter } from "next/navigation";// not FROM next/router
import Link from 'next/link';

const RegisterForm = () => {
    const [state, formAction] = useFormState(handleRegister, undefined);
    // const [isClient, setIsClient] = useState(false);
    const router = useRouter();
    useEffect(() => {
        // setIsClient(true);
        // if success, nav to login
        // (isClient && state?.success) && router.push("/login")
        (state?.success) && router.push("/login")
    }, [state?.success, router]);
    return (
        <form action={formAction} className={styles.container}>
            <input type='text' placeholder='User Name' name='username'></input>
            <input type='text' placeholder='Email' name='email'></input>
            <input type='password' placeholder='Password' name='password'></input>
            <input type='password' placeholder='Password Again' name='passwordrepeat'></input>
            <button>Register Now</button>
            {state?.error}
            <Link href="/login">
                Have an account? <b>Login</b>
            </Link>
        </form>
    )
}

export default RegisterForm