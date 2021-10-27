import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { BackButton } from "../BackButton";

describe("CardsContainer test suite", () => {
  test("should be render correctly", () => {
    const { container } = render(
      <BrowserRouter>
        <BackButton>test</BackButton>
      </BrowserRouter>
    );
    expect(container).toHaveTextContent("test");
  });
});
