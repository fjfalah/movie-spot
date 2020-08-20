import { action } from 'typesafe-actions';

import { ActionMovieType } from '../../types/actions';
import { MovieType } from '../../types/state';
import {
  GET_MOVIES,
  GET_MOVIES_F,
  GET_MOVIES_R,
  SEARCH_MOVIE,
} from '../actionTypes';

export const getMoviesAction = (
  keyword: string,
  page: number
): ActionMovieType => action(GET_MOVIES, { keyword, page });
export const getMoviesActionF = (items: MovieType[]): ActionMovieType =>
  action(GET_MOVIES_F, items);
export const getMoviesActionR = (error: unknown): ActionMovieType =>
  action(GET_MOVIES_R, error);
export const searchMoviesAction = (keyword: string): ActionMovieType =>
  action(SEARCH_MOVIE, keyword);
