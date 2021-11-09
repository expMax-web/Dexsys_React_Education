import React, { InputHTMLAttributes } from "react";
import cn from "classnames";

import { useDarkTheme } from "../../hooks/useDarkTheme";

import styles from "./TextArea.module.scss";

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  placeholder: string | undefined;
  labelText: string | undefined;
  error?: any;
}

export const TextArea: React.FC<TextAreaProps> = ({
  error,
  id,
  labelText,
  name,
  ...inputProps
}) => {
  const { isDark } = useDarkTheme();
  return (
    <div className={styles.TextAreaContainer}>
      <label
        className={cn(styles.TextAreaLabel, {
          [styles.TextAreaLabel_Dark]: isDark,
        })}
        htmlFor={id}
      >
        {labelText}
      </label>
      <textarea
        className={cn(styles.TextArea, {
          [styles.TextArea_Dark]: isDark,
        })}
        {...inputProps}
      />
      {error && <span className={styles.Error}>{error}</span>}
    </div>
  );
};
