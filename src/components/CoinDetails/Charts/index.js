/* @flow */

import React, {Component} from 'react';

import { Link } from 'react-router-dom';
import { Button, Card, Row, Col, Navbar, NavItem, Icon, Dropdown, Input, Tabs, Tab} from 'react-materialize';
import ReactTooltip from 'react-tooltip'

type Props = { list: Array<Object> };


class Charts extends Component{

constructor(props){
    super(props);
    this.state={
    		chartComponent:''
    	}
    this.changeRoute=this.changeRoute.bind(this)
}
componentDidMount(){
}

changeRoute(e,name){
	e.preventDefault();
     // this.props.nextRoute('overview');
     this.setState({chartComponent:name})
     this.props.changeInnerRoutes('/coins/'+this.props.coin_type+'/charts/'+name);
}



 render(){
    return(
    	<div>
    		<div className="tab-sub-nav">
    			<ul>
                	<li><Link className={this.state.chartComponent === '' && ("active" )} to={'/coins/'+this.props.coin_type+'/charts/'} onClick={(e)=>{this.changeRoute(e,'')}}>Basic</Link></li>
                	<li><Link className={this.state.chartComponent === 'advanced' && ("active" )} to={'/coins/'+this.props.coin_type+'/charts/advanced'} onClick={(e)=>{this.changeRoute(e,'advanced')}}>TRADINGVIEW</Link></li>
                </ul>
    		</div>
	    	<Row className="mt40">
	        	{this.state.chartComponent === '' && (
	        		<Col s={12} className=''>
	        			<h2>Basic Charts</h2>
	        		</Col>
	        	)}
	        	{this.state.chartComponent === 'advanced' && (
	        		<Col s={12} className=''>
	        			Advanced Charts
	        		</Col>
	        	)}
	        </Row>   
        </div>           
        )
 }   
}

export default Charts;
