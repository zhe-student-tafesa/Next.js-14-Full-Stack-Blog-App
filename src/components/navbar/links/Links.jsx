"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import styles from './links.module.css'
import NavLink from './navLink/NavLink';
import Image from 'next/image';

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
            {/* FOR DESK TOP: Begin */}
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
            {/* FOR DESK TOP: End */}

            {/* FOR TABLET AND MOBILE TOP: Begin */}
            {/* <button className={styles.mobileMenuButton} onClick={() => setOpen((prev) => !prev)}>Menu</button> */}
            <Image src='/menu.png' alt='menu' width={30} height={30}
                onClick={() => setOpen((prev) => !prev)}
                className={styles.mobileMenuButton}
            />
            {open && <div className={styles.mobileLinks}>
                {
                    links.map((link) =>
                        <NavLink link={link} key={link.title} />
                    )
                }
            </div>
                //  FOR TABLET AND MOBILE TOP: Begin 
            }
        </div>
    )
}

export default Links