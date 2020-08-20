import {
  getMoviesAction,
  getMoviesActionF,
  getMoviesActionR,
} from '../store/actions/movieAction';
import apiRequest from '../utils/api';

export const getMovies = (keyword: string, page: number) => {
  return (dispatch) => {
    dispatch(getMoviesAction(keyword, page));
    return apiRequest({
      method: 'GET',
      uri: '/',
      params: {
        s: keyword,
        page,
      },
    })
      .then((res) => {
        dispatch(getMoviesActionF(res.data.Search));
      })
      .catch((err) => {
        dispatch(getMoviesActionR(err));
      });
  };
};

export const getMovieDetail = (id: string | string[]) => {
  return apiRequest({
    method: 'GET',
    uri: '/',
    params: {
      i: id,
    },
  });
};
