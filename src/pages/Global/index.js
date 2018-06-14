/* @flow */

import loadable from 'loadable-components';

import { ErrorDisplay, Loading } from '../../components';

export default loadable(() => import('./Global'), {
  ErrorComponent: ErrorDisplay,
  LoadingComponent: Loading
});
