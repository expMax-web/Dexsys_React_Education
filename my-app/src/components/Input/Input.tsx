import React, { InputHTMLAttributes } from "react";
import cn from "classnames";
import { FieldValues, UseFormRegister } from "react-hook-form";

import { useDarkTheme } from "../../hooks/useDarkTheme";

import styles from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string | undefined;
  labelText: string | undefined;
  error?: any;
  id: string;
  name: string;
  register: UseFormRegister<FieldValues>;
  validate: (value: string) => boolean | string;
}

export const Input: React.FC<InputProps> = ({
  register,
  error,
  id,
  labelText,
  validate,
  name,
  ...inputProps
}) => {
  const { isDark } = useDarkTheme();
  console.log(name);

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
        id={id}
        {...register(name, {
          required: true,
          validate: { validate },
        })}
        {...inputProps}
      ></input>
      {/* {console.log(error)} */}
      {error && error.type === "required" && (
        <span>Поле обязательно для ввода</span>
      )}
      {error && error.type === "validateEmail" && <span>{error.message}</span>}
    </div>
  );
};
