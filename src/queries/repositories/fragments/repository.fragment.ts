import { gql } from "@/__generated__";

const REPOSITORY_DATA = gql(`
  fragment RepositoryData on Repository {
    id
    nameWithOwner
    descriptionHTML
    url
    updatedAt
    isArchived
    stargazerCount
    primaryLanguage {
      name
      color
    }
  }
`);

export { REPOSITORY_DATA };