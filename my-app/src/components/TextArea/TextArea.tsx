import React, { InputHTMLAttributes } from "react";
import cn from "classnames";
import { FieldValues, UseFormRegister } from "react-hook-form";

import { useDarkTheme } from "../../hooks/useDarkTheme";

import styles from "./TextArea.module.scss";

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  placeholder: string | undefined;
  labelText: string | undefined;
  error?: any;
  id: string;
  name: string;
  register: UseFormRegister<FieldValues>;
}

export const TextArea: React.FC<TextAreaProps> = ({
  error,
  id,
  labelText,
  onChange,
  register,
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
        id={id}
        {...register(name, {
          required: true,
        })}
        onChange={onChange}
        {...inputProps}
      />
    </div>
  );
};
