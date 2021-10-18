import React, { useContext, useState } from "react";
import ThemeContext from "../../context";

import styles from "./ThemeSwitcher.module.css";

export const ThemeSwitcher: React.FC = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);

  const [pointer, setPointer] = useState("enable dark theme");

  const toggleTheme = (event: any) => {
    event.target.checked ? setIsDark(true) : setIsDark(false);
    isDark
      ? setPointer("enable dark theme")
      : setPointer("turn off dark theme");
  };
  return (
    <div className={styles.checkboxContainer}>
      <input
        type="checkbox"
        className={styles.checkbox}
        id="checkbox"
        onChange={toggleTheme}
      />
      <label
        htmlFor="checkbox"
        className={isDark ? styles.labelDark : undefined}
      >
        {pointer}
      </label>
    </div>
  );
};
function setState(arg0: string): { pointer: any; setPointer: any } {
  throw new Error("Function not implemented.");
}
