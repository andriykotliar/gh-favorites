import { useLazyQuery } from "@apollo/client";
import { SEARCH_REPOSITORIES } from "@/queries";

const useSearchRepo = () => {
  const [
    searchRepos,
    { data, loading, error, fetchMore }
  ] = useLazyQuery(SEARCH_REPOSITORIES, {
    notifyOnNetworkStatusChange: true
  });
  
  return {
    searchRepos,
    data,
    loading,
    error,
    fetchMore
  };
};

export { useSearchRepo };