"use client";

import React from "react";
import styles from "./navLink.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link, onClick }) => {
  const pathName = usePathname();

  return (
    <Link
      href={link.path}
      className={`${styles.container} ${
        pathName === link.path && styles.active
      }`}
      onClick={onClick}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
