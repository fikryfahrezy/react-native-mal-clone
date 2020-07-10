import {
  LOGIN_SUCCESS,
  AUTH_ERROR,
  CLEAR_AUTH_ERROR,
  LOGOUT_SUCCESS,
} from './types';

export const login = (data) => {
  const { identifier, password } = data;

  const identifyCheck = 'id';
  const passCheck = '123';

  if (identifier !== identifyCheck || password !== passCheck) {
    return {
      type: AUTH_ERROR,
      payload: 'Invalid Credentials',
    };
  }

  return {
    type: LOGIN_SUCCESS,
    payload: {
      user: 'Mamang Steve',
      token: 'token',
    },
  };
};

export const logout = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};

export const clearError = () => {
  return {
    type: CLEAR_AUTH_ERROR,
  };
};
