import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Input } from "../../Input/Input";

describe("Input test suite", () => {
  test("should be render correctly ", () => {
    const onChange = jest.fn();
    const error = undefined;
    const { container } = render(
      <Input
        onChange={onChange}
        placeholder="example@gmail.com"
        labelText="Email"
        error={error}
      />
    );
    expect(container).toHaveTextContent("Email");
    expect(screen.getByPlaceholderText(/example/)).toBeInTheDocument();
  });
  test("onChange work ", () => {
    const onChange = jest.fn();
    const error = undefined;
    render(
      <Input
        onChange={onChange}
        placeholder="example@gmail.com"
        labelText="Email"
        error={error}
        type="text"
        name="Email"
      />
    );

    userEvent.type(screen.getByRole("textbox"), "text");
    expect(onChange).toHaveBeenCalledTimes(4);
  });
});
