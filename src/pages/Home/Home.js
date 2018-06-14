/* @flow */

import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Helmet from 'react-helmet';

import { homeAction } from '../../actions';
import type { Home as HomeType, Dispatch, ReduxState } from '../../types';
import { UserList } from '../../components';
import styles from './styles.scss';
import { GridStructure } from '../../components'
type Props = { home: HomeType, fetchHomeData: () => void };

// Export this for unit testing more easily
export class Home extends Component<Props> {
  componentDidMount() {
    this.props.fetchHomeData();
  }

  renderHome = () => {
    const { home } = this.props;

    if (
      !home.readyStatus ||
      home.readyStatus === 'HOME_INVALID' ||
      home.readyStatus === 'HOME_REUQUESTING'
    ) {
      return <p>Loading...</p>;
    } else if (home.readyStatus === 'HOME_FAILURE') {
      return <p>Oops, Failed to load list!</p>;
    }else{
      return <GridStructure  data={home.list}/>;
    }
  };

  render() {
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

export default compose(withRouter, connector)(Home);
