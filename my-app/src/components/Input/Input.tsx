import React from "react";
import cn from "classnames";

import { useDarkTheme } from "../../hooks/useDarkTheme";

import styles from "./Input.module.scss";

interface InputProps {
  name: string | undefined;
  placeholder: string | undefined;
  labeltext: string | undefined;
  error?: string | undefined;
  type?: string | undefined;
}

export const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  labeltext,
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
        {labeltext}:
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
