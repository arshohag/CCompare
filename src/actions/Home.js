/* @flow */

import axios from 'axios';

import type { Dispatch, GetState, ThunkAction, ReduxState } from '../types';

const API_URL = '/coins';

// Export this for unit testing more easily
export const fetchHome = (URL: string = API_URL): ThunkAction => async (
  dispatch: Dispatch
) => {
  dispatch({ type: 'HOME_REQUESTING' });

  try {
    const { data } = await axios.get(API_URL);
    dispatch({ type: 'HOME_SUCCESS', data });
  } catch (err) {
    dispatch({ type: 'HOME_FAILURE', err: err.message });
  }
};

const shouldfetchHomeData = (state: ReduxState): boolean => {
  // In development, we will allow action dispatching
  // or your reducer hot reloading won't updated on the view
  if (__DEV__) return true;

  // Fetching data once in production
  if (state.home.readyStatus === 'HOME_SUCCESS') return false;

  return true;
};

export const fetchHomeData = (): ThunkAction => (
  dispatch: Dispatch,
  getState: GetState
) => {
  if (shouldfetchHomeData(getState())) {
    return dispatch(fetchHome());
  }
  return null;
};
