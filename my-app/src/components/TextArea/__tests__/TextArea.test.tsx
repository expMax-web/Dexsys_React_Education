import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { TextArea } from "../TextArea";

describe("TextArea test suite", () => {
  test("should be render correctly ", () => {
    const onChange = jest.fn();
    const error = undefined;
    const { container } = render(
      <TextArea
        onChange={onChange}
        placeholder="Напишите что-нибудь..."
        labelText="Введите комментарий"
        error={error}
      />
    );
    expect(container).toHaveTextContent("Введите комментарий");
    expect(
      screen.getByPlaceholderText(/Напишите что-нибудь/)
    ).toBeInTheDocument();
  });
  test("onChange work ", () => {
    const onChange = jest.fn();
    const error = undefined;
    render(
      <TextArea
        onChange={onChange}
        placeholder="Напишите что-нибудь..."
        labelText="Введите комментарий"
        error={error}
      />
    );
    userEvent.type(screen.getByRole("textbox"), "text");
    expect(onChange).toHaveBeenCalledTimes(4);
  });
});
