import React from "react";
import { render, screen } from "@testing-library/react";

import { SubmitButton } from "../SubmitButton";

describe("SubmitButton test suite", () => {
  test("should be render correctly ", () => {
    const { container } = render(<SubmitButton>Submit</SubmitButton>);
    expect(container).toHaveTextContent("Submit");
  });
  test("have a type Submit ", () => {
    render(<SubmitButton>Submit</SubmitButton>);
    expect(screen.getByRole("button")).toHaveAttribute("type", "submit");
  });
});
