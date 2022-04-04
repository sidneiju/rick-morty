import gql from "graphql-tag";

const CHARACTER_DETAILS_QUERY = gql`
  query CharacterDetails($characterId: ID!) {
    character(id: $characterId) {
      name
      image
      status
      species
      gender
      origin {
        name
      }
      episode {
        id
        name
        episode
      }
    }
  }
`;

export default CHARACTER_DETAILS_QUERY;