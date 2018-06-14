/* @flow */

import axios from 'axios';

import type { Dispatch, GetState, ThunkAction, ReduxState } from '../types';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

// Export this for unit testing more easily
/* istanbul ignore next */
export const fetchUser = (
  userId: string,
  URL: string = API_URL
): ThunkAction => async (dispatch: Dispatch) => {
  dispatch({ type: 'USER_REQUESTING', userId });

  try {
    const { data } = await axios.get(`${URL}/${userId}`);

    dispatch({ type: 'USER_SUCCESS', userId, data });
  } catch (err) {
    dispatch({ type: 'USER_FAILURE', userId, err: err.message });
  }
};

const shouldFetchUser = (state: ReduxState, userId: string): boolean => {
  // In development, we will allow action dispatching
  // or your reducer hot reloading won't updated on the view
  if (__DEV__) return true;

  const userInfo = state.userInfo[userId];

  // Fetching data once in production
  if (userInfo && userInfo.readyStatus === 'USER_SUCCESS') return false;

  return true;
};

export const fetchUserIfNeeded = (userId: string): ThunkAction => (
  dispatch: Dispatch,
  getState: GetState
) => {
  if (shouldFetchUser(getState(), userId)) {
    return dispatch(fetchUser(userId));
  }

  return null;
};
