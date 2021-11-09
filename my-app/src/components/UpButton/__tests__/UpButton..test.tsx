import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { UpButton } from "../UpButton";

describe("UpButton test suite", () => {
  test("should be render correctly ", () => {
    const scrollToTop = jest.fn();

    const { container } = render(<UpButton scrollToTop={scrollToTop} />);
    expect(container).toMatchSnapshot();
  });

  test("scrollToTop work correctly ", () => {
    const scrollToTop = jest.fn();
    render(<UpButton scrollToTop={scrollToTop} />);
    userEvent.click(screen.getByRole("button"));

    expect(scrollToTop).toHaveBeenCalledTimes(1);
  });
});
