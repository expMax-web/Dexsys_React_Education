import React from "react";
import { useQuery } from "@apollo/client";

import { Navbar } from "./components/Navbar/Navbar";
import { CardsContainer } from "./components/CardsContainer/CardsContainer";
import { GET_CHARACTERS_INFO } from "./components/CardsContainer/queries/getCharactersInfo";

const App: React.FC = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS_INFO);
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error.message}</p>;
  return (
    <div className="App">
      <Navbar />
      <CardsContainer data={data} />
    </div>
  );
};

export default App;
