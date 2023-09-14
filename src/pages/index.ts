import { lazy } from "react";

const SearchPage = lazy(() => import('./search/SearchPage'));
const FaviretesPage = lazy(() => import('./favorites/FavoritesPage'));

export {
  SearchPage,
  FaviretesPage,
};