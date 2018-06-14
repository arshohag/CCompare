/* @flow */

import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Button, Card, Row, Col, Navbar, NavItem, Icon, Dropdown, Input } from 'react-materialize';
import { Link } from 'react-router-dom';

export default class Footer extends Component {
  render() {
    return(
      <footer>
        <Row className="mb0">
          <Col s={12} className="">
            <nav>
              <ul>
                <li><Link to="/">About</Link></li>
                <li><Link to="/">Blog</Link></li>
                <li><Link to="/">Contact</Link></li>
                <li><Link to="/">Advertising</Link></li>
                <li><Link to="/">Roadmap</Link></li>
                <li><Link to="/">Methodology</Link></li>
                <li><Link to="/">Rating formula</Link></li>
                <li><Link to="/">Disclaimer</Link></li>
                <li><Link to="/">Privacy policy</Link></li>
              </ul>
            </nav>
            <div className="clearfix"></div>
            <div className="social-network-links">
              <ul>
                <li><Link to="/"><i className="zmdi zmdi-twitter-box"></i></Link></li>
                <li><Link to="/"><i className="zmdi zmdi-instagram"></i></Link></li>
                <li><Link to="/"><i className="zmdi zmdi-youtube-play"></i></Link></li>
                <li><Link to="/"><i className="zmdi zmdi-pinterest"></i></Link></li>
                <li><Link to="/"><i className="zmdi zmdi-google-plus"></i></Link></li>
                <li><Link to="/"><i className="zmdi zmdi-linkedin-box"></i></Link></li>
                <li><Link to="/"><i className="zmdi zmdi-facebook-box"></i></Link></li>
              </ul>
            </div>
            <div className="donations-box">
                <p className="donations-box-title">DONATIONS ARE WELCOME</p>
                <p className="donations-box-description">We have spent over 4000 hours on Coin Research and Development and will continue to do so</p>
                <p className="donations-box-link"><Link waves='light' to="" className="btn regular-btn fill-btn">Donate</Link></p>
            </div>
            <div className="copyaddress-box">
              <p className="copyaddress-box-title">Copyright © 2017-2018 CoinCheckup.com</p>
              <p className="copyaddress-box-description">Pricing data by: <Link to="/">CryptoCompare</Link> and <Link to="/">CoinMarketcap</Link></p>
            </div>
          </Col>
        </Row>
      </footer>
      );
  }
}
