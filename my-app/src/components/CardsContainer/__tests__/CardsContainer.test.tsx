import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { CardsContainer } from "../CardsContainer";
import { Character, Maybe } from "../../../api/types";

describe("CardsContainer test suite", () => {
  test("should be render correctly", () => {
    const characters: Maybe<Character[]> = [
      {
        __typename: "Character",
        id: "1",
        name: "Rick Sanchez",
        image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
        episode: [],
      },
    ];

    const { container } = render(
      <BrowserRouter>
        <CardsContainer characters={characters} />
      </BrowserRouter>
    );
    expect(container).toHaveTextContent("Rick");
  });
});
