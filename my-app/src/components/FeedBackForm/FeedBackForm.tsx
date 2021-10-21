import React from "react";
import cn from "classnames";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";

import { useDarkTheme } from "../../hooks/useDarkTheme";
import { Input } from "../Input/Input";
import { TextArea } from "../TextArea/TextArea";
import { SubmitButton } from "../SubmitButton/SubmitButton";

import styles from "./FeedBackForm.module.scss";
import "react-datepicker/dist/react-datepicker.css";

export const FeedBackForm = () => {
  const { isDark } = useDarkTheme();
  const startDate: Date = new Date(1900, 1, 1);
  return (
    <form
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
        name="fio"
        placeholder="Иванов Иван Иванович"
        labelText="ФИО"
        type="text"
      />
      <Input
        name="email"
        placeholder="example@gmail.com"
        labelText="Email"
        type="email"
      />
      <TextArea
        name="comment"
        placeholder="Напишите что-нибудь..."
        labelText="Введите комментарий"
      />
      <DatePickerComponent
        min={startDate}
        start="Decade"
        format="dd.MM.yy"
      ></DatePickerComponent>
      <SubmitButton>Submit</SubmitButton>
    </form>
  );
};
