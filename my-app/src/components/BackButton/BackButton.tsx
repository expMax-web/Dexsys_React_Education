import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";

import { useDarkTheme } from "../../hooks/useDarkTheme";

import styles from "./BackButton.module.scss";

export const BackButton: React.FC = ({ children }) => {
  const { isDark } = useDarkTheme();
  return (
    <Link to={`/home`}>
      <button
        className={cn(styles.BackButton, {
          [styles.BackButton_Dark]: isDark,
        })}
      >
        {children}
      </button>
    </Link>
  );
};
