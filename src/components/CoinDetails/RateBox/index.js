import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
type Props = { list: Array<Object> };
 
export default  class RateBox extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <span>
          <span data-tip data-for='ratebox' className="ratting-box">
          {this.props.total_score}/5
          <i className="fa fa-star" aria-hidden="true"></i>
          </span>
          <span data-tip data-for='rateboxscore' className="ratting-score">(#5)</span>
        </span>
    )
  }
}