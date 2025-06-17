import React from "react";
import Image from "next/image";
import { Store } from "lucide-react";
import Link from "next/link";
import styles from "./header.module.css";
import { GithubIcon } from "./icons/githubIcon";

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.headerLogo}>
        <Image
          src="/img/icon.png"
          alt="Only Timetable logo"
          width={36}
          height={36}
        />
        <span className={styles.headerTitle}>Only Timetable</span>
      </Link>
      <nav className={styles.headerNav}>
        <Link href="/plugins" className={styles.headerLink}>
          <Store size={20} />
          <span>Plugin Marketplace</span>
        </Link>
        <a
          href="https://github.com/nohackjustnoobb/Only-Timetable"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.headerLink}
        >
          <GithubIcon size={20} />
          <span>GitHub</span>
        </a>
      </nav>
    </header>
  );
};

export default Header;
