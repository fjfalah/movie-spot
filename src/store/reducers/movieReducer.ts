import { ActionMovieType } from '../../types/actions';
import { MovieStateType } from '../../types/state';
import { GET_MOVIES, GET_MOVIES_F, GET_MOVIES_R } from '../actionTypes';

const initialState: MovieStateType = {
  page: 1,
  items: [],
  keyword: 'batman',
  error: null,
  loading: false,
};

const movieReducer = (
  state = initialState,
  action: ActionMovieType
): MovieStateType => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        page: action.payload.page,
        keyword: action.payload.keyword,
        loading: true,
      };
    case GET_MOVIES_F:
      return {
        ...state,
        loading: false,
        items: [...state.items, ...action.payload],
      };
    case GET_MOVIES_R:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
