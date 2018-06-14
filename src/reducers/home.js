/* @flow */

import fp from 'lodash/fp';

import type { Home, Action } from '../types';

type State = Home;

const initialState = {
  readyStatus: 'HOME_INVALID',
  err: null,
  list: []
};

export default (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'HOME_REQUESTING':
      return fp.assign(state, {
        readyStatus: 'HOME_REQUESTING'
      });
    case 'HOME_FAILURE':
      return fp.assign(state, {
        readyStatus: 'HOME_FAILURE',
        err: action.err
      });
    case 'HOME_SUCCESS':
      return fp.assign(state, {
        readyStatus: 'HOME_SUCCESS',
        list: action.data
      });
    default:
      return state;
  }
};
