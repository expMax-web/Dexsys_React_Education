import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from "../../context";

import styles from "./BackButton.module.css";

export const BackButton: React.FC = ({ children }) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <Link to={`/home`}>
      <button className={isDark ? styles.BackButton_dark : styles.BackButton}>
        {children}
      </button>
    </Link>
  );
};
