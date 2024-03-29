import {
  LOGIN_SUCCESS,
  AUTH_ERROR,
  CLEAR_AUTH_ERROR,
  LOGOUT_SUCCESS,
} from '../actions/types';

const initialState = {
  user: null,
  token: null,
  error: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        ...action.payload,
        error: [],
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        token: null,
        error: [],
      };
    case AUTH_ERROR:
      return {
        ...state,
        user: null,
        token: null,
        error: [...state.error, action.payload],
      };
    case CLEAR_AUTH_ERROR:
      return {
        ...state,
        error: [],
      };
    default:
      return state;
  }
};
