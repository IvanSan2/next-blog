"use client";

import React from "react";
import styles from "./navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import AuthLinks from "../authLinks/AuthLinks";
import ThemeToggle from "../themeToggle/ThemeToggle";
import instagram from "../../../../public/instagram_icon.png";
import linkedin from "../../../../public/linkedinl_icon.png";
import github from "../../../../public/github_icon.png";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const NavBar = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <nav className={styles.container}>
      <div className={theme === "light" ? styles.social : styles.social_dark}>
        <Image src={instagram} alt="instagram" width={24} height={24} />
        <Image src={linkedin} alt="linkedin" width={24} height={24} />
        <Image src={github} alt="github" width={24} height={24} />
      </div>
      <div className={styles.logo}>FullstackLife</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>
          Home
        </Link>
        <Link href="/" className={styles.link}>
          Contact
        </Link>
        <Link href="/" className={styles.link}>
          About
        </Link>
        <AuthLinks />
      </div>
    </nav>
  );
};

export default NavBar;
