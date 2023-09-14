import { Reducers } from "@/common";
import { RootState } from "@/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RepositoryDataFragment } from "@/__generated__/graphql";

type RepositoryStoreType = {
  rating?: number;
} & RepositoryDataFragment;

type InitialState = {
  repositories: RepositoryStoreType[];
};

type UpdateRatingPayload = {
  repoId: string;
  value: number;
};

const initialState: InitialState = {
  repositories: [],
};

const favoritesSlice = createSlice({
  name: Reducers.FAVORITES,
  initialState,
  reducers: {
    addToFavorites: (
      state,
      action: PayloadAction<RepositoryDataFragment>
    ) => {
      state.repositories.push(action.payload);
    },
    removeFromFavorites: (
      state,
      action: PayloadAction<string>,
    ) => {
      state.repositories = state.repositories.filter(
        (repository) => repository.id !== action.payload,
      );
    },
    updateRating: (
      state,
      { payload }: PayloadAction<UpdateRatingPayload>
    ) => {
      const repository = state.repositories.find((repo) => repo.id === payload.repoId);

      if(repository) {
        repository.rating = payload.value; 
      }
    }
  },
});

export const selectFavorites = (state: RootState) => state.favorites.repositories;
export const {
  addToFavorites,
  removeFromFavorites,
  updateRating
} = favoritesSlice.actions;
export type { RepositoryStoreType };
export default favoritesSlice.reducer;