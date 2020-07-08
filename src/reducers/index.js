import { combineReducers } from 'redux';
import animeReducer from './animeReducer';
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer,
  anime: animeReducer,
});
