/* @flow */

import React, { Component } from 'react';
import { Button, Card, Row, Col, Navbar, NavItem, Icon, Dropdown, Input } from 'react-materialize';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import ReactTooltip from 'react-tooltip'

export default  class Header extends Component {
  constructor(props) {
    super(props);
    this.state={
      selectedOption:
          {
            value: 'one',
            label: 'One'
           }
         }
    this.handleChange=this.handleChange.bind(this);
  }


  handleChange=(selectedOption)=>{
    this.setState({ selectedOption });
    // selectedOption can be null when the `x` (close) button is clicked
    if (selectedOption) {
      console.log(`Selected: ${selectedOption.label}`);
    }
  }

  render() {
    var selectedOption= this.state.selectedOption;
    return(
      <header>
        <Row className="mb0">
          <Col s={12} className="topHeader p0">
            <div className="info-left left">
              <span data-tip data-for='globalmarket'>Global market: <strong>$ 323.8089 Bn</strong></span>
              <span data-tip data-for='volume24'>24h volume: <strong>$ 17.6951 Bn</strong></span>
              <span>BTC dominance: <strong>39.14% </strong></span>
            </div>
            <div className="info-right right">
              <ul>
                <li> <i className="zmdi zmdi-brightness-3"></i> DARK THEME</li>
                <li className="active"><i className="zmdi zmdi-brightness-7"></i> LIGHT THEME</li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row id="navbar">
          <Col s={12} className="p0">
            <Link to="/" className="brand-logo logo"><img src="/lib/images/logo.png"/></Link>
            <Navbar id="nav">
              <Link to="/" className="brand-logo-nav">
                <img src="lib/images/logo.png"/>
                <span className="close-nav"><i className="zmdi zmdi-close"></i></span>
              </Link>
              <NavItem to="/">
                <span className="nav-anc">MARKET <i className="zmdi zmdi-chevron-down"></i></span>
                <div className="submenu">
                  <div className="submenu-section w40p">
                    <div className="section-title" id="linkTitle02">
                      Overviews
                      <span className="open"><i className="zmdi zmdi-minus"></i></span>
                      <span className="close"><i className="zmdi zmdi-plus"></i></span>
                    </div>
                    <ul className="section-links linkTitle02List">
                        <li>
                          <Link to="/" >
                            <span className="link-title">Market Overview</span>
                            <span className="link-description">Watch updated crypto prices, market caps, volumes.</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/global" >
                            <span className="link-title">Global Market Chart</span>
                            <span className="link-description">Historical market cap and volume for the entire market.</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/newly-added" >
                            <span className="link-title">Recently Added</span>
                            <span className="link-description">Discover the latest coins listed on CoinCheckup.</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/top-gainers" >
                            <span className="link-title">Top Gainers</span>
                            <span className="link-description">Best performing coins over the last 24h.</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/top-losers" >
                            <span className="link-title">Top Losers</span>
                            <span className="link-description">Worst performing coins over the last 24h.</span>
                          </Link>
                        </li>
                    </ul>
                  </div>
                  <div className="submenu-section w60p">
                    <div className="section-title" id="linkTitle01">
                      Categories
                      <span className="open"><i className="zmdi zmdi-minus"></i></span>
                      <span className="close"><i className="zmdi zmdi-plus"></i></span>
                    </div>
                    <ul className="section-links links-column linkTitle01List">
                      <li>
                        <Link to="/" >
                        <span className="link-title">Digital currency</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/" >
                        <span className="link-title">Trading</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/" >
                        <span className="link-title">Platform</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/" >
                        <span className="link-title">Exchange</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/" >
                        <span className="link-title">Smart contracts</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/" >
                        <span className="link-title">Build dapps</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/" >
                        <span className="link-title">Payments</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/" >
                        <span className="link-title">Unclear</span>
                        </Link>
                      </li>
                      <li >
                        <Link to="/" >
                        <span className="link-title">Privacy</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/" >
                        <span className="link-title">Gambling</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/" >
                        <span className="link-title">Gaming</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/" >
                        <span className="link-title">Multi-currency wallet</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/" >
                        <span className="link-title">Token issuance</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/" >
                        <span className="link-title">Real world assets</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/" >
                        <span className="link-title">Payments service provider</span>
                        </Link>
                      </li>

                      <li>
                        <Link to="/" >
                        <span className="link-title">Anonymity</span>
                        </Link>
                      </li>
                      <li >
                        <Link to="/" >
                        <span className="link-title">Marketplace</span>
                        </Link>
                      </li>
                      <li>
                        <Link to="/" >
                        <span className="link-title">Blockchain as a service</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </NavItem>
              <NavItem to="/">
                <span className="nav-anc">ANALYSIS <i className="zmdi zmdi-chevron-down"></i></span>
                <div className="submenu">
                  <div className="submenu-section w50p">
                    <div className="section-title" id="linkTitle03">
                      METHODS
                      <span className="open"><i className="zmdi zmdi-minus"></i></span>
                      <span className="close"><i className="zmdi zmdi-plus"></i></span>
                    </div>
                    <ul className="section-links linkTitle03List">
                        <li>
                          <Link to="/analysis" >
                            <span className="link-title">Fundamental Analysis</span>
                            <span className="link-description">Fundamental analysis based on our Algorithmic scores.</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/investment" >
                            <span className="link-title">Investment Analysis</span>
                            <span className="link-description">Hhistorical performance and stats for all cryptocurrencies.</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/" >
                            <span className="link-title">GitHub Analysis</span>
                            <span className="link-description">Development activity for over 950 open source cryptocurrencies.</span>
                          </Link>
                        </li>
                    </ul>
                  </div>
                  <div className="submenu-section w50p">
                    <div className="section-title" id="linkTitle04">
                      TOOLS
                      <span className="open"><i className="zmdi zmdi-minus"></i></span>
                      <span className="close"><i className="zmdi zmdi-plus"></i></span>
                    </div>
                    <ul className="section-links linkTitle04List">
                        <li>
                          <Link to="/" target="_blank">
                            <span className="link-title">Pump & Dump updates</span>
                            <span className="link-description">Live pump and dump information, Which cryptos show sudden spikes?</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/" target="_blank">
                            <span className="link-title">Arbitrage opportunities</span>
                            <span className="link-description">Listing all arbitrage opportunities from 50USD to 50+ BTC.</span>
                          </Link>
                        </li>
                        <li>
                          <Link to="/" target="_blank">
                            <span className="link-title">Crypto Questions</span>
                            <span className="link-description">Answering most of your crypto questions. </span>
                          </Link>
                        </li>
                    </ul>
                  </div>
                </div>
              </NavItem>

              <NavItem to="/" data-tip data-for='PREDICTIONS' ><span className="nav-anc">PREDICTIONS</span></NavItem>
              <NavItem to="/">
                <span className="nav-anc">ICOs <i className="zmdi zmdi-chevron-down"></i></span>
                <div className="submenu">
                  <div className="submenu-section w30p">
                    <div className="section-title" id="linkTitle05">
                      Overviews
                      <span className="open"><i className="zmdi zmdi-minus"></i></span>
                      <span className="close"><i className="zmdi zmdi-plus"></i></span>
                    </div>
                    <ul className="section-links linkTitle05List">
                        <li>
                          <a href="/" target="_blank">
                            <span className="link-title">Current ICOs</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" target="_blank">
                            <span className="link-title">Upcoming ICOs</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" target="_blank">
                            <span className="link-title">Archived ICOs</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" target="_blank">
                            <span className="link-title">Publish ICOs</span>
                          </a>
                        </li>
                    </ul>
                  </div>
                  <div className="submenu-section w70p">
                    <div className="section-title" id="linkTitle06">
                      Categories
                      <span className="open"><i className="zmdi zmdi-minus"></i></span>
                      <span className="close"><i className="zmdi zmdi-plus"></i></span>
                    </div>
                      <ul className="section-links links-column-3label linkTitle06List">
                        <span className="col-section">
                        <li>
                          <a href="/" target="_blank">
                          <span className="link-title">Art</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" target="_blank">
                          <span className="link-title">Artificial Intelligence</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" target="_blank">
                          <span className="link-title">Banking</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" target="_blank">
                          <span className="link-title">Big Data</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" target="_blank">
                          <span className="link-title">Business services</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" target="_blank">
                          <span className="link-title">Casino & Gambling</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" target="_blank">
                          <span className="link-title">Charity</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" target="_blank">
                          <span className="link-title">Communication</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" target="_blank">
                          <span className="link-title">Cryptocurrency</span>
                          </a>
                        </li>
                        </span>
                        <span className="col-section">
                        <li>
                          <a href="/" target="_blank">
                          <span className="link-title">Cryptocurrency Smart Contract</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" target="_blank">
                          <span className="link-title">Education</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" target="_blank">
                          <span className="link-title">Electronics</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" target="_blank">
                          <span className="link-title">Energy</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" target="_blank">
                          <span className="link-title">Entertainment</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" target="_blank">
                          <span className="link-title">Health</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" target="_blank">
                          <span className="link-title">Infrastructure</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" target="_blank">
                          <span className="link-title">Internet</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" target="_blank">
                          <span className="link-title">Investment</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" target="_blank">
                          <span className="link-title">Legal</span>
                          </a>
                        </li>
                        </span>
                        <span className="col-section">
                        <li>
                          <a href="/" target="_blank">
                          <span className="link-title">Manufacturing</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" target="_blank">
                          <span className="link-title">Media</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" target="_blank">
                          <span className="link-title">Other</span>
                          </a>
                        </li>
                         <li>
                          <a href="/" target="_blank">
                          <span className="link-title">Platform</span>
                          </a>
                        </li>
                         <li>
                          <a href="/" target="_blank">
                          <span className="link-title">Real estate</span>
                          </a>
                        </li>
                         <li>
                          <a href="/" target="_blank">
                          <span className="link-title">Retail</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" target="_blank">
                          <span className="link-title">Smart Contract</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" target="_blank">
                          <span className="link-title">Software</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" target="_blank">
                          <span className="link-title">Sports</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" target="_blank">
                          <span className="link-title">Tourism</span>
                          </a>
                        </li>
                        <li>
                          <a href="/" target="_blank">
                          <span className="link-title">Virtual Reality</span>
                          </a>
                        </li>
                        </span>
                      </ul>
                  </div>
                </div>
              </NavItem>
              <NavItem to="#" className="auth-mobile">
                <span className="nav-anc">Account <i className="zmdi zmdi-chevron-down"></i></span>
                <div className="submenu">
                  <div className="submenu-section w30p">
                    <ul className="section-links-auth">
                        <li>
                          <a href="/login" target="_blank">
                            <span className="link-title">Login</span>
                          </a>
                        </li>
                        <li>
                          <a href="/signup" target="_blank">
                            <span className="link-title">Signup</span>
                          </a>
                        </li>
                    </ul>
                  </div>
                </div>
              </NavItem>
            </Navbar>
            <Link to="/" className="search-mobile-btn">
                <i className="zmdi zmdi-search"></i>
            </Link>
            <div id="search">
              <div className="search-input">
                <Input validate placeholder="Search" />
                <span className="search-icon"><i className="zmdi zmdi-search"></i></span>
              </div>
              <div className="select-cur">
                <Select
                  name="form-field-name"
                  value={selectedOption}
                  onSelectResetsInput
                  onBlurResetsInput={false}
                  onChange={this.handleChange}
                  options={[
                    { value: 'one', label: 'One' },
                    { value: 'two', label: 'Two' },
                    { value: 'three', label: 'three' },
                    { value: 'four', label: 'four' },
                    { value: 'five', label: 'five' }
                  ]}
                />
              </div>
              <Button waves='light' className="regular-btn clear-btn">Login</Button>
              <Button waves='light' className="regular-btn fill-btn hide-1220px">Sign Up</Button>
            </div>

          </Col>
        </Row>
        {/*}
        <ReactTooltip id='PREDICTIONS' type='dark' place="bottom" effect='solid'>
          <span className="w200">Price predictions based on other markets&#x275C; growth patterns</span>
        </ReactTooltip>
        <ReactTooltip id='volume24' type='dark' place="bottom" effect='solid'>
          <span className="w200">The total market trading volume over the past 24h</span>
        </ReactTooltip>
        <ReactTooltip id='globalmarket' type='dark' place="bottom" effect='solid'>
          <span className="w200">The total value of the crypto market cap right now</span>
        </ReactTooltip>
      */}


      </header>
      );
  }
}
