import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Box, debounce } from "@mui/material";
import {
  ErrorMessage,
  Loader,
  RepositoriesList,
  PageWrapper,
  PageTitle,
  ResultsCounter
} from "@/components";
import { SearchBar, LoadMoreButton } from "./components";
import { useSearchRepo } from "@/hooks";
import { RepositoryDataFragment } from "@/__generated__/graphql";

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    searchRepos,
    data,
    loading,
    error,
    fetchMore
  } = useSearchRepo();

  const execSearchQuery = (searchString: string) => {
    searchRepos({
      variables: {
        query: searchString
      }
    });
  };

  const handleSearch = (searchString: string) => {
    execSearchQuery(searchString);
    setSearchParams({
      search: searchString
    });
  };

  const handleLoadMore = (endCursor?: string | null) => {
    fetchMore({
      variables: {
        after: endCursor
      },
      updateQuery: (prevResult, { fetchMoreResult }) => {
        return {
          search: {
            ...fetchMoreResult.search,
            nodes: [
              ...(prevResult.search.nodes || []),
              ...(fetchMoreResult.search.nodes || []),
            ],
          },
        };
      },
    });
  };

  const debouncedSearch = debounce(handleSearch, 500);

  useEffect(() => {
    const searchValue = searchParams.get('search');
    if(searchValue) {
      execSearchQuery(searchValue);
    }
  }, []);

  return (
    <PageWrapper>
      <PageTitle>
        Search repositories
      </PageTitle>
      <SearchBar
        onChange={(e) => debouncedSearch(e.target.value)}
        defaultValue={searchParams.get('search')}
      />
      <ErrorMessage
        message={error?.message}
        style={{ marginTop: 2 }}
      />
      <Box py={2}>
        <ResultsCounter
          count={data?.search?.repositoryCount}
          title="Results"
        />
        <Loader isLoading={loading} />
        <RepositoriesList
          nodes={data?.search.nodes as RepositoryDataFragment[]}
        />
      </Box>
      {data?.search.pageInfo.hasNextPage && (
        <Box mt={2} display="flex" justifyContent="center">
          <LoadMoreButton
            isLoading={loading}
            onClick={() => handleLoadMore(
              data.search.pageInfo.endCursor,
            )}
          />
        </Box>
      )}
    </PageWrapper>
  );
};

export default SearchPage;