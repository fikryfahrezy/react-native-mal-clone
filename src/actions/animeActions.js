import axios from 'axios';
import { SEARCH_ANIMES, GET_ANIME, SET_LOADING } from './types';

export const searchAnimes = (search) => async (dispatch) => {
  const res = await axios.get(
    `https://api.jikan.moe/v3/search/anime?q=${search}`
  );

  dispatch({
    type: SEARCH_ANIMES,
    payload: res.data.results,
  });
};

export const getAnime = (id) => async (dispatch) => {
  const res = await axios.get(`https://api.jikan.moe/v3/anime/${id}`);

  dispatch({
    type: GET_ANIME,
    payload: res.data,
  });
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};
