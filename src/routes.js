/* @flow */

import { usersAction, userAction, cryptoAction, homeAction, coinsAction } from './actions';
import App from './app';
import { asyncHome, asyncUserInfo, NotFound, asyncCoin, asyncCharts, asyncGlobal, asyncNewlyAdded, asyncTopGainers, asyncTopLosers, asyncAnalysis, asyncInvestment } from './pages';

export default [
  {
    component: App,
    routes: [
      {
        path: '/users',
        exact: true,
        component: asyncHome, // Add your route here
        loadData: () => [
          homeAction.fetchHomeData()
          // Add other pre-fetched actions here
        ]
      },
      {
        path: '/',
        exact: true,
        component: asyncHome, // Add your route here
        loadData: () => [
          // Add other pre-fetched actions here
        ]
      },
      {
        path: '/UserInfo/:id',
        component: asyncUserInfo, 
        loadData: ({ params }: Object) => [
          userAction.fetchUserIfNeeded(params.id)
        ]
      },
      {
        path: '/coins/:coin/:coin_type',
        component: asyncCoin,
        loadData: ({ params }: Object) => [
          cryptoAction.fetchCoinsData(params.coin),
          cryptoAction.fetchCoinsTimeData(params.coin),
          // Add other pre-fetched actions here
        ]
      },
       {
        path: '/coins/:coin',
        component: asyncCoin,
        loadData: ({ params }: Object) => [
          cryptoAction.fetchCoinsData(params.coin),
          cryptoAction.fetchCoinsTimeData(params.coin),
          // Add other pre-fetched actions here
        ]
      },
       {
        path: '/global',
        exact: true,
        component: asyncGlobal, // Add your route here
        loadData: () => [
          homeAction.fetchHomeData()
          // Add other pre-fetched actions here
        ]
      },
      {
        path: '/newly-added',
        exact: true,
        component: asyncNewlyAdded, // Add your route here
        loadData: () => [
          homeAction.fetchHomeData()
          // Add other pre-fetched actions here
        ]
      },
      {
        path: '/top-gainers',
        exact: true,
        component: asyncTopGainers, // Add your route here
        loadData: () => [
          homeAction.fetchHomeData()
          // Add other pre-fetched actions here
        ]
      },
      {
        path: '/top-losers',
        exact: true,
        component: asyncTopLosers, // Add your route here
        loadData: () => [
          homeAction.fetchHomeData()
          // Add other pre-fetched actions here
        ]
      },
      {
        path: '/analysis',
        exact: true,
        component: asyncAnalysis, // Add your route here
        loadData: () => [
          homeAction.fetchHomeData()
          // Add other pre-fetched actions here
        ]
      },
      {
        path: '/investment',
        exact: true,
        component: asyncInvestment, // Add your route here
        loadData: () => [
          homeAction.fetchHomeData()
          // Add other pre-fetched actions here
        ]
      },
      {
        component: NotFound
      }
    ]
  }
];
