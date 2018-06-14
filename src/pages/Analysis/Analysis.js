/* @flow */

import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';
import { homeAction } from '../../actions';
import type { Home as HomeType, Dispatch, ReduxState } from '../../types';
import styles from './styles.scss';
import { AnalysisComp } from '../../components'
type Props = { home: HomeType, fetchHomeData: () => void };

// Export this for unit testing more easily
export class Analysis extends Component<Props> {
  componentDidMount() {
    this.props.fetchHomeData();
  }

  renderHome = () => {
    const { home } = this.props;
    console.log(home,'Home props')

    if (
      !home.readyStatus ||
      home.readyStatus === 'HOME_INVALID' ||
      home.readyStatus === 'HOME_REUQUESTING'
    ) {
      return <p>Loading...</p>;
    } else if (home.readyStatus === 'HOME_FAILURE') {
      return <p>Oops, Failed to load list!</p>;
    }else{
      return <AnalysisComp/>;
    }
  };

  render() {
    console.log(this.props);
    return (
       <div>
          <Helmet title="Home" />
          { this.renderHome()}
        </div>
    );
  }
}

const connector = connect(
  ({ home }: ReduxState) => ({ home }),
  (dispatch: Dispatch) => ({
    fetchHomeData: () => dispatch(homeAction.fetchHomeData())
  })
);

export default compose(withRouter, connector)(Analysis);
