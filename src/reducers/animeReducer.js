import { SEARCH_ANIMES, GET_ANIME, SET_LOADING } from '../actions/types';

const initialState = {
  animes: null,
  anime: null,
  loading: true,
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ANIMES:
      return {
        ...state,
        animes: action.payload,
        loading: false,
      };
    case GET_ANIME:
      return {
        ...state,
        anime: action.payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
