/* @flow */

import React from 'react';
import { renderRoutes } from 'react-router-config';
import Helmet from 'react-helmet';
import { hot } from 'react-hot-loader';
import { Link } from 'react-router-dom';
import config from '../config';
import Header from '../components/Common/Header';
import Footer from '../components/Common/Footer';

import { Button, Card, Row, Col, Navbar, NavItem, Icon, Dropdown } from 'react-materialize';

// Import your global styles here
//import './materialize.min.css';
import './styles.scss';

type Props = { route: Object };

const App = ({ route }: Props) => (

  <Row>
    <Helmet {...config.app} />
    <Header/>
	    <Row>
	        <Col s={12}>
		      {renderRoutes(route.routes)}
		    </Col>
		</Row>
    <Footer/>
  </Row>

);

export default hot(module)(App);
