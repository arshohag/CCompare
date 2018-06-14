/* @flow */

import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import home from './home';
import coin from './coin';
import userInfo from './userInfo';

const reducers = {
  home,
  coin,
  userInfo,
  router
};

export type Reducers = typeof reducers;
export default combineReducers(reducers);
