import React from "react";
import "./styles.css";
import Navbar from "./components/Navbar/Navbar";
import CharacterCard from "./components/CharacterCard/CharacterCard";
import UpButton from "./components/UpButton/UpButton";
import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS_INFO = gql`
  query getCharacters {
    characters {
      results {
        name
        image
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GET_CHARACTERS_INFO);
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error.message}</p>;
  return (
    <div className="App">
      <Navbar />
      <main className="Container" id="scrolledBlock">
        {data?.characters?.results.map((character) => (
          <CharacterCard image={character.image} name={character.name} />
        ))}
        <UpButton>Вверх</UpButton>
      </main>
    </div>
  );
}

export default App;
