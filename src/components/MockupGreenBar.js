import React, { Component } from 'react'
import LadpraoChart from './ฺbarcharts/LadpraoChart'

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestApiData } from "../actions";

class MockupGreenBar extends Component {
  
  async componentDidMount(){
    await this.props.requestApiData();
  }

  render() {
      return (
        <div className="content-wrapper" style={{minHeight: '1203.6px'}}>
    {/* Content Header (Page header) */}
    <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1 className="m-0 text-dark">Ladprao's Sensor (VIRTUAL_SENSOR)</h1>
        </div>{/* /.col */}
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="#/">Home</a></li>
            <li className="breadcrumb-item active">viewing Ladprao's sensor</li>
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
                <h3 className="card-title">Water level average ( %)</h3>
                <a href="javascript:void(0);">Mockup cant Change to linegraph</a>
              </div>
            </div>
            <div className="card-body">
              {/* <div className="d-flex">
                <p className="d-flex flex-column">
                  <span className="text-bold text-lg">6000 cm</span>
                  <span>Highest level</span>
                </p>
                <p className="ml-auto d-flex flex-column text-right">
                  <span className="text-success">
                    <i className="fas fa-arrow-up" /> 
                  </span>
                  <span className="text-muted">rising</span>
                </p>
              </div> */}
              {/* /.d-flex */}
              <div className="position-relative mb-4"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className /></div><div className="chartjs-size-monitor-shrink"><div className='' /></div></div>
                <LadpraoChart/>
              </div>
    
    
    
              
              <div className="d-flex flex-row justify-content-end">
                <span className="mr-2">
                  <i className="fas fa-square text-green" /> Ladprao
                </span>
              </div>
            </div>
          </div>
          
          {/* /.card */}
        </div>
        {/* /.col-md-6 */}
        <div className="card">
            <div className="card-header border-0">
              <h3 className="card-title">Daily update</h3>
              <div className="card-tools">
              <a href="./ContentHome">Expand</a>
              </div>
            </div>
            <div className="card-body table-responsive p-0">
              <table className="table table-striped table-valign-middle">
                <thead>
                  <tr>
                      <th>WATER LEVEL ( %)</th>
                      <th>Date</th>
                      <th>Time</th>
                  </tr>
                </thead>
                <tbody>
                {
                  Array.from(this.props.data)
                  .filter(item => item.location === "LADPRAO")
                  .slice(-5).reverse().map(item => (
                    <tr key={item.id}>
                        <td>{item.water_level}</td>
                        <td>{ item.date }</td>
                        <td>{ item.time }</td>
                    </tr>
                  ))
                }
                </tbody>
              </table>
            </div>
        
          {/* /.card */}          
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps) (MockupGreenBar);