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
import Highstock from 'highcharts/highstock';

type Props = { coin: CoinType, fetchUsersIfNeeded: () => void };

class Chart extends Component {
  constructor(props) {
    super(props);
    this.chartContainer = React.createRef();
    console.log(props)
  }

  componentDidMount() {
    console.log(Highcharts);
    this.chart = new Highcharts[this.props.type || 'Chart'](
      this.chartContainer.current,
      this.props.options
    );
     Highcharts.Pointer.prototype.reset =  ()=> {
      console.log('testing')
      return undefined;
    };
  }

  componentWillUnmount() {
    this.chart.destroy();
  }

  render() {
    return <div ref={this.chartContainer} />;
  }
}
class Chart2 extends Component {
  constructor(props) {
    super(props);
    this.chartContainer = React.createRef();
  }

  componentDidMount() {
    console.log(Highcharts);
    this.chart1 = new Highcharts[this.props.type || 'Chart'](
      this.chartContainer.current,
      this.props.options
    );
     Highcharts.Pointer.prototype.reset =  ()=> {
      console.log('testing')
      return undefined;
    };
  }

  componentWillUnmount() {
    this.chart1.destroy();
  }

  render() {
    return <div ref={this.chartContainer} />;
  }
}


// Export this for unit testing more easily
export class Coin extends Component<Props> {
  componentDidMount() {
    this.props.fetchCoinsIfNeeded();
  }

  renderUserList = () => {
    const { coin } = this.props;

    if (
      !coin.readyStatus ||
      coin.readyStatus === 'COINS_INVALID' ||
      coin.readyStatus === 'COINS_REQUESTING'
    ) {
      return <p>Loading...</p>;
    } else if (coin.readyStatus === 'COINS_FAILURE') {
      return <p>Oops, Failed to load list!</p>;
    }

    return <CoinsList list={coin.list.Data} />;
  };


  render() {
    const options = {
     title: {
       text: 'Fruit Consumption',
     },
     xAxis: {
       categories: [
         'Apples',
         'Bananas',
         'Oranges',
         'Pineapples',
         'Blueberries',
       ],
     },
     yAxis: {
       title: {
         text: 'Fruit eaten',
       },
     },
     chart: {
       type: 'line',
     },
     series: [
       {
         name: 'Jane',
         data: [1, 0, 4, 0, 3],
       },
       {
         name: 'John',
         data: [5, 7, 3, 2, 4],
       },
       {
         name: 'Doe',
         data: [0, 0, 0, 1, 0],
       },
     ],
   };

    const options2 = {
     title: {
       text: 'Fruit Consumption',
     },
     xAxis: {
       categories: [
         'Apples',
         'Bananas',
         'Oranges',
         'Pineapples',
         'Blueberries',
       ],
     },
     yAxis: {
       title: {
         text: 'Fruit eaten',
       },
     },
     chart: {
       type: 'area',
     },
     series: [
       {
         name: 'Jane',
         data: [1, 0, 4, 0, 3],
       },
       {
         name: 'John',
         data: [5, 7, 3, 2, 4],
       },
       {
         name: 'Doe',
         data: [0, 0, 0, 1, 0],
       },
     ],
   };
    return (
      <div className={styles.Home}>
        <Helmet title="Home" />
        <Chart options={options} />
        <Chart2 options={options2} />
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

export default compose(withRouter, connector)(Coin);