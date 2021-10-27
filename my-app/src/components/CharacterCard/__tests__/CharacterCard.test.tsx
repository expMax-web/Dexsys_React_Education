import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { CharacterCard } from "../CharacterCard";

describe("CharacterCard test suite", () => {
  test("should be render correctly", () => {
    const character = {
      id: "1",
      name: "Rick Sanchez",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    };

    const { container } = render(
      <BrowserRouter>
        <CharacterCard
          image={character.image}
          name={character.name}
          id={character.id}
        />
      </BrowserRouter>
    );
    expect(container).toHaveTextContent("Sanchez");
  });
});
