import { PageTitle, PageWrapper, RepositoriesList, ResultsCounter } from "@/components";
import { useAppSelector } from "@/store";
import { selectFavorites } from "@/store/slices/favorites/favorites.slice";

const FavoritesPage = () => {
  const favorites = useAppSelector(selectFavorites);

  return (
    <PageWrapper>
      <PageTitle>
        Favorite repositories
      </PageTitle>
      <ResultsCounter
        count={favorites.length}
        title="Repositories count"
      />
      <RepositoriesList
        nodes={favorites}
        showRating
      />
    </PageWrapper>
  );
};

export default FavoritesPage;