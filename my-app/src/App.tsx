import React from "react";
import { useQuery } from "@apollo/client";

import { Navbar } from "./components/Navbar/Navbar";
import { CardsContainer } from "./components/CardsContainer/CardsContainer";
import { GET_CHARACTERS_INFO } from "./components/CardsContainer/queries/getCharactersInfo";
import {
  Character,
  GetCharactersQuery,
  GetCharactersQueryVariables,
  Maybe,
} from "./api/types";

const App: React.FC = () => {
  const { loading, error, data } = useQuery<
    GetCharactersQuery,
    GetCharactersQueryVariables
  >(GET_CHARACTERS_INFO);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error.message}</p>;

  const characters = data?.characters?.results as Maybe<Character[]>;

  return (
    <div className="App">
      <Navbar />
      <CardsContainer characters={characters} />
    </div>
  );
};

export default App;
