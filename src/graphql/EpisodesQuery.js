import gql from "graphql-tag";

const EPISODES_QUERY = gql`
  query EpisodesQuery($page: Int!, $episodeName: String) {
    episodes(page: $page, filter: { name: $episodeName }) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        episode
      }
    }
  }
`;

export default EPISODES_QUERY;