/* @flow */

import axios from 'axios';

import type { Dispatch, GetState, ThunkAction, ReduxState } from '../types';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Export this for unit testing more easily
export const fetchUsers = (URL: string = API_URL): ThunkAction => async (
  dispatch: Dispatch
) => {
  dispatch({ type: 'USERS_REQUESTING' });

  try {
    const { data } = await axios.get(URL);

      console.log(data,'users')

    dispatch({ type: 'USERS_SUCCESS', data });
  } catch (err) {
    dispatch({ type: 'USERS_FAILURE', err: err.message });
  }
};

const shouldFetchUsers = (state: ReduxState): boolean => {
  // In development, we will allow action dispatching
  // or your reducer hot reloading won't updated on the view
  if (__DEV__) return true;

  // Fetching data once in production
  if (state.home.readyStatus === 'USERS_SUCCESS') return false;

  return true;
};

export const fetchUsersIfNeeded = (): ThunkAction => (
  dispatch: Dispatch,
  getState: GetState
) => {
  if (shouldFetchUsers(getState())) {
    return dispatch(fetchUsers());
  }
  return null;
};
