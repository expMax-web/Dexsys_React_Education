import React, { useContext } from "react";
import ThemeContext from "../../context";

import styles from "./UpButton.module.css";

interface UpButtonProps {
  scrollToTop: () => void;
}

export const UpButton: React.FC<UpButtonProps> = ({
  children,
  scrollToTop,
}) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <button
      onClick={scrollToTop}
      className={isDark ? styles.ButtonUp_dark : styles.ButtonUp}
    >
      {children}
    </button>
  );
};
