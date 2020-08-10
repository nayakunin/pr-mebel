import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import * as reducers from '../reducers';

const rootReducer = combineReducers(reducers);

const middlewares = [
  thunk,
];

export const configureStore = () => createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION__ // eslint-disable-line no-underscore-dangle
      ? window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line no-underscore-dangle
      : (f) => f,
  ),
);
