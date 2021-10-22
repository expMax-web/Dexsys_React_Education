import React from "react";
import cn from "classnames";

import { useDarkTheme } from "../../hooks/useDarkTheme";

import styles from "./TextArea.module.scss";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

type IFormInput = {
  comment: string;
};

interface TextAreaProps {
  placeholder: string | undefined;
  labelText: string | undefined;
  error?: any;
  id: string;
  register: UseFormRegister<FieldValues>;
  name: Path<IFormInput>;
}

export const TextArea: React.FC<TextAreaProps> = ({
  register,
  error,
  id,
  labelText,
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
        {...register(inputProps.name, {
          required: "Required",
        })}
        {...inputProps}
      />
    </div>
  );
};
