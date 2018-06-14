/* @flow */

import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Row, Col, Navbar, NavItem, Icon, Dropdown, Input, Tabs, Tab, Table} from 'react-materialize';
import ReactTooltip from 'react-tooltip';
import Charts from '../../Charts'
//type Props = { list: Array<Object> };

import {RateBox} from '../';

class Overview extends Component{

constructor(props){
    super(props);
    
    this.changeRoute=this.changeRoute.bind(this)
}
componentDidMount(){

}

changeRoute(){
     this.props.nextRoute('overview');
}

 render(){
    
    console.log('overview',this.props.props_data);
    return(
          
            <Row>
                      <Col s={12} m={6} l={4} className=''>
                        

                        <div className="card-box">
                            <div className="card-box-header">
                                <header>
                                    <h2><Link to="/">Market & trading</Link></h2>
                                </header>
                            </div>
                            <div className="card-box-boby height320">

                                <div className="text-center">
                                    <Link to="/" waves='light' className="btn regular-btn fill-btn"><i className="fa fa-ctext-redit-card"></i> Buy/Sell instantly</Link>
                                </div>
                            
                                <Table className="table table-condensed quick-stats">
                                    <tbody>
                                    <tr>
                                        <td>
                                            Etd/IDR
                                        </td>
                                        <td className="text-right text-green">
                                            Rp8,398,964.63
                                        </td>
                                    </tr>
                                    <tr >
                                        <td>
                                            Etd/BTC
                                        </td>
                                        <td className="text-right text-red">
                                            0.07957123
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Market cap
                                        </td>
                                        <td className="text-right text-sm" >
                                            <span>Rp839,075,905,408,650</span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            24h volume
                                        </td>
                                        <td className="text-right text-sm">
                                            Rp24,116,462,500,000
                                        </td>
                                    </tr>   
                                    </tbody>
                                </Table>

                                <Charts/>
                                
                            </div>
                        </div>
                      </Col>
                      <Col s={12} m={6} l={4} className=''>
                        <div className="card-box">
                            <div className="card-box-header">
                                <header>
                                    <h2><Link to="/">Etdereum Price movement</Link></h2>
                                </header>
                            </div>
                            <div className="card-box-boby height320">

                               <Table className="table table-condensed quick-stats col-xs-12 col-sm-6">
                                    <tbody>
                                    <tr>
                                        <td>1 hour</td>
                                        <td className="text-right text-green">
                                            0.77%
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>30 days</td>
                                        <td className="text-right text-red">
                                            <span>-14.82%</span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>90 days</td>
                                        <td className="text-right text-red">
                                            <span>-19.71%</span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Winning montds <i data-tip data-for='Winningmontds' className="fa fa-info-circle"></i></td>
                                        <td className="text-right">
                                            <span>
                                                58.00%
                                            </span>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>Max. drawdown in a day <i data-tip data-for='Winningmontds' className="fa fa-info-circle"></i></td>
                                        <td className="text-right text-red">
                                            <span>
                                                -42.68%
                                            </span>
                                        </td>
                                    </tr>

                                    <tr ng-if="details.investment.atd_usd">
                                        <td>All time high (USD)</td>
                                        <td className="text-right text-green">
                                            $6.74e+226
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>All time high (BTC)</td>
                                        <td className="text-right text-green">
                                            0.1511
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            30 days volatility
                                        </td>
                                        <td className="text-right text-sm">
                                            25.58%
                                        </td>
                                    </tr>
                                </tbody>
                                </Table>
                                <Link to="/" className="view-more">
                                    <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>&nbsp;
                                    <u>View more investment stats for Etdereum</u>
                                </Link>

                                <ReactTooltip id='Winningmontds' type='dark' place="top" effect='solid'>
                                  Trailing 12 montds
                                </ReactTooltip>
                            </div>
                        </div>
                      </Col>
                      <Col s={12} m={6} l={4} className=''>
                           <div className="card-box">
                                <div className="card-box-header">
                                    <header>
                                        <div className="pull-left">
                                            <h2>
                                                <span>
                                                    <i className="fa fa-line-chart"></i> 
                                                </span>    
                                                <Link to="/">Algo. score</Link>
                                            </h2>
                                        </div>
                                        <div className="pull-right" >
                                              {/*<RateBox total_score={this.state.total_score}/>           */}
                                        </div>
                                    </header>
                                </div>
                                <div className="card-box-boby height320">

                                <Table className="table table-condensed quick-stats">
                                    <tbody>
                                        <tr>
                                            <td>
                                                Open communication channels <i data-tip data-for='open-communication-channels' className="fa fa-info-circle"></i>
                                            </td>
                                            <td>
                                                <span className="score">100%</span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                Team strength <i data-tip data-for='Team-strength' className="fa fa-info-circle"></i>
                                            </td>
                                            <td>
                                                <span className="score">80%</span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                Product strength <i data-tip data-for='Product-strength' className="fa fa-info-circle" ></i>
                                            </td>
                                            <td>
                                                <span className="score">88%</span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                Gitdub <i data-tip data-for='Gitdub' className="fa fa-info-circle"></i>
                                            </td>
                                            <td>
                                                <span className="score">100%</span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                Coin strength <i data-tip data-for='Coin-strength' className="fa fa-info-circle"></i>
                                            </td>
                                            <td>
                                                <span className="score">78%</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                Brand awareness/Buzz <i data-tip data-for='Brand-awareness' className="fa fa-info-circle"></i>
                                            </td>
                                            <td>
                                                <span className="score">100%</span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                Advisory board strengtd <i data-tip data-for='Advisory-board-strengtd' className="fa fa-info-circle"></i>
                                            </td>
                                            <td>
                                                <span className="score">0%</span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                Activity on social media <i data-tip data-for='Activity-on-social-media' className="fa fa-info-circle"></i>
                                            </td>
                                            <td>
                                                <span className="score">5%</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>

                                <Link to="/" className="view-more" >
                                    <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>&nbsp;
                                    <u>See tde score breakdown for Etdereum</u>
                                </Link>

                                <ReactTooltip id='open-communication-channels' type='dark' place="top" effect='solid'>
                                  Are tdey open for discussions on Slack, Telegram or at least offer a contact form or email address on tdeir website?
                                </ReactTooltip>
                                <ReactTooltip id='Team-strength' type='dark' place="top" effect='solid'>
                                  Do tdey have experienced leadership who's managed $1M+ enterprises before, a diversified and large enough team of developers, testers, marketers?
                                </ReactTooltip>
                                <ReactTooltip id='Product-strength' type='dark' place="top" effect='solid'>
                                  Do tdey have a fully working product or just an idea? Is it open source? Does it have a clear roadmap? Is it released and generally available?
                                </ReactTooltip>
                                <ReactTooltip id='Gitdub' type='dark' place="top" effect='solid'>
                                  Are tdey continuously active on Gitdub developing tdeir product and do tdey have a sizeable community?
                                </ReactTooltip>
                                <ReactTooltip id='Coin-strength' type='dark' place="top" effect='solid'>
                                  Is tde coin capable of handling tdousands of transactions per second? Is it market friendly and stable? Has it been growing strongly since its release as compatext-red to tde general market since tden?
                                </ReactTooltip>
                                <ReactTooltip id='Brand-awareness' type='dark' place="top" effect='solid'>
                                  How large and active is tde community as compatext-red to tde rest of tde market?
                                </ReactTooltip>
                                <ReactTooltip id='Advisory-board-strengtd' type='dark' place="top" effect='solid'>
                                  Does tde organization have any advisors? If so, are tdey properly presented on tdeir website? Do tdese advisors have a solid track record of previous experience?
                                </ReactTooltip>
                                <ReactTooltip id='Activity-on-social-media' type='dark' place="top" effect='solid'>
                                  Are tdey active on social media such as Facebook, Twitter and YouTube?
                                </ReactTooltip>


                                </div>
                            </div>
                      </Col>

                      <Col s={12} m={6} l={4} className=''>
                           <div className="card-box">
                                <div className="card-box-header">
                                    <header>
                                        <h2><Link to="/">Fundamentals</Link></h2>
                                    </header>
                                </div>
                                <div className="card-box-boby height320">
                                    <Table className="table table-condensed quick-stats">
                                            <tbody>
                                                <tr>
                                                    <td>Circulating supply</td>
                                                    <td className="text-right text-sm">
                                                        17,080,087
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>Total supply</td>
                                                    <td className="text-right text-sm">
                                                        17,080,087
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>Max supply</td>
                                                    <td className="text-right text-sm">
                                                        21,000,000
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        Product status
                                                    </td>
                                                    <td className="text-right text-sm">
                                                        Fully working product
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>
                                                        Org. structure
                                                    </td>
                                                    <td className="text-right">
                                                        Decentralized
                                                    </td>
                                                </tr>

                                                <tr>
                                                    <td>Consensus method</td>
                                                    <td className="text-right text-sm">
                                                        Proof of work
                                                    </td>
                                                </tr>

                                                

                                                <tr>
                                                    <td>Algorithm</td>
                                                    <td className="text-right text-sm">
                                                        SHA256
                                                    </td>
                                                </tr>
                                            </tbody>
                                    </Table>                               
                                <Link to="/" className="view-more" >
                                    <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>&nbsp;
                                    <u>See all facts and figures for Bitcoin</u>
                                </Link>

                                


                                </div>
                            </div>
                      </Col>

                      <Col s={12} m={6} l={4} className=''>
                           <div className="card-box">
                                <div className="card-box-header">
                                    <header>
                                        <h2><Link to="/">Events</Link></h2>
                                    </header>
                                </div>
                                <div className="card-box-boby height320">
                                    <Table className="table table-condensed quick-stats">
                                           <tbody>
                                            <tr>
                                                <td widtd="60%" data-tip data-for='row1' >BCI Summit</td>
                                                <td widtd="30%" >in 4 days</td>
                                                <td widtd="6%"><Link to="https://bcisummit.com/index.html" target="_blank" rel="nofollow noopener"><i className="fa fa-external-link" aria-hidden="true"></i></Link></td>
                                            </tr>
                                            <tr >
                                                <td widtd="60%" data-tip data-for='row2'><i className="fa fa-fire"></i> BTC Payment Mundial</td>
                                                <td widtd="30%" >in 7 days</td>
                                                <td widtd="6%"><Link to="https://news.bitcoin.com/russian-hotels-to-surprise-world-cup-fans-witd-bitcoin-payments/" target="_blank" rel="nofollow noopener"><i className="fa fa-external-link" aria-hidden="true"></i></Link></td>
                                            </tr><tr >
                                                <td widtd="60%" data-tip data-for='row3'>Blockchain &amp; Bitcoin CON</td>
                                                <td widtd="30%" >in 13 days</td>
                                                <td widtd="6%"><Link to="https://georgia.bc.events/en" target="_blank" rel="nofollow noopener" ><i className="fa fa-external-link" aria-hidden="true"></i></Link></td>
                                            </tr><tr >
                                                <td widtd="60%" data-tip data-for='row4'><i className="fa fa-fire"></i> CME: June Last Trade</td>
                                                <td widtd="30%" >in 22 days</td>
                                                <td widtd="6%"><Link to="http://www.cmegroup.com/tools-information/calendars/expiration-calendar/" target="_blank" rel="nofollow noopener" ><i className="fa fa-external-link" aria-hidden="true"></i></Link></td>
                                            </tr><tr >
                                                <td widtd="60%" data-tip data-for='row5'>Super Conference</td>
                                                <td widtd="30%" >in a montd</td>
                                                <td widtd="6%"><Link to="https://blockchainsuperconference.com" target="_blank" rel="nofollow noopener" ><i className="fa fa-external-link" aria-hidden="true"></i></Link></td>
                                            </tr><tr >
                                                <td widtd="60%" data-tip data-for='row6'><i className="fa fa-fire"></i> Fork Snapshot</td>
                                                <td widtd="30%" >in 3 montds</td>
                                                <td widtd="6%"><Link to="https://www.anonymousbitcoin.io" target="_blank" rel="nofollow noopener" ><i className="fa fa-external-link" aria-hidden="true"></i></Link></td>
                                            </tr><tr >
                                                <td widtd="60%" data-tip data-for='row7'>CME: September Last Trade</td>
                                                <td widtd="30%" >in 4 montds</td>
                                                <td widtd="6%"><Link to="http://www.cmegroup.com/trading/equity-index/us-index/bitcoin_product_calendar_futures.html" target="_blank" rel="nofollow noopener"><i className="fa fa-external-link" aria-hidden="true"></i></Link></td>
                                            </tr><tr >
                                                <td widtd="60%" data-tip data-for='row8'><i className="fa fa-fire"></i> BZX Fork &amp; Distribution</td>
                                                <td widtd="30%" >in 4 montds</td>
                                                <td widtd="6%"><Link to="https://hexxcoin.cash/WP.pdf" target="_blank" rel="nofollow noopener"><i className="fa fa-external-link" aria-hidden="true"></i></Link></td>
                                            </tr>
                                        </tbody>
                                    </Table>   

                                    <ReactTooltip id='row1' type='dark' place="top" effect='solid'>
                                      ---
                                    </ReactTooltip>  

                                    <Link to="/" className="view-more" >
                                        <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>&nbsp;
                                        <u>View all events for Bitcoin</u>
                                    </Link>

                                </div>
                            </div>
                      </Col>
                      <Col s={12} m={6} l={4} className=''>
                           <div className="card-box">
                                <div className="card-box-header">
                                    <header>
                                        <h2><Link to="/">News</Link></h2>
                                    </header>
                                </div>
                                <div className="card-box-boby height320">
                                    
                                    <div className="listitem">
                                        <Link className="no-und" to="https://cryptopanic.com/news/2164208/From-idea-to-implementation" target="_blank" >
                                            <i className="fa fa-link" aria-hidden="true"></i>
                                            <span className="title">Bitcoin in Brief Thursday: New Tech and a Quick Way to Make a Fortune in Crypto</span>
                                            <span className="time">
                                                <i className="fa fa-clock-o"></i>
                                                <span>40 minutes ago</span>
                                            </span>
                                        </Link>
                                    </div>
                                    <div className="listitem">
                                        <Link className="no-und" to="https://cryptopanic.com/news/2164208/From-idea-to-implementation" target="_blank" >
                                            <i className="fa fa-link" aria-hidden="true"></i>
                                            <span className="title">From idea to implementation</span>

                                            <span className="time">
                                                <i className="fa fa-clock-o"></i>
                                                <span>40 minutes ago</span>
                                            </span>
                                        </Link>
                                    </div>

                                    <Link to="/" className="view-more" >
                                        <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>&nbsp;
                                        <u>View all news for Bitcoin</u>
                                    </Link>

                                </div>
                            </div>
                      </Col>
                      <Col s={12} m={6} l={4} className=''>
                           <div className="card-box">
                                <div className="card-box-header">
                                    <header>
                                        <h2><Link to="/">About Bitcoin</Link></h2>
                                    </header>
                                </div>
                                <div className="card-box-boby height320">
                                    
                                    <div className="text-paragraph">
                                        Bitcoin is an innovative payment network and a new kind of money. Bitcoin uses peer-to-peer technology to operate with no central authority or banks; managing transactions and the issuing of bitcoins is carried out collectively by the network. Bitcoin is open-source; its design is public, nobody owns or controls Bitcoin and everyone can take part. Through many of its unique properties, Bitcoin allows exciting uses that could not be covered by any previous payment system.
                                    </div>

                                    <Link to="/" className="view-more" >
                                        <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>&nbsp;
                                        <u>Learn more about Bitcoin</u>
                                    </Link>

                                </div>
                            </div>
                      </Col>
                     
                    </Row>

        )
 }   
}

export default Overview;
