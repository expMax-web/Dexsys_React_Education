import React from "react";

import { BackButton } from "../components/BackButton/BackButton";
import { CharacterInfoCard } from "../components/CharacterInfoCard/CharacterInfoCard";
import { useCharacterInfo } from "./hooks/useCharacterInfo";

const CharacterPage: React.FC = () => {
  const { loading, error, character, id } = useCharacterInfo();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error.message}</p>;
  if (!id) return <h1>id not received, unable to download data</h1>;
  const getFormatedDate = (invalidDate: string | null | undefined) => {
    if (invalidDate) {
      const validDate = new Date(invalidDate);
      return `${validDate.getDate()}.${validDate.getMonth()}.${validDate.getFullYear()}`;
    }
    return;
  };
  getFormatedDate(character?.location?.created);
  return (
    <div>
      <BackButton>Back</BackButton>
      <CharacterInfoCard
        name={character?.name}
        image={character?.image}
        gender={character?.gender}
        created={getFormatedDate(character?.created)}
        status={character?.status}
        species={character?.species}
        locationName={character?.location?.name}
        locationType={character?.location?.type}
        locationDimension={character?.location?.dimension}
        locationCreated={getFormatedDate(character?.location?.created)}
      />
    </div>
  );
};

export default CharacterPage;
