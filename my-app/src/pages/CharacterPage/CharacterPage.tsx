import React from "react";

import { BackButton } from "../../components/BackButton/BackButton";
import { CharacterInfoCard } from "../../components/CharacterInfoCard/CharacterInfoCard";
import { useCharacterInfo } from "../hooks/useCharacterInfo";
import { SkeletonCharacterPage } from "../SkeletonCharacterPage/SkeletonCharacterPage";

const CharacterPage: React.FC = () => {
  const { loading, error, character, id } = useCharacterInfo();

  if (loading) return <SkeletonCharacterPage />;
  if (error) return <p>Error {error.message}</p>;
  if (!id) return <h1>id not received, unable to download data</h1>;

  return (
    <div style={{ height: "100%" }}>
      <BackButton>Back</BackButton>
      <CharacterInfoCard
        name={character?.name}
        image={character?.image}
        gender={character?.gender}
        created={character?.created}
        status={character?.status}
        species={character?.species}
        locationName={character?.location?.name}
        locationType={character?.location?.type}
        locationDimension={character?.location?.dimension}
        locationCreated={character?.location?.created}
      />
    </div>
  );
};

export default CharacterPage;
