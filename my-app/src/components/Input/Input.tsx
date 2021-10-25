import React, { InputHTMLAttributes } from "react";
import cn from "classnames";

import { useDarkTheme } from "../../hooks/useDarkTheme";

import styles from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string | undefined;
  labelText: string | undefined;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  error,
  id,
  labelText,
  name,
  ...inputProps
}) => {
  const { isDark } = useDarkTheme();

  return (
    <div className={styles.InputItem}>
      <label
        htmlFor={id}
        className={cn(styles.LabelInput, {
          [styles.LabelInput_Dark]: isDark,
        })}
      >
        {labelText}:
      </label>
      <input
        className={cn(styles.Input, {
          [styles.Input_Dark]: isDark,
        })}
        {...inputProps}
      ></input>
      {error && <span className={styles.Error}>{error}</span>}
    </div>
  );
};
