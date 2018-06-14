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
    		predictionComponent:''
    	}
    this.changeRoute=this.changeRoute.bind(this)
}
componentDidMount(){
}

changeRoute(e,name){
	e.preventDefault();
     // this.props.nextRoute('overview');
     this.setState({predictionComponent:name})
     this.props.changeInnerRoutes('/coins/'+this.props.coin_type+'/predictions/'+name);
}



 render(){
    return(

          <div>
           <div className="tab-sub-nav">
               <ul>
                	<li><Link to={'/coins/'+this.props.coin_type+'/charts/'} className={this.state.predictionComponent === '' && ("active" )} onClick={(e)=>{this.changeRoute(e,'')}}>WORLDWIDE MONEY FLOWS</Link></li>
                	<li><Link to={'/coins/'+this.props.coin_type+'/investment/bitcoin-similar'} className={this.state.predictionComponent === 'bitcoin-similar' && ("active" )} onClick={(e)=>{this.changeRoute(e,'bitcoin-similar')}}>{'BITCOIN\'S GROWTH'}</Link></li>
                	<li><Link to={'/coins/'+this.props.coin_type+'/investment/other-tech'} className={this.state.predictionComponent === 'other-tech' && ("active" )} onClick={(e)=>{this.changeRoute(e,'other-tech')}}>OTHER TECH SECTORS</Link></li>
                </ul>
           </div>
            <Row className="mt40">
                {this.state.predictionComponent === '' && (
                    <Col s={12} className=''>
                        <h2>WORLDWIDE MONEY FLOWS</h2>
                    </Col>
                )}
                 {this.state.predictionComponent === 'bitcoin-similar' && (
                    <Col s={12} className=''>
                        <h2>BITCOIN's GROWTH</h2>
                    </Col>
                )}
                  {this.state.predictionComponent === 'other-tech' && (
                    <Col s={12} className=''>
                        <h2>OTHER TECH SECTORS</h2>
                    </Col>
                )}
            </Row>  
       </div>

        )
 }   
}

export default Investment;
