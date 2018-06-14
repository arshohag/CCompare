/* @flow */

import loadable from 'loadable-components';

import { ErrorDisplay, Loading } from '../../components';

export default loadable(() => import('./Coin'), {
  ErrorComponent: ErrorDisplay,
  LoadingComponent: Loading
});
