import { GET_MOVIES, GET_MOVIES_F, GET_MOVIES_R } from '../store/actionTypes';

import { MovieType } from './state';

export type ActionGetMovieType = {
  type: typeof GET_MOVIES;
  payload: {
    keyword: string;
    page: number;
  };
};

export type ActionGetMovieFType = {
  type: typeof GET_MOVIES_F;
  payload: MovieType[];
};

export type ActionGetMovieRType = {
  type: typeof GET_MOVIES_R;
  payload: unknown;
};

export type ActionMovieType =
  | ActionGetMovieType
  | ActionGetMovieFType
  | ActionGetMovieRType;
