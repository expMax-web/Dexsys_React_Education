import React from "react";
import cn from "classnames";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";

import { useDarkTheme } from "../../hooks/useDarkTheme";
import { Input } from "../Input/Input";
import { TextArea } from "../TextArea/TextArea";

import styles from "./FeedBackForm.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import { SubmitButton } from "../SubmitButton/SubmitButton";

export const FeedBackForm = () => {
  const { isDark } = useDarkTheme();
  const startDate: Date = new Date(1900, 1, 1);
  return (
    <form className={styles.FeedBackForm}>
      <Input
        name="fio"
        placeholder="Иванов Иван Иванович"
        labeltext="ФИО"
        type="text"
      />
      <Input
        name="email"
        placeholder="example@gmail.com"
        labeltext="Email"
        type="email"
      />
      <TextArea
        name="comment"
        placeholder="Напишите что-нибудь..."
        labeltext="Введите комментарий"
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
