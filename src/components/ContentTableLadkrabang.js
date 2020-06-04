import React, { Component } from 'react'

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestApiData } from "../actions";

class ContentTableLadkrabang extends Component {
  
  componentDidMount(){
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
        <h1 className="m-0 text-dark">Ladkrabang's sensor table</h1>
      </div>{/* /.col */}
      <div className="col-sm-6">
        <ol className="breadcrumb float-sm-right">
          <li className="breadcrumb-item"><a href="#/">Home</a></li>
          <li className="breadcrumb-item active">viewing Ladkrabang's sensor table</li>
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

      {/* /.col-md-6 */}
      <div className="card">
          <div className="card-header border-0">
            <h3 className="card-title">Daily update</h3>
            <div className="card-tools">
            {/* <a href="./ContentHome">Expand</a> */}
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
                .filter(item => item.location === "LADKRABANG")
                .slice(-8).reverse().map(item => (
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

export default connect(mapStateToProps, mapDispatchToProps)(ContentTableLadkrabang);
