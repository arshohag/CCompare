/* @flow */

import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';

import { cryptoAction } from '../../actions';
import type { Coin as CoinType, Dispatch, ReduxState } from '../../types';
import { GridStructure } from '../../components';
import styles from './styles.scss';
import Highcharts from 'highcharts/highstock';
import Highstock from 'highcharts/highstock';

type Props = { coin: CoinType, fetchUsersIfNeeded: () => void };


// Export this for unit testing more easily
export class Grids extends Component<Props> {
  componentDidMount() {
    this.props.fetchCoinsIfNeeded();
  }

  render() {
    return (
      <div className={styles.Home}>
        <Helmet title="Home" />
        <GridStructure/>
      </div>
    );
  }
}

const connector = connect(
  ({ coin }: ReduxState) => ({ coin }),
  (dispatch: Dispatch) => ({
    fetchCoinsIfNeeded: () => dispatch(cryptoAction.fetchCoinsIfNeeded())
  })
);

export default compose(withRouter, connector)(Grids);