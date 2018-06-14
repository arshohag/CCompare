/* @flow */

import React, {Component} from 'react';

import { Link } from 'react-router-dom';
import { Button, Card, Row, Col, Navbar, NavItem, Icon, Dropdown, Input, Tabs, Tab} from 'react-materialize';
import ReactTooltip from 'react-tooltip'

type Props = { list: Array<Object> };


class News extends Component{

constructor(props){
    super(props);
    console.log(props)
    this.changeRoute=this.changeRoute.bind(this)
}
componentDidMount(){
}

changeRoute(){
     this.props.nextRoute('overview');
}

 render(){
    return(
          
            <div className="tab-table-right" >
                News
            </div>

        )
 }   
}

export default News;
