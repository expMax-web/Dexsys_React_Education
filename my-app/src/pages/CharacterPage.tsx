import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GET_CHARACTER_INFO_BY_ID } from "./queries/getCharacterInfoByid";
import {
  GetCharacterByIdQueryVariables,
  GetCharacterByIdQuery,
} from "../api/types";

const CharacterPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const { loading, error, data } = useQuery<
    GetCharacterByIdQuery,
    GetCharacterByIdQueryVariables
  >(GET_CHARACTER_INFO_BY_ID, {
    skip: !id,
    variables: { id: id },
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error.message}</p>;
  if (!id) return <h1>id not received, unable to download data</h1>;

  console.log(data);

  return (
    <div>
      <h1>Character {id}</h1>
    </div>
  );
};

export default CharacterPage;
