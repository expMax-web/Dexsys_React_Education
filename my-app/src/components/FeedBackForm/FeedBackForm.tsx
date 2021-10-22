import React from "react";
import cn from "classnames";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { useForm } from "react-hook-form";

import { useDarkTheme } from "../../hooks/useDarkTheme";
import { Input } from "../Input/Input";
import { TextArea } from "../TextArea/TextArea";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import { validateEmail, validateFio } from "./Validaton";
import { ERROR_MESSAGES } from "./Constants";

import styles from "./FeedBackForm.module.scss";

export type Form = {
  fio: string;
  email: string;
  comment: string;
  date: string;
};

export const FeedBackForm = () => {
  const { isDark } = useDarkTheme();
  const startDate: Date = new Date(1900, 1, 1);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(styles.FeedBackForm, {
        [styles.FeedBackForm_Dark]: isDark,
      })}
    >
      <h1
        className={cn(styles.FeedBackFormTitle, {
          [styles.FeedBackFormTitle_Dark]: isDark,
        })}
      >
        Добавить отзыв
      </h1>
      <Input
        placeholder="Иванов Иван Иванович"
        id="fio"
        type="text"
        name="fio"
        labelText="ФИО"
        register={register}
        error={errors.fio}
        validate={validateFio}
      />
      <Input
        placeholder="example@gmail.com"
        id="email"
        type="text"
        name="email"
        labelText="Email"
        register={register}
        error={errors.email}
        validate={validateEmail}
      />
      <TextArea
        placeholder="Напишите что-нибудь..."
        labelText="Введите комментарий"
        id="comment"
        name="comment"
        error={errors.comment}
        register={register}
      />
      <DatePickerComponent
        min={startDate}
        start="Decade"
        format="dd.MM.yy"
        {...register("date", {
          required: true,
        })}
      ></DatePickerComponent>
      {errors.date && (
        <span className={styles.Error}>{ERROR_MESSAGES.EmptyField}</span>
      )}
      <SubmitButton>Submit</SubmitButton>
    </form>
  );
};
