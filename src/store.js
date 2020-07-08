import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Reducer Root
import rootReducer from './reducers';

// Redux Initial State
const initialState = {};

// Middleware
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
