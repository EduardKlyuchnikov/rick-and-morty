import { gql } from "@apollo/client";

export const CHARACTERS_WITH_FILTERS = gql`
  query getCharacters(
    $page: Int!
    $name: String
    $status: String
    $species: String
    $gender: String
    $type: String
  ) {
    characters(
      page: $page
      filter: {
        name: $name
        status: $status
        species: $species
        gender: $gender
        type: $type
      }
    ) {
      results {
        id
        type
        gender
        species
        status
        name
        image
        location {
          name
        }
      }
      info {
        pages
      }
    }
  }
`;

export const CHARACTER_BY_ID = gql`
  query getCharacter($id: ID!) {
    character(id: $id) {
      id
      type
      gender
      species
      status
      name
      image
      episode {
        episode
        name
      }
      location {
        name
      }
    }
  }
`;
