import gql from "graphql-tag";

const EPISODE_DETAILS_QUERY = gql`
  query EpisodeDetails($episodeId: ID!) {
    episode(id: $episodeId) {
      id
      name
      episode
      air_date
      characters {
        id
        name
      }
    }
  }
`;

export default EPISODE_DETAILS_QUERY;