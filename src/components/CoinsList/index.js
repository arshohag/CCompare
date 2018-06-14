import React from 'react';

import { Link } from 'react-router-dom';
import { Button, Card, Row, Col, Navbar, NavItem, Icon, Dropdown, Input, Tabs, Tab, Table} from 'react-materialize';
import ReactTooltip from 'react-tooltip';
import {RateBox, TabsWrapper as CoinDetails} from '../CoinDetails';
import  Charts from '../Charts'
type Props = { list: Array<Object> };

export default class ChartsList extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        allData:'',
        coin_name:'',
        market_cap:'',
        day_volumn:'',
        total_score:'',
        toggleCoinSlider:true

    }
    this.nextRoute=this.nextRoute.bind(this);
    this.changeInnerRoutes=this.changeInnerRoutes.bind(this);
    this.toggleCoinSlider = this.toggleCoinSlider.bind(this);
    console.log(props,'coinslist props');
  }
  componentWillMount(){
    // console.log(this.props.allProps.coin.list,'coinlist props');
    let coin_name=this.props.allProps.coin.list.market.name;
    let market_cap=this.props.allProps.coin.list.market.market_cap_usd;
    let total_score=this.props.allProps.coin.list.total_score;
    total_score=Math.floor(total_score/100*5);
    // let day_volumn=this.props.allProps.coin.list.market.24h_volume_usd
    this.setState({
        coin_name:coin_name,
        market_cap:market_cap,
        total_score:total_score
    })
  }
  componentWillReceiveProps(props,nextProps){
    // this.setState({allData:this.props.allProps})
  }
  nextRoute(name){
    this.props.allProps.history.push(name);
  }
  changeInnerRoutes(name){
    this.props.allProps.history.push(name);
  }
  toggleCoinSlider(e){
    e.preventDefault();
    console.log('toggleCoinSlider:',this.state.toggleCoinSlider);
    if(this.state.toggleCoinSlider){
        this.setState({
           toggleCoinSlider:false
        });
    }else{
        this.setState({
           toggleCoinSlider:true
        });
    }
  }
  render() {
     let image_name=this.props.allProps.coin.list.market.id+'-'+this.props.allProps.coin.list.logos.logo;
    console.log(this.props.allProps.coin.list.market.name,'coinlist state')
    return (
      <div className="wrapper">
        <div className="tab-table coin-highligh mb20">
            <div className="tab-table-left">
                <img className="coin-image" src={"https://coincheckup.com/images/coins/"+image_name+".png"}/>
                <div className="coin-info">
                    <h2>{this.state.coin_name} <span>BTC</span>  <i className="zmdi zmdi-favorite-outline"></i></h2>
                    <span className="coin-price"><i className="zmdi zmdi-long-arrow-down"></i> RP104,772,321.92</span>
                </div>
            </div>
            <div className="tab-table-right">
                <div className="row-rapper">
                    <div className="marketcap">
                        <span className="primary">MARKET CAP</span>
                        <span className="secondary">Rp {this.state.market_cap} K</span>
                    </div>    
                    <div className="marketcap">
                        <span className="primary">24H VOLUME</span>
                        <span className="secondary">Rp {this.state.day_volumn} Tn</span>
                    </div>
                    <div className="marketcap">
                        <span className="primary">CHG. 24H:</span>
                        <span className="secondary red_s">-{this.props.allProps.coin.list.market.percent_change_24h}%</span>
                    </div>
                    <div className="marketcap hide992">
                        <span className="primary">CHG. 7D:</span>
                        <span className="secondary green_s">{this.props.allProps.coin.list.market.percent_change_7d}%</span>
                    </div>
                    <div className="marketcap hide992">
                        <span className="primary">CIRC. / MAX SUPPLY</span>
                        <span className="secondary">{this.props.allProps.coin.list.market.total_supply} MM</span>
                    </div>
                    <div className="marketcap">
                        <span className="primary">ALGO. SCORE <span data-tip data-for='tooltip1' className="info-icon"><i className="fa fa-info-circle"></i></span></span>
                        <span className="secondary">
                               <RateBox total_score={this.state.total_score}/>                        
                        </span>
                    </div>
                    <div className="marketcap hide667">
                        <div className="marketcap-social-icons">
                            <i className="zmdi zmdi-globe-alt" data-tip data-for='Website'></i>
                            <i className="fa fa-telegram" data-tip data-for='Telegram'></i>
                            <i className="fa fa-btc" data-tip data-for='BitcoinTalk'></i>
                            <i className="fa fa-github" data-tip data-for='Gitdub'></i>
                            <i className="fa fa-reddit" data-tip data-for='Reddit'></i>
                            <i className="fa fa-rss" data-tip data-for='Blog'></i>
                            <i className="fa fa-cubes" data-tip data-for='Blockexplorer'></i>
                            <i className="fa fa-file-text-o" data-tip data-for='Whitepaper'></i>
                            <i className="fa fa-facebook-official" data-tip data-for='Facebook'></i>
                            <i className="fa fa-slack" data-tip data-for='Slack'></i>
                        </div>
                    </div>
                </div>
                
            </div>

            <ReactTooltip id='Website' type='dark' place="top" effect='solid'>Website</ReactTooltip>
            <ReactTooltip id='Telegram' type='dark' place="top" effect='solid'>Telegram</ReactTooltip>
            <ReactTooltip id='BitcoinTalk' type='dark' place="top" effect='solid'>Bitcoin Talk</ReactTooltip>
            <ReactTooltip id='Gitdub' type='dark' place="top" effect='solid'>Gitdub</ReactTooltip>
            <ReactTooltip id='Reddit' type='dark' place="top" effect='solid'>Reddit</ReactTooltip>
            <ReactTooltip id='Blog' type='dark' place="top" effect='solid'>Blog</ReactTooltip>
            <ReactTooltip id='Blockexplorer' type='dark' place="top" effect='solid'>Block explorer</ReactTooltip>
            <ReactTooltip id='Whitepaper' type='dark' place="top" effect='solid'>Whitepaper</ReactTooltip>
            <ReactTooltip id='Facebook' type='dark' place="top" effect='solid'>Facebook</ReactTooltip>
            <ReactTooltip id='Slack' type='dark' place="top" effect='solid'>Slack</ReactTooltip>

        </div>
        <div className="tab-table">
            <div className={(this.state.toggleCoinSlider === true)? "tab-table-left dn" : "tab-table-left"}>
                <div className="left-panel">
                    <div className="left-panel-header">
                        BITCOIN QUICK STATS
                    </div>
                    <div className="left-panel-data">
                        <Table>
                            <tr>
                                <td>Algoritdmic score <span data-tip data-for='tooltip1' className="info-icon"><i className="fa fa-info-circle"></i></span></td>
                                <td><RateBox total_score={this.state.total_score}/> </td>
                            </tr>
                            <tr>
                                <td>Market cap</td>
                                <td>Rp1,802,558,579,589,376</td> 
                            </tr>
                            <tr>
                                <td>Mkt. Cap. Rank</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td>24h volume</td>
                                <td>Rp67,879,960,960,000</td>
                            </tr>
                            <tr>
                                <td>Circulating supply </td>
                                <td>17,073,875</td>
                            </tr>
                            <tr>
                                <td>Total supply</td>
                                <td>17,073,875</td>
                            </tr>
                            <tr>
                                <td>30 days volatility</td>
                                <td>15.47%</td>
                            </tr>
                            <tr>
                                <td>7 days volatility</td>
                                <td>7.47%</td>
                            </tr>
                        </Table>
                    </div>

                    <div className="left-panel-header">
                        BITCOIN PRICE
                    </div>
                    <div className="left-panel-data">
                        <Table>
                            <tr>
                                <td>BTC/IDR price</td>
                                <td>Rp105,570,048.64</td>
                            </tr>
                            <tr>
                                <td>BTC/Etd price</td>
                                <td>12.4996</td>
                            </tr>
                        </Table>
                    </div>
                    <div className="left-panel-header">
                        BITCOIN PRICE MOVEMENT
                    </div>
                    <div className="left-panel-data">
                        <Table>
                            <tr><td>1 hour</td><td className="negative">  -0.18%</td></tr>
                            <tr><td>1 day </td><td className="negative">  -1.71%</td></tr>
                            <tr><td>7 days</td><td className="positive">  4.60%</td></tr>
                            <tr><td>14 days</td><td className="negative"> -10.54%</td></tr>
                            <tr><td>30 days</td><td className="negative"> -22.55%</td></tr>
                            <tr><td>45 days</td><td className="negative"> -8.40%</td></tr>
                            <tr><td>90 days</td><td className="negative"> -32.75%</td></tr>
                            <tr><td>200 days</td><td className="positive">    1.31%</td></tr>
                        </Table>
                    </div>

                    <div className="left-panel-header">
                        BITCOIN MISC. INFO
                    </div>
                    <div className="left-panel-data">
                        <Table>
                            <tr><td>% of total market <span data-tip data-for='tooltip4' className="info-icon"><i className="fa fa-info-circle"></i></span></td><td className="positive">    37.58%</td></tr>
                            <tr><td>Org. structure   </td><td>Decentralized</td></tr>
                            <tr><td>Consensus metdod</td><td> Proof of work</td></tr>
                            <tr><td>Algoritdm</td><td>   SHA256</td></tr>
                            <tr><td>Updated <span data-tip data-for='tooltip6' className="info-icon"><i className="fa fa-info-circle"></i></span></td><td>    a minute ago</td></tr>
                        </Table>
                    </div>

                    
                    <div className="left-panel-info-box"> 
                        Enjoying tde website? Please consider supporting our efforts tdrough a 
                        <Link to="/">donation!</Link>
                    </div>

                    <div className="left-panel-header">
                        BITCOIN ALGO. SCORES <span data-tip data-for='tooltip7' className="info-icon"><i className="fa fa-info-circle"></i></span>
                    </div>
                    <div className="left-panel-data">
                        
                        <div className="progressbar">
                            <div className="progressbar-text strong">Total coin analysis score</div>
                            <div className="progressbar-value">87.75%</div>
                            <div className="progressbar-slider">
                                <span>
                                    <span style={{widtd:'87%'}}></span>
                                </span>
                            </div>
                        </div>
                        <div className="progressbar">
                            <div className="progressbar-text">Open communication channels <span data-tip data-for='tooltip8' className="info-icon"><i className="fa fa-info-circle"></i></span></div>
                            <div className="progressbar-value">70%</div>
                            <div className="progressbar-slider">
                                <span>
                                    <span style={{widtd:'70%'}}></span>
                                </span>
                            </div>
                        </div>
                        <div className="progressbar">
                            <div className="progressbar-text">Product strengtd <span data-tip data-for='tooltip9' className="info-icon"><i className="fa fa-info-circle"></i></span></div>
                            <div className="progressbar-value">100%</div>
                            <div className="progressbar-slider">
                                <span>
                                    <span style={{widtd:'100%'}}></span>
                                </span>
                            </div>
                        </div>
                        <div className="progressbar">
                            <div className="progressbar-text">Gitdub <span data-tip data-for='tooltip10' className="info-icon"><i className="fa fa-info-circle"></i></span></div>
                            <div className="progressbar-value">100%</div>
                            <div className="progressbar-slider">
                                <span>
                                    <span style={{widtd:'100%'}}></span>
                                </span>
                            </div>
                        </div>
                        <div className="progressbar">
                            <div className="progressbar-text">Coin strengtd <span data-tip data-for='tooltip11' className="info-icon"><i className="fa fa-info-circle"></i></span></div>
                            <div className="progressbar-value">73%</div>
                            <div className="progressbar-slider">
                                <span>
                                    <span style={{widtd:'73%'}}></span>
                                </span>
                            </div>
                        </div>
                        <div className="progressbar">
                            <div className="progressbar-text">Brand awareness/Buzz <span data-tip data-for='tooltip12' className="info-icon"><i className="fa fa-info-circle"></i></span></div>
                            <div className="progressbar-value">100%</div>
                            <div className="progressbar-slider">
                                <span>
                                    <span style={{widtd:'100%'}}></span>
                                </span>
                            </div>
                        </div>
                        <div className="progressbar">
                            <div className="progressbar-text">Activity on social media <span data-tip data-for='tooltip13' className="info-icon"><i className="fa fa-info-circle"></i></span></div>
                            <div className="progressbar-value">5%</div>
                            <div className="progressbar-slider">
                                <span>
                                    <span style={{widtd:'5%'}}></span>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="left-panel-info-anchor">
                        <Link to="/"> <i className="zmdi zmdi-trending-up"></i> View full scoring details</Link>
                    </div>

                    <div className="left-panel-header">
                        BITCOIN INVESTMENT STATS
                    </div>
                    <div className="left-panel-data">
                        <Table>
                            <tr><td>Average Daily ROI <span data-tip data-for='tooltip14' className="info-icon"><i className="fa fa-info-circle"></i></span>  </td><td className="negative"> -0.75%</td></tr>
                            <tr><td>Average Montdly ROI <span data-tip data-for='tooltip15' className="info-icon"><i className="fa fa-info-circle"></i></span>    </td><td className="positive"> 24.92%</td></tr>
                            <tr><td>Total ROI <span data-tip data-for='tooltip16' className="info-icon"><i className="fa fa-info-circle"></i></span>   </td><td className="positive"> 5,605.85%</td></tr>
                            <tr><td>Volatility trailing 30 days </td><td className="positive"> 15.47%</td></tr>
                            <tr><td>Volatility trailing 7 days  </td><td className="positive"> 7.47%</td></tr>
                        </Table>
                    </div>

                    <div className="left-panel-info-anchor">
                        <Link to="/"><i className="zmdi zmdi-chart"></i> View more investment stats</Link>
                    </div>
                    
                    <ReactTooltip id='tooltip4' type='dark' place="top" effect='solid'>
                      <span className="w200">tde total market value (Market Cap) as a percentage of tde entire market</span>
                    </ReactTooltip>
                    
                    <ReactTooltip id='tooltip6' type='dark' place="top" effect='solid'>
                      <span className="w200">Price aggregates (1h, 24h, 7d), volume and market cap are updated roughly every 5 minutes</span>
                    </ReactTooltip>

                    <ReactTooltip id='tooltip7' type='dark' place="top" effect='solid'>
                      <span className="w200">CoinCheckUp scores using our proprietary formula and analysis procedures</span>
                    </ReactTooltip>

                    <ReactTooltip id='tooltip8' type='dark' place="top" effect='solid'>
                      <span className="w200">Are tdey open for discussions on Slack, Telegram or at least offer a contact form or email address on tdeir website?</span>
                    </ReactTooltip>
                    <ReactTooltip id='tooltip9' type='dark' place="top" effect='solid'>
                      <span className="w200">Do tdey have a fully working product or just an idea? Is it open source? Does it have a clear roadmap? Is it released and generally available?</span>
                    </ReactTooltip>
                    <ReactTooltip id='tooltip10' type='dark' place="top" effect='solid'>
                      <span className="w200">Are tdey continuously active on Gitdub developing tdeir product and do tdey have a sizeable community?</span>
                    </ReactTooltip>
                    <ReactTooltip id='tooltip11' type='dark' place="top" effect='solid'>
                      <span className="w200">Is tde coin capable of handling tdousands of transactions per second? Is it market friendly and stable? Has it been growing strongly since its release as compared to tde general market since tden?</span>
                    </ReactTooltip>
                    <ReactTooltip id='tooltip12' type='dark' place="top" effect='solid'>
                      <span className="w200">How large and active is tde community as compared to tde rest of tde market?</span>
                    </ReactTooltip>
                    <ReactTooltip id='tooltip13' type='dark' place="top" effect='solid'>
                      <span className="w200">Are tdey active on social media such as Facebook, Twitter and YouTube?</span>
                    </ReactTooltip>


                    <ReactTooltip id='tooltip14' type='dark' place="top" effect='solid'>
                      <span className="w200">Trailing 30 days</span>
                    </ReactTooltip>
                    <ReactTooltip id='tooltip15' type='dark' place="top" effect='solid'>
                      <span className="w200">Trailing 12 montds</span>
                    </ReactTooltip>
                    <ReactTooltip id='tooltip16' type='dark' place="top" effect='solid'>
                      <span className="w200">Since tde coin started trading</span>
                    </ReactTooltip>
                </div>
            </div>
            <div className="tab-table-right">
                <CoinDetails props_data={this.props} nextRoute={this.nextRoute} changeInnerRoutes={this.changeInnerRoutes}  />
                <Link to="/" className="toggle-coin-sidebar" onClick={this.toggleCoinSlider}><span> {(this.state.toggleCoinSlider === true)? 'Show' : 'Hide' } </span> Quick Stats</Link>
            </div>
        </div>

        <ReactTooltip id='tooltip1' type='dark' place="top" effect='solid'>
          <span className="w200">tde total value of tde crypto market cap right now</span>
        </ReactTooltip>

        <ReactTooltip id='ratebox' type='dark' place="top" effect='solid'>
          <span className="w200">Click to see tde full analysis</span>
        </ReactTooltip>

        <ReactTooltip id='rateboxscore' type='dark' place="top" effect='solid'>
          <span className="w200">Algoritdmic score rank</span>
        </ReactTooltip>

        
      </div>
      )
  }
}
