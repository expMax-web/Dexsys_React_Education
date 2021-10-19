import React from "react";
import cn from "classnames";

import { useDarkTheme } from "../../hooks/useDarkTheme";

import styles from "./UpButton.module.scss";

interface UpButtonProps {
  scrollToTop: () => void;
}

export const UpButton: React.FC<UpButtonProps> = ({
  children,
  scrollToTop,
}) => {
  const { isDark } = useDarkTheme();
  return (
    <button
      onClick={scrollToTop}
      className={cn(styles.ButtonUp, {
        [styles.ButtonUp_Dark]: isDark,
      })}
    >
      {children}
    </button>
  );
};
