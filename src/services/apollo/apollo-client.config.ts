import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHQL_URI,
  cache: new InMemoryCache(),
  headers: {
    'Authorization': `Bearer ${import.meta.env.VITE_GITHUB_ACCESS_TOKEN}`,
    'X-Github-Next-Global-ID': '1'
  }
});

export { apolloClient };