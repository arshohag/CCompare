  /* @flow */

  import axios from 'axios';

  import type { Dispatch, GetState, ThunkAction, ReduxState } from '../types';


  // Export this for unit testing more easily
  export const fetchCoins = (coin_type: string ): ThunkAction => async (
    dispatch: Dispatch
  ) => {
    dispatch({ type: 'COINS_REQUESTING' });

    try {
      const API_URL = '/coin/'+coin_type;
      const { data } = await axios.get(API_URL);
      dispatch({ type: 'COINS_SUCCESS', data });
    } catch (err) {
      dispatch({ type: 'COINS_FAILURE', err: err.message });
    }
  };

  export const fetchCoinsTime = (coin_type: string ): ThunkAction => async (
    dispatch: Dispatch
  ) => {
    dispatch({ type: 'COINS_TIMELINE_REQUESTING' });

    try {
      const API_URL1 = '/ticker/'+coin_type;
      const { time_data } = await axios.get(API_URL1);
      dispatch({ type: 'COINST_SUCCESS', time_data });
    } catch (err) {
      dispatch({ type: 'COINST_FAILURE', err: err.message });
    }
  };

   export const fetchCoinsTimeData = (coin_type): ThunkAction => (
    dispatch: Dispatch,
    getState: GetState
  ) => {
    if (shouldFetchTime(getState(),coin_type)) {
      return dispatch(fetchCoinsTime(coin_type));
    }

    return null;
  };


  const shouldFetchCoins = (state: ReduxState,coin_type): boolean => {
    // In development, we will allow action dispatching
    // or your reducer hot reloading won't updated on the view
    if (__DEV__) return true;

    // Fetching data once in production
    if (state.coin.readyStatus === 'COINS_SUCCESS') return false;

    return true;
  };
  const shouldFetchTime = (state: ReduxState,coin_type): boolean => {
    // In development, we will allow action dispatching
    // or your reducer hot reloading won't updated on the view
    if (__DEV__) return true;

    // Fetching data once in production
    if (state.time_data.readyStatus === 'COINST_SUCCESS') return false;

    return true;
  };

  /* istanbul ignore next */
 
export const fetchCoinsData = (coin_type): ThunkAction => (
    dispatch: Dispatch,
    getState: GetState
  ) => {
    /* istanbul ignore next */
    if (shouldFetchCoins(getState(),coin_type)) {
      /* istanbul ignore next */
      return dispatch(fetchCoins(coin_type));
    }

    /* istanbul ignore next */
    return null;
  };

