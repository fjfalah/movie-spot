import { useMemo } from 'react';
import {
  createStore,
  applyMiddleware,
  Store,
  $CombinedState,
  AnyAction,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import { IS_PRODUCTION } from '../config';

import reducers from './reducers';

type ConfigureStoreType = Store<
  {
    readonly [$CombinedState]?: undefined;
  },
  AnyAction
> & {
  dispatch: unknown;
};

let store;
const middlewares = [];
if (!IS_PRODUCTION) {
  middlewares.push(logger);
}
middlewares.push(thunk);
const configureStore = (initialState = {}): ConfigureStoreType => {
  return createStore(reducers, initialState, applyMiddleware(...middlewares));
};
export const initializeStore = (preloadedState = {}): ConfigureStoreType => {
  let newStore = store ?? configureStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    newStore = configureStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return newStore;
  // Create the store once in the client
  if (!store) store = newStore;

  return newStore;
};

export const useStore = (initialState = {}): ConfigureStoreType => {
  return useMemo(() => initializeStore(initialState), [initialState]);
};

export type AppDispatch = typeof store.dispatch;
