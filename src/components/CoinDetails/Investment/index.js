/* @flow */

import React, {Component} from 'react';

import { Link } from 'react-router-dom';
import { Button, Card, Row, Col, Navbar, NavItem, Icon, Dropdown, Input, Tabs, Tab} from 'react-materialize';
import ReactTooltip from 'react-tooltip'

type Props = { list: Array<Object> };


class Investment extends Component{

constructor(props){
    super(props);
    this.state={
    		investComponent:''
    	}
    this.changeRoute=this.changeRoute.bind(this)
}
componentDidMount(){
}

changeRoute(e,name){
	e.preventDefault();
     // this.props.nextRoute('overview');
     this.setState({investComponent:name})
     this.props.changeInnerRoutes('/coins/'+this.props.coin_type+'/investment/'+name);
}



 render(){
    return(

          <div>
           <div className="tab-sub-nav">
               <ul>
                	<li><Link to={'/coins/'+this.props.coin_type+'/charts/'} className={this.state.investComponent === '' && ("active" )} onClick={(e)=>{this.changeRoute(e,'')}}>GENERAL & AVERAGES</Link></li>
                	<li><Link to={'/coins/'+this.props.coin_type+'/investment/historical-performance'} className={this.state.investComponent === 'historical-performance' && ("active" )} onClick={(e)=>{this.changeRoute(e,'historical-performance')}}>HISTORICAL PERFORMANCE</Link></li>
                	<li><Link to={'/coins/'+this.props.coin_type+'/investment/trading-history'} className={this.state.investComponent === 'trading-history' && ("active" )} onClick={(e)=>{this.changeRoute(e,'trading-history')}}>TRADING HISTORY</Link></li>
                	<li><Link to={'/coins/'+this.props.coin_type+'/investment/vc-information'} className={this.state.investComponent === 'vc-information' && ("active" )} onClick={(e)=>{this.changeRoute(e,'vc-information')}}>VC INFORMATION</Link></li>
                </ul>
           </div>
            <Row className="mt40">
                {this.state.investComponent === '' && (
                    <Col s={12} className=''>
                        <h2>GENERAL & AVERAGES</h2>
                    </Col>
                )}
                 {this.state.investComponent === 'historical-performance' && (
                    <Col s={12} className=''>
                        <h2>HISTORICAL PERFORMANCE</h2>
                    </Col>
                )}
                  {this.state.investComponent === 'trading-history' && (
                    <Col s={12} className=''>
                        <h2>TRADING HISTORICAL</h2>
                    </Col>
                )}
                {this.state.investComponent === 'vc-information' && (
                    <Col s={12} className=''>
                        <h2>VC INFORMATION</h2>
                    </Col>
                )}
            </Row>  
       </div>

        )
 }   
}

export default Investment;
