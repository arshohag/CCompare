/* @flow */

import axios from 'axios';

import type { Dispatch, GetState, ThunkAction, ReduxState } from '../types';

const API_URL = '/coins';

// Export this for unit testing more easily
export const fetchCoinsType = ( compId:compId): ThunkAction => async (
  dispatch: Dispatch
) => {
  dispatch({ type: 'COINS_SUCCESS' ,compId});
};

const shouldfetchCoin = (state: ReduxState): boolean => {
  // In development, we will allow action dispatching
  // or your reducer hot reloading won't updated on the view
  if (__DEV__) return true;

  // Fetching data once in production
  if (state.home.readyStatus === 'COINS_SUCCESS') return false;

  return true;
};

export const fetchCoins = (compId: string): ThunkAction => (
  dispatch: Dispatch,
  getState: GetState
) => {
  if (shouldfetchCoin(getState(),compId)) {
    return dispatch(fetchCoinsType(compId));
  }

  return null;
};
