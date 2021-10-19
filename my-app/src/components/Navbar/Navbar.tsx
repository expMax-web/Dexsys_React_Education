import React from "react";
import cn from "classnames";

import { ThemeSwitcher } from "../ThemeSwitcher/ThemeSwitcher";
import styles from "./Navbar.module.scss";
import { useDarkTheme } from "../../hooks/useDarkTheme";

export const Navbar: React.FC = () => {
  const { isDark } = useDarkTheme();
  return (
    <header
      className={cn(styles.Navbar, {
        [styles.Navbar_Dark]: isDark,
      })}
    >
      <h1
        className={cn(styles.NavbarTitle, {
          [styles.NavbarTitle_Dark]: isDark,
        })}
      >
        Rick and Morty
      </h1>
      <ThemeSwitcher />
    </header>
  );
};
