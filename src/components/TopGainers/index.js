/* @flow */

import React from 'react';

import { Link } from 'react-router-dom';

import styles from './styles.scss';

type Props = { list: Array<Object> };

export default ({ list }: Props) => (
  <div className={styles.UserList}>
    <h4>Top Gainers</h4>

  </div>
);
