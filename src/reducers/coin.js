/* @flow */

import fp from 'lodash/fp';

import type { Coin, Action } from '../types';

type State = Coin;

const initialState = {
  readyStatus: 'COINS_INVALID',
  err: null,
  list: []
};

const initialState2 = {
  readyStatus: 'COINS_INVALID',
  err: null,
  time_data: []
};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'COINS_REQUESTING':
      return fp.assign(state, {
        readyStatus: 'COINS_REQUESTING'
      });
    case 'COINS_FAILURE':
      return fp.assign(state, {
        readyStatus: 'COINS_FAILURE',
        err: action.err
      });
    case 'COINS_SUCCESS':
      return fp.assign(state, {
        readyStatus: 'COINS_SUCCESS',
        list: action.data
      }); 
    case 'COINST_SUCCESS':
      return fp.assign(state, {
        readyStatus: 'COINST_SUCCESS',
        time_data: action.time_data
      });
    case 'COINST_FAILURE':
      return fp.assign(state, {
        readyStatus: 'COINST_FAILURE',
        err: action.err
      }); 
    default:
      return state;
  }
};
