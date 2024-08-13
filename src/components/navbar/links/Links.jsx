"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import styles from './links.module.css'
import NavLink from './navLink/NavLink';

const links = [
    {
        path: '/',
        title: 'Homepage'
    },
    {
        path: '/blog',
        title: 'Blog'
    },
    {
        path: '/about',
        title: 'About'
    },
    {
        path: '/contact',
        title: 'Contact'
    },
];

const Links = () => {
    const session = true;
    const isAdmin = true;
    const [open, setOpen] = useState(false);
    return (
        <div className={styles.container}>
            <div className={styles.links}>
                {links.map((link) =>
                    <NavLink link={link} key={link.title} />
                )}{
                    session ? (
                        <>
                            {isAdmin && (<NavLink link={{ title: "Admin", path: "/admin" }} />)}
                            <button className={styles.logout}>Logout</button>
                        </>
                    )
                        : (<NavLink link={{ title: "Login", path: "/login" }} />)
                }
            </div>
            <button onClick={() => setOpen((prev) => !prev)}>Menu</button>
            {open && <div className={styles.mobileLinks}>
                {
                    links.map((link) =>
                        <NavLink link={link} key={link.title} />
                    )
                }
            </div>
            }
        </div>
    )
}

export default Links