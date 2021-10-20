import React from "react";
import cn from "classnames";

import { useDarkTheme } from "../../hooks/useDarkTheme";

import styles from "./TextArea.module.scss";

interface TextAreaProps {
  name: string | undefined;
  placeholder: string | undefined;
  labeltext: string | undefined;
  error?: string | undefined;
}

export const TextArea: React.FC<TextAreaProps> = ({
  name,
  placeholder,
  labeltext,
  error,
}) => {
  const { isDark } = useDarkTheme();
  return (
    <div className={styles.TextAreaContainer}>
      <label className={styles.TextAreaLabel} htmlFor={name}>
        {labeltext}
      </label>
      <textarea
        className={styles.TextArea}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};
