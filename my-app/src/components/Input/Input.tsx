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
      >
        {labelText}:
      </label>
      <input
        className={cn(styles.Input, {
          [styles.Input_Dark]: isDark,
        })}
        type={type}
        name={name}
        required
      ></input>
    </div>
  );
};
