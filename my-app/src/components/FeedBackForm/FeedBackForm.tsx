import React from "react";
import cn from "classnames";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
import { useForm, Controller } from "react-hook-form";

import { useDarkTheme } from "../../hooks/useDarkTheme";
import { Input } from "../Input/Input";
import { TextArea } from "../TextArea/TextArea";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import { validateEmail, validateFio } from "./validation/Validaton";
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
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<Form>({
    defaultValues: {
      fio: "",
      email: "",
      comment: "",
      date: "",
    },
    mode: "onChange",
  });

  const onSubmit = (data: Form) => {
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
      <Controller
        control={control}
        name="fio"
        rules={{
          required: ERROR_MESSAGES.EmptyField,
          validate: validateFio,
        }}
        render={({ field }) => (
          <Input
            onChange={field.onChange}
            placeholder="Иванов Иван Иванович"
            labelText="ФИО"
            error={errors?.fio?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="email"
        rules={{
          required: ERROR_MESSAGES.EmptyField,
          validate: validateEmail,
        }}
        render={({ field }) => (
          <Input
            onChange={field.onChange}
            placeholder="example@gmail.com"
            labelText="Email"
            error={errors?.email?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="comment"
        rules={{
          required: ERROR_MESSAGES.EmptyField,
        }}
        render={({ field }) => (
          <TextArea
            onChange={field.onChange}
            placeholder="Напишите что-нибудь..."
            labelText="Введите комментарий"
            error={errors?.comment?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="date"
        rules={{
          required: ERROR_MESSAGES.EmptyField,
        }}
        render={({ field }) => (
          <DatePickerComponent
            onChange={field.onChange}
            min={startDate}
            start="Decade"
            format="dd.MM.yy"
            placeholder="Выберите дату рождения"
          />
        )}
      />
      {errors?.date?.message && (
        <span className={styles.Error}>{errors.date.message}</span>
      )}
      <SubmitButton>Submit</SubmitButton>
    </form>
  );
};
