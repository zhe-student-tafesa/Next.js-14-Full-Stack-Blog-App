import Link from 'next/link';
import React from 'react'
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
    return (
        <div className={styles.container}>
            {links.map((link) =>
                <NavLink link={link} key={link.title} />
            )}{
                session ? (
                    <>
                        {isAdmin && (<NavLink link={{ title: "Admin", path: "/admin" }} />)}
                        <button>Logout</button>
                    </>
                )
                    : (<NavLink link={{ title: "Login", path: "/login" }} />)
            }
        </div>
    )
}

export default Links