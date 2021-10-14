import React from "react";
import { useParams } from "react-router-dom";

const CharacterPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return (
    <div>
      <h1>Character {id}</h1>
    </div>
  );
};

export default CharacterPage;
