import React from "react";
import cn from "classnames";

import { useDarkTheme } from "../../hooks/useDarkTheme";

import styles from "./Input.module.scss";

interface InputProps {
  name: string | undefined;
  placeholder: string | undefined;
  labelText: string | undefined;
  error?: string;
  type?: string;
}

export const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  labelText,
  error,
  type,
}) => {
  const { isDark } = useDarkTheme();
  return (
    <div className={styles.InputItem}>
      <label
        className={cn(styles.LabelInput, {
          [styles.LabelInput_Dark]: isDark,
        })}
        htmlFor={name}
      >
        {labelText}:
      </label>
      <input
        className={styles.Input}
        name={name}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
};
