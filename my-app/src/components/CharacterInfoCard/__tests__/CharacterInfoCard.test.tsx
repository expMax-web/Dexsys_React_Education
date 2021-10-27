import React from "react";
import { render, screen } from "@testing-library/react";

import { CharacterInfoCard } from "../CharacterInfoCard";

describe("CharacterCard test suite", () => {
  test("should be render correctly", () => {
    const character = {
      created: "2017-11-04T18:50:21.651Z",
      gender: "Male",
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
      location: {
        __typename: "Location",
        name: "Earth (Replacement Dimension)",
        type: "Planet",
        dimension: "Replacement Dimension",
        created: "2017-11-18T19:33:01.173Z",
      },
      name: "Morty Smith",
      species: "Human",
      status: "Alive",
      __typename: "Character",
    };

    const { container } = render(
      <CharacterInfoCard
        image={character.image}
        name={character.name}
        gender={character.gender}
        created={character.created}
        status={character.status}
        species={character.species}
        locationName={character.location.name}
        locationType={character.location.type}
        locationDimension={character.location.dimension}
        locationCreated={character.location.created}
      />
    );
    expect(container).toHaveTextContent("Morty");
    expect(container).toHaveTextContent("Planet");
    expect(container).toHaveTextContent("18.10.2017");
  });
});
