import { createReducer, on } from '@ngrx/store';
 
import {LoadRequest,LoadedSuccess,LoadError } from '../Action/counter.action';

export const initialState = {};

export const counterReducer = createReducer(
  initialState,
  on(LoadRequest, (state) =>[]),
  on(LoadedSuccess, (state,res) =>{
    
     
    return res.data
  }),
  on(LoadError, (state) => [])
);