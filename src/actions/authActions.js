import { LOGIN_SUCCESS, AUTH_ERROR, CLEAR_AUTH_ERROR } from './types';

export const login = (data) => {
  const { identifier, password } = data;

  const identifyCheck = 'steve@gmail.com';
  const passCheck = '123456';

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

export const clearError = () => {
  return {
    type: CLEAR_AUTH_ERROR,
  };
};
