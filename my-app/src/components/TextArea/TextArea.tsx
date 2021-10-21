import React from "react";
import cn from "classnames";

import { useDarkTheme } from "../../hooks/useDarkTheme";

import styles from "./TextArea.module.scss";

interface TextAreaProps {
  name: string | undefined;
  placeholder: string | undefined;
  labelText: string | undefined;
  error?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({
  name,
  placeholder,
  labelText,
  error,
}) => {
  const { isDark } = useDarkTheme();
  return (
    <div className={styles.TextAreaContainer}>
      <label
        className={cn(styles.TextAreaLabel, {
          [styles.TextAreaLabel_Dark]: isDark,
        })}
        htmlFor={name}
      >
        {labelText}
      </label>
      <textarea
        className={cn(styles.TextArea, {
          [styles.TextArea_Dark]: isDark,
        })}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};
