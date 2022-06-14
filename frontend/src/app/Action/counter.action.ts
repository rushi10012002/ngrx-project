import { createAction, props } from '@ngrx/store';
import { Movies } from '../Models/Movies.model';

export const LoadRequest = createAction('[Counter Component] LoadRequest');
export const LoadedSuccess = createAction('[Counter Component] LoadedSuccess',props<any>());
export const LoadError = createAction('[Counter Component] LoadError');