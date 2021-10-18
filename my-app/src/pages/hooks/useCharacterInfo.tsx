import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { GET_CHARACTER_INFO_BY_ID } from "../queries/getCharacterInfoByid";
import {
  GetCharacterByIdQueryVariables,
  GetCharacterByIdQuery,
} from "../../api/types";

export const useCharacterInfo = () => {
  const { id } = useParams<{ id: string }>();

  const { loading, error, data } = useQuery<
    GetCharacterByIdQuery,
    GetCharacterByIdQueryVariables
  >(GET_CHARACTER_INFO_BY_ID, {
    skip: !id,
    variables: { id: id as never },
  });

  const character = data?.character;

  return { loading, error, character, id };
};
