import { gql } from "@apollo/client";

export const GET_CHARACTERS_INFO = gql`
  query getCharacters {
    characters {
      results {
        name
        image
      }
    }
  }
`;
