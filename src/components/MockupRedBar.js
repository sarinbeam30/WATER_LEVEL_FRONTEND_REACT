import React, { Component } from 'react'
import BangkapiChart from './ฺbarcharts/BangkapiChart'

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestApiData } from "../actions";

class MockupRedBar extends Component {
  
  componentDidMount() {
    this.props.requestApiData();
  }

  render(){
      return (
        <div className="content-wrapper" style={{minHeight: '1203.6px'}}>
    {/* Content Header (Page header) */}
    <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1 className="m-0 text-dark">Bangkapi's sensor (VIRTUAL_SENSOR) bar chart</h1>
        </div>{/* /.col */}
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#/">Home</a></li>
            <li className="breadcrumb-item active">viewing Bangkapi's sensor bar chart</li>
          </ol>
        </div>{/* /.col */}
      </div>{/* /.row */}
    </div>{/* /.container-fluid */}
    </div>
    {/* /.content-header */}
    {/* Main content */}
    <div className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
          <div className="card">
            <div className="card-header border-0">
              <div className="d-flex justify-content-between">
                <h3 className="card-title">Water level average ( mm)</h3>
                {/* <a href="javascript:void(0);">Mockup cant Change to linegraph</a> */}
              </div>
            </div>
            <div className="card-body">

              {/* /.d-flex */}
              <div className="position-relative mb-4"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className /></div><div className="chartjs-size-monitor-shrink"><div className /></div></div>
                <BangkapiChart />
              </div>
    
    
    
              
              <div className="d-flex flex-row justify-content-end">
                <span className="mr-2">
                  <i className="fas fa-square text-red" /> Bangkapi
                  
                </span>
              </div>
            </div>
          </div>
          
          {/* /.card */}
        </div>
        {/* /.col-md-6 */}
        {/* /.col-md-6 */}
    
    
    
    
    
        
      </div>
      {/* /.row */}
    </div>
    {/* /.container-fluid */}
    </div>
    {/* /.content */}
    </div>
    
    )


  }
}

const mapStateToProps = state => ({ data: state.data });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestApiData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MockupRedBar);

