import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Movies } from "../Models/Movies.model";

export const featureKey = 'feature';
export interface AppState {
    count: Movies;
  }

  // export const selectFeature = (state: AppState) => state.count;
  export const selectFeature = createFeatureSelector<AppState>(featureKey);
export const movieSelectors = createSelector(
    selectFeature,
    (state) => state,
);