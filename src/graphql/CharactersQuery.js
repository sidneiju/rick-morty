import gql from "graphql-tag";

const CHARACTERS_QUERY = gql`
  query CharactersQuery($page: Int!, $characterName: String) {
    characters(page: $page, filter: { name: $characterName }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        image
      }
    }
  }
`;

export default CHARACTERS_QUERY;