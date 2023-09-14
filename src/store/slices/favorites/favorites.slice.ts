import { Reducers } from "@/common";
import { RootState } from "@/store";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type InitialState = {
  repositories: {
    [key: string]: {
      id: string;
      rating: number;
    }
  };
};

type UpdateRatingPayload = {
  repoId: string;
  value: number;
};

const initialState: InitialState = {
  repositories: {},
}

const favoritesSlice = createSlice({
  name: Reducers.FAVORITES,
  initialState,
  reducers: {
    updateFavorites: (state, { payload }: PayloadAction<string>) => {
      if(state.repositories[payload]) {
        delete state.repositories[payload];
      } else {
        state.repositories[payload] = {
          id: payload,
          rating: 0
        }
      };
    },
    updateRating: (
      state,
      { payload }: PayloadAction<UpdateRatingPayload>
    ) => {
      if(state.repositories[payload.repoId]) {
        state.repositories[payload.repoId].rating = payload.value;
      }
    }
  },
});

export const selectFavorites = (state: RootState) => state.favorites.repositories;
export const { updateFavorites, updateRating } = favoritesSlice.actions;
export default favoritesSlice.reducer;