import React from "react";
import styles from "./navbar.module.scss";

const NavList = () => {
  return (
    <div className={styles.menu}>
      <ul className={styles.menuList}>
        <li><a href="/" className={styles.link}>
          Home
        </a></li>
        <li><a href="/events" className={styles.link}>
          Events
        </a></li>
        <li><a href="/team" className={styles.link}>
          Team
        </a></li>
        <li><a href="/about" className={styles.link}>
          About
        </a></li>
      </ul>
    </div>
  );
};

export default NavList;
