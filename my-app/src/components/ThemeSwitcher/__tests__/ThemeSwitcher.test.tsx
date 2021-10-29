import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ThemeSwitcher } from "../ThemeSwitcher";

describe("ThemeSwitcher test suite", () => {
  test("should be render correctly ", () => {
    const { container } = render(<ThemeSwitcher />);
    expect(container).toMatchSnapshot();
  });
  test("Use dark theme correctly", () => {
    const { container } = render(<ThemeSwitcher />);

    userEvent.click(screen.getByRole("checkbox"));
    expect(container).toHaveTextContent("turn off dark theme");
  });
  test("Use dark theme correctly on label click", () => {
    const { container } = render(<ThemeSwitcher />);

    userEvent.click(screen.getByText("enable dark theme"));

    expect(container).toHaveTextContent("turn off dark theme");
  });
});
