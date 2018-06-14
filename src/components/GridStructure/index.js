import React, {Component} from "react";
import {AgGridColumn, AgGridReact} from "ag-grid-react";
import RowDataFactory from "./RowDataFactory";
import DateComponent from "./DateComponent.jsx";
import SkillsCellRenderer from './SkillsCellRenderer.jsx';
import NameCellEditor from './NameCellEditor.jsx';
import ProficiencyCellRenderer from './ProficiencyCellRenderer.jsx';
import RefData from './RefData';
import SkillsFilter from './SkillsFilter.jsx';
import ProficiencyFilter from './ProficiencyFilter.jsx';
import HeaderGroupComponent from './HeaderGroupComponent.jsx';
import SortableHeaderComponent from './SortableHeaderComponent.jsx';
import "./RichGridDeclarativeExample.css";
import Charts from '../Charts';
import "ag-grid-enterprise";
import { Link } from 'react-router-dom';

const COUNTRY_LIST = ["Argentina", "Brazil", "Colombia", "France", "Germany", "Greece", "Iceland", "Ireland",
    "Italy", "Malta", "Portugal", "Norway", "Peru", "Spain", "Sweden", "United Kingdom",
    "Uruguay", "Venezuela", "Belgium", "Luxembourg"];

export default class RichGridDeclarativeExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rowData: new RowDataFactory().createRowData(),
            showToolPanel:false
        };
        this.onToggleToolPanel=this.onToggleToolPanel.bind(this)
    }
    componentDidMount(){
    }

    /* Grid Events we're listening to */
    onGridReady = (params) => {
        this.api = params.api;
        this.columnApi = params.columnApi;
    };

    // onCellClicked = (event) => {
    // };

    // onRowSelected = (event) => {
    // };

    static nameCellRenderer(params) {
        if (params.value) {
            return `<a href='/coins/${params.data.id}' ><img border='0' width='15' height='10' style='margin-bottom: 2px' src='http://coincheckup.com/images/coins/16x16/${params.data.id+'-'+params.data.logos.icon}.png'> ${params.value}</a>`;
        } else {
            return null;
        }
    }
    static priceCellRenderer(params){
        if(params.value){
            return `\$ ${params.value}`
        }else{
            return null
        }
    }

    static percentageCellRenderer(params){
        if(params.value){
            return `${params.value} \%`
        }else{
            return null
        }
    }

    static ratingCellRenderer(params){
        if(params.value){
            let rating= params.value/100*5
            return Math.floor(rating * 100) / 100;
        }else{
            return null
        }
    }
    static chartCellRenderer(params){
        return '121'
    }
    onToggleToolPanel(){
        this.setState({showToolPanel:!this.state.showToolPanel})
        this.columnApi.setColumnVisible('price_usd', this.state.showToolPanel)
    }

    onGridReady = (params) => {
        this.api = params.api;
        this.columnApi = params.columnApi;
    };

    render() {
        return (
            <div style={{height: 525, width: '100%','boxSizing': 'border-box'}} className="ag-theme-balham" >
            <button onClick={this.onToggleToolPanel}>Customize Table</button>
                <AgGridReact
                    rowData={this.props.data}
                    onGridReady={this.onGridReady}
                    toolPanelSuppressSideButtons={true}
                    enableColResize
                    enableSorting
                    enableFilter
                    groupHeaders
                    pagination={true}
                    rowHeight = '50'
                    suppressHorizontalScroll={true}
                    domLayout='autoHeight'
                    >
                    {/* first column has the checkboxes */}
                    <AgGridColumn headerName="#" field="rank" width={50}  suppressSorting suppressMenu suppressFilter pinned></AgGridColumn>
                        <AgGridColumn field="name" headerName="Name" width={100} pinned 
                            cellRenderer={RichGridDeclarativeExample.nameCellRenderer}
                        ></AgGridColumn>
                        <AgGridColumn field="name" headerName="Rate" width={140} pinned 
                            cellRenderer={RichGridDeclarativeExample.nameCellRenderer}
                        ></AgGridColumn>
                        <AgGridColumn 
                            cellRenderer={RichGridDeclarativeExample.priceCellRenderer}
                        field="price_usd" headerName="Price" width={180} pinned ></AgGridColumn>
                        <AgGridColumn 
                        field="percent_change_1h" headerName="1h" width={140} pinned
                            cellRenderer={RichGridDeclarativeExample.percentageCellRenderer}
                        ></AgGridColumn>
                        <AgGridColumn field="percent_change_24h" headerName="24h" width={150} pinned 
                            cellRenderer={RichGridDeclarativeExample.percentageCellRenderer}
                        ></AgGridColumn>
                        <AgGridColumn field="percent_change_7d" headerName="7d" width={150} pinned
                            cellRenderer={RichGridDeclarativeExample.percentageCellRenderer}
                        ></AgGridColumn>
                        <AgGridColumn field="daily_price_7d" headerName="7d Price" width={180} pinned
                            cellRendererFramework={ProficiencyCellRenderer}
                        ></AgGridColumn>
                        <AgGridColumn field="market_cap_usd" headerName="Mkt. Cap" width={150} pinned ></AgGridColumn>
                        <AgGridColumn field="24h_volume_usd" headerName="24h Vol" width={150} pinned ></AgGridColumn>
                        <AgGridColumn field="Circ. Supply" headerName="Circ. Supply" width={150} pinned ></AgGridColumn>
                        <AgGridColumn field="score" width={150} headerName="Algo. Score" pinned 
                            cellRenderer={RichGridDeclarativeExample.ratingCellRenderer}
                        ></AgGridColumn>
                        <AgGridColumn field="Actions" width={140} pinned ></AgGridColumn>
                </AgGridReact>
            </div>
        );
    }
}
