import React, { InputHTMLAttributes } from "react";
import cn from "classnames";

import { useDarkTheme } from "../../hooks/useDarkTheme";

import styles from "./Input.module.scss";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

type IFormInput = {
  fio: string;
  email: string;
};

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string | undefined;
  labelText: string | undefined;
  error?: any;
  id: string;
  register: UseFormRegister<FieldValues>;
  name: Path<IFormInput>;
}

export const Input: React.FC<InputProps> = ({
  register,
  error,
  id,
  labelText,
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
        id={id}
        {...register(inputProps.name, {
          required: "Required",
        })}
        {...inputProps}
      ></input>
      {error && <div>{error}</div>}
    </div>
  );
};
