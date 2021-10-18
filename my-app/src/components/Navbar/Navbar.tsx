import React, { useContext } from "react";
import ThemeContext from "../../context";

import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import styles from "./Navbar.module.css";

export const Navbar: React.FC = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  return (
    <header className={isDark ? styles.Navbar_dark : styles.Navbar}>
      <h1 className={isDark ? styles.NavbarTitle_dark : styles.NavbarTitle}>
        Rick and Morty
      </h1>
      <ThemeSwitcher />
    </header>
  );
};
