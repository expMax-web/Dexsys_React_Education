import React from "react";

import styles from "./Navbar.module.css";

export const Navbar: React.FC = () => {
  return (
    <header className={styles.Navbar}>
      <h1 className={styles.NavbarTitle}>Rick and Morty</h1>
    </header>
  );
};
