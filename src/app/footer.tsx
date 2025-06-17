import React from "react";
import styles from "./footer.module.css";
import { Puzzle } from "lucide-react";
import { GithubIcon } from "./icons/githubIcon";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerLinks}>
      <a
        href="https://github.com/nohackjustnoobb/Only-Timetable"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.footerLink}
      >
        <GithubIcon size={18} />
        GitHub
      </a>
      <a
        href="https://github.com/nohackjustnoobb/Only-Timetable-Plugin-Template"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.footerLink}
      >
        <Puzzle size={18} />
        Plugin Template
      </a>
    </div>
    <div>© {new Date().getFullYear()} nohackjustnoobb · MIT License</div>
  </footer>
);

export default Footer;
