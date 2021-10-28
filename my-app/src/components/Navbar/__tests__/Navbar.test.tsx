import React from "react";
import { render } from "@testing-library/react";

import { Navbar } from "../Navbar";

describe("Navbar test suite", () => {
  test("should be render correctly ", () => {
    const { container } = render(<Navbar />);
    expect(container).toHaveTextContent(/Rick and Morty/);
  });
});
