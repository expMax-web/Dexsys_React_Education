import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GET_CHARACTER_INFO_BY_ID } from "./queries/getCharacterInfoByid";
import {
  GetCharacterByIdQueryVariables,
  GetCharacterByIdQuery,
} from "../api/types";
import { CharacterInfoCard } from "../components/CharacterInfoCard/CharacterInfoCard";

const CharacterPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { loading, error, data } = useQuery<GetCharacterByIdQuery>(
    GET_CHARACTER_INFO_BY_ID,
    {
      skip: !id,
      variables: { id: id },
    }
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error.message}</p>;
  if (!id) return <h1>id not received, unable to download data</h1>;

  return (
    <CharacterInfoCard
      name={data?.character?.name}
      image={data?.character?.image}
      gender={data?.character?.gender}
      created={data?.character?.created}
      status={data?.character?.status}
      species={data?.character?.species}
      locationName={data?.character?.location?.name}
      locationType={data?.character?.location?.type}
      locationDimension={data?.character?.location?.dimension}
      locationCreated={data?.character?.location?.created}
    />
  );
};

export default CharacterPage;
