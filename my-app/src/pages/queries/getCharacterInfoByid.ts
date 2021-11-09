import { gql } from "@apollo/client";

export const GET_CHARACTER_INFO_BY_ID = gql`
  query getCharacterById($id: ID!) {
    character(id: $id) {
      name
      image
      gender
      created
      status
      species
      location {
        name
        type
        dimension
        created
      }
    }
  }
`;
