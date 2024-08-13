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
    {
        path: '/admin',
        title: 'Admin'
    },
];

const Links = () => {
    return (
        <div className={styles.container}>
            {links.map((link) =>
                <NavLink link={link} key={link.title}/>
                )}
        </div>
    )
}

export default Links