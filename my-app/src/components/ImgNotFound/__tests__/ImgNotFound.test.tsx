import React from "react";
import { render, screen } from "@testing-library/react";

import { ImgNotFound } from "../ImgNotFound";

describe("ImgNotFound test suite", () => {
  test("should be render correctly", () => {
    render(<ImgNotFound />);
    expect(screen.getByRole(`img`, { name: "Изображение не найдено" }));
  });
});
