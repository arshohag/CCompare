/* @flow */

import React,{ Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.scss';
import Highcharts from 'highcharts/highstock';
import Highstock from 'highcharts/highstock';

class Charts extends Component {
  constructor(props) {
    super(props);
    this.chartContainer = React.createRef();
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
  }

  componentDidMount() {
    console.log('charts',this.props)
	 const options = {
     chart: {
        type: 'line',
        height: 80,
        width:180,
     },
     title: {
       text: null,
     },
     xAxis: {
       categories: [
         'Apples',
         'Bananas',
         'Oranges',
         'Pineapples',
         'Blueberries',
       ],
       visible:false
     },
     yAxis: {
       title: {
         text: null,
       },
       visible:false
     },
     series: [
       {
         data: [1, 0, 4, 0, 3],
       }
     ],
   };
    this.chart = new Highcharts[this.props.type || 'Chart'](
      this.chartContainer.current,
      options
    );
     Highcharts.Pointer.prototype.reset =  ()=> {
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

export default Charts;