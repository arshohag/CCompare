/* @flow */

import React, {Component} from 'react';

import { Link } from 'react-router-dom';
import { Button, Card, Row, Col, Navbar, NavItem, Icon, Dropdown, Input, Tabs, Tab} from 'react-materialize';
import ReactTooltip from 'react-tooltip'

type Props = { list: Array<Object> };


class Analysis extends Component{

constructor(props){
    super(props);
     this.state={
    		analysisComponent:''
    	}
    this.changeRoute=this.changeRoute.bind(this)
}
componentDidMount(){
}

changeRoute(e,name){
	e.preventDefault();
	console.log(e)
     this.setState({analysisComponent:name})
     this.props.changeInnerRoutes('/coins/'+this.props.coin_type+'/analysis/'+name);
}

 render(){
    return(

        <div>
            <div className="tab-sub-nav">
                <ul>
                    <li><Link className={this.state.analysisComponent === '' && ("active" )} to={'/coins/'+this.props.coin_type+'/analysis/'} onClick={(e)=>{this.changeRoute(e,'')}}>Scores</Link></li>
                    <li><Link className={this.state.analysisComponent === 'facts-and-figures' && ("active" )} to={'/coins/'+this.props.coin_type+'/analysis/facts-and-figures'} onClick={(e)=>{this.changeRoute(e,'facts-and-figures')}}>COIN FACTS & FIGURES</Link></li>
                    <li><Link className={this.state.analysisComponent === 'github' && ("active" )} to={'/coins/'+this.props.coin_type+'/analysis/github'} onClick={(e)=>{this.changeRoute(e,'github')}}>GITHUB DEVELOPMENT</Link></li>
                    <li><Link className={this.state.analysisComponent === 'search-popularity' && ("active" )} to={'/coins/'+this.props.coin_type+'/analysis/search-popularity'} onClick={(e)=>{this.changeRoute(e,'search-popularity')}}>GOOGLE SEARCH TRENDS</Link></li>
                </ul>
            </div>
            <Row className="mt40">
                {this.state.analysisComponent === '' && (
                    <Col s={12} className=''>
                        Scores
                    </Col>
                )}
                {this.state.analysisComponent === 'facts-and-figures' && (
                    <Col s={12} className=''>
                        facts-and-figures
                    </Col>
                )}
                {this.state.analysisComponent === 'github' && (
                    <Col s={12} className=''>
                        github
                    </Col>
                )}
                {this.state.analysisComponent === 'search-popularity' && (
                    <Col s={12} className=''>
                        search-popularity
                    </Col>
                )}
            </Row>   
        </div> 
        )
 }   
}

export default Analysis;
