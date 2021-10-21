import React from "react";
import cn from "classnames";

import { useDarkTheme } from "../../hooks/useDarkTheme";

import styles from "./SubmitButton.module.scss";

export const SubmitButton: React.FC = ({ children }) => {
  const { isDark } = useDarkTheme();
  return (
    <div>
      <button
        type="submit"
        className={cn(styles.SubmitButton, {
          [styles.SubmitButton_Dark]: isDark,
        })}
      >
        {children}
      </button>
    </div>
  );
};
