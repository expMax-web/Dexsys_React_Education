import React from "react";
import { render, screen } from "@testing-library/react";

import image from "../img_not_found.png";

describe("CharacterCard test suite", () => {
  test("should be render correctly", () => {
    render(
      <p>
        <img src={image} alt="Изображение не найдено" />
      </p>
    );
    expect(screen.getByRole(`img`));
  });
});
