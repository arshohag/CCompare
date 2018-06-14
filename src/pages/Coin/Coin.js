/* @flow */

import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';

import { cryptoAction } from '../../actions';
import type { Coin as CoinType, Dispatch, ReduxState } from '../../types';
import { CoinsList } from '../../components';
import styles from './styles.scss';
import Highcharts from 'highcharts/highstock';
import data from './aapl-c.json';

type Props = { coin: CoinType, time_data: CoinType, fetchCoinsData: () => void, fetchCoinsTimeData : () => void };



// Export this for unit testing more easily
export class Coin extends Component<Props> {
  constructor(props){
    super(props);
    
  }
  componentDidMount() {
    this.props.fetchCoinsData(this.props.match.params.coin);
    // this.props.fetchCoinsTimeData(this.props.match.params.coin);
  }

  renderUserList = () => {
    const { coin } = this.props;
    console.log(this.props,'props coins 1')

    if (
      !coin.readyStatus ||
      coin.readyStatus === 'COINS_INVALID' ||
      coin.readyStatus === 'COINS_REQUESTING'
    ) {
      return <p>Loading...</p>;
    } else if (coin.readyStatus === 'COINS_FAILURE') {
      return <p>Oops, Failed to load list!</p>;
    // }
    }else if(coin.readyStatus === 'COINS_SUCCESS'){
      console.log(this.props,'props coins')
      return <CoinsList allProps={this.props}/>;
    }
  };
  componentWillReceiveProps(){
    console.log(this.props,'coinlist pages')
  }


  render() {
    return (
        <div >
          <Helmet title="Home" />
          {this.renderUserList()}
        </div>
      );
    }
  }

const connector = connect(
  ({ coin, time_data }: ReduxState) => ({ coin,time_data }),
  (dispatch: Dispatch) => ({
    fetchCoinsData: (coin_type : string) => dispatch(cryptoAction.fetchCoinsData(coin_type)),
    fetchCoinsTimeData: (coin_type : string) => dispatch(cryptoAction.fetchCoinsTimeData(coin_type)),
  })
);

export default compose(withRouter, connector)(Coin);
