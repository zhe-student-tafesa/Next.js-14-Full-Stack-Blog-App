import Link from 'next/link';
import React from 'react'

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
        <div>
            {links.map((link) =>
                <Link href={link.path} key={link.title}>
                    {link.title}
                </Link >)}
        </div>
    )
}

export default Links