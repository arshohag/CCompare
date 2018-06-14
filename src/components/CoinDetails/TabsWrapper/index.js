import React, {Component} from 'react';
import {Overview, Charts, Analysis, Investment, Markets, Forum, Purpose, Events, Related, Resources, Predictions, News} from '../';
import { Link } from 'react-router-dom';
import { Button, Card, Row, Col, Navbar, NavItem, Icon, Dropdown, Input, Tabs, Tab} from 'react-materialize';
import ReactTooltip from 'react-tooltip';

type Props = { list: Array<Object> };


class TabsWrapper extends Component{

constructor(props){
    super(props);
    this.state = {
           widthSet: 0
       };
    this.updateWidth = this.updateWidth.bind(this);
    let tabComponent='';
    if(this.props.props_data.allProps.match.params.coin_type){
        tabComponent= this.props.props_data.allProps.match.params.coin_type;
    }
    let coin_type = this.props.props_data.allProps.match.params.coin;
    this.state={
        tabComponent:tabComponent,
        coin_type:coin_type
    }
    this.changeRoute=this.changeRoute.bind(this)
}
componentDidMount(){
    this.updateWidth();
    window.addEventListener('resize', this.updateWidth);
}
componentWillMount(){
    // let coin_type = this.props.props_data.allProps.coin.list.market.id;
    // console.log(coin_type)
}
updateWidth(){
    let component_width = document.body.clientWidth;
    console.log('component_width',component_width);
    if(component_width>840){
        this.setState({ widthSet: '100%' });
    }else if( (component_width<839) && (component_width>768) ){
        this.setState({ widthSet: (component_width-60) + 'px' });
    }else{
        this.setState({ widthSet: (component_width-22) + 'px' });
    }
    
}
changeRoute(e,name){
    e.preventDefault();   
    var coin_type=this.props.props_data.allProps.match.params.coin;
    // console.log(coin_type,'coin type')
    this.props.nextRoute('/coins/'+this.state.coin_type+'/'+name);
    this.setState({tabComponent:name})
}

 render(){
    const tabWidth = {
          width: this.state.widthSet 
    };
    return(
          <div className="tab-container">
            <div className="tab-nav" style={tabWidth}>
                <ul className='z-depth-1'>
                    <li><Link className={(this.state.tabComponent==='' || this.state.tabComponent==='overview') && ("active" )} to={'/coins/'+this.state.coin_type+'/'} onClick={(e)=>{this.changeRoute(e,'')}}>Overview</Link></li>
                    <li><Link className={(this.state.tabComponent==='charts') &&  ("active" )} to={'/coins/'+this.state.coin_type+'/charts'} onClick={(e)=>{this.changeRoute(e,'charts')}}>Charts</Link></li>
                    <li><Link className={(this.state.tabComponent==='analysis') && ("active" )} to={'/coins/'+this.state.coin_type+'/analysis'} onClick={(e)=>{this.changeRoute(e,'analysis')}}>Analysis</Link></li>
                    <li><Link className={(this.state.tabComponent==='investment') && ("active" )} to={'/coins/'+this.state.coin_type+'/investment'} onClick={(e)=>{this.changeRoute(e,'investment')}}>Investment</Link></li>
                    <li><Link className={(this.state.tabComponent==='predictions') && ("active" )} to={'/coins/'+this.state.coin_type+'/predictions'} onClick={(e)=>{this.changeRoute(e,'predictions')}}>Predictions</Link></li>
                    <li><Link className={(this.state.tabComponent==='market') && ("active" )} to={'/coins/'+this.state.coin_type+'/market'} onClick={(e)=>{this.changeRoute(e,'market')}}>Markets</Link></li>
                    <li><Link className={(this.state.tabComponent==='purpose') && ("active" )} to={'/coins/'+this.state.coin_type+'/purpose'} onClick={(e)=>{this.changeRoute(e,'purpose')}}>Purpose</Link></li>
                    <li><Link className={(this.state.tabComponent==='news') && ("active" )} to={'/coins/'+this.state.coin_type+'/news'} onClick={(e)=>{this.changeRoute(e,'news')}}>News</Link></li>
                    <li><Link className={(this.state.tabComponent==='resources') && ("active" )} to={'/coins/'+this.state.coin_type+'/resources'} onClick={(e)=>{this.changeRoute(e,'resources')}}>Resources</Link></li>
                    <li><Link className={(this.state.tabComponent==='related') && ("active" )} to={'/coins/'+this.state.coin_type+'/related'} onClick={(e)=>{this.changeRoute(e,'related')}}>Related</Link></li>
                    <li><Link className={(this.state.tabComponent==='forum') && ("active" )} to={'/coins/'+this.state.coin_type+'/forum'} onClick={(e)=>{this.changeRoute(e,'forum')}}>Forum</Link></li>
                    <li><Link className={(this.state.tabComponent==='events') && ("active" )} to={'/coins/'+this.state.coin_type+'/events'} onClick={(e)=>{this.changeRoute(e,'events')}}>Events</Link></li>
                </ul>
            </div>
            <div className="tab-content">
                {(this.state.tabComponent==='' || this.state.tabComponent==='overview') && 
                    (
                        <Overview props_data={this.props.props_data} />
                        )
                }
                 {(this.state.tabComponent==='charts') && 
                    (
                        <Charts changeInnerRoutes={this.props.changeInnerRoutes} coin_type={this.state.coin_type}/>
                        )
                }
                {(this.state.tabComponent==='analysis') && 
                    (
                        <Analysis changeInnerRoutes={this.props.changeInnerRoutes} coin_type={this.state.coin_type} />
                        )
                }
                {(this.state.tabComponent==='investment') && 
                    (
                        <Investment changeInnerRoutes={this.props.changeInnerRoutes} coin_type={this.state.coin_type} />
                        )
                }
                {(this.state.tabComponent==='predictions') && 
                    (
                        <Predictions changeInnerRoutes={this.props.changeInnerRoutes} coin_type={this.state.coin_type} />
                        )
                }
                 {(this.state.tabComponent==='markets') && 
                    (
                        <Markets />
                        )
                }
                 {(this.state.tabComponent==='purpose') && 
                    (
                        <Purpose />
                        )
                }
                 {(this.state.tabComponent==='news') && 
                    (
                        <News />
                        )
                }
                 {(this.state.tabComponent==='resources') && 
                    (
                        <Resources />
                        )
                }
                {(this.state.tabComponent==='related') && 
                    (
                        <Related />
                        )
                }
                {(this.state.tabComponent==='forum') && 
                    (
                        <Forum />
                        )
                }
                {(this.state.tabComponent==='events') && 
                    (
                        <Events />
                        )
                }


            </div>
          </div>

        )
 }   
}

export default TabsWrapper;
