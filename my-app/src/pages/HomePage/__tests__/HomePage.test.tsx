import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { CardsContainer } from "../../../components/CardsContainer/CardsContainer";
import { Footer } from "../../../components/Footer/Footer";

const characters: any = [
  {
    id: "1",
    name: "Rick Sanchez",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  },
  {
    id: "2",
    name: "Morty Smith",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  },
  {
    id: "3",
    name: "Summer Smith",
    image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
  },
];

describe("HomePage test suite", () => {
  test("should be render correctly ", () => {
    const { container } = render(
      <BrowserRouter>
        <div>
          <CardsContainer characters={characters} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  });
});
