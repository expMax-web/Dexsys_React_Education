import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { BackButton } from "../BackButton";

describe("BackButton test suite", () => {
  test("should be render correctly", () => {
    const { container } = render(
      <BrowserRouter>
        <BackButton>test</BackButton>
      </BrowserRouter>
    );
    expect(container).toHaveTextContent("test");
  });
});
