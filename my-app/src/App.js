import React from "react";
import "./styles.css";
import Navbar from "./components/Navbar/Navbar";
import CharacterCard from "./components/CharacterCard/CharacterCard";
import UpButton from "./components/UpButton/UpButton";
import { useQuery, gql } from "@apollo/client";

function App() {
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
  const { loading, error, data } = useQuery(GET_CHARACTERS_INFO);
  console.log(data);

  return (
    <div className="App">
      <Navbar />
      <main className="Container"></main>
      <UpButton>Вверх</UpButton>
    </div>
  );
}

export default App;
