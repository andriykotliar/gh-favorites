import { gql } from "@/__generated__";

const SEARCH_REPOSITORIES = gql(`
  query SearchRepositories($query: String!, $after: String = null) {
    search(query: $query, type: REPOSITORY, first: 10, after: $after) {
      repositoryCount
      nodes {
        ...RepositoryData
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`);

export { SEARCH_REPOSITORIES };