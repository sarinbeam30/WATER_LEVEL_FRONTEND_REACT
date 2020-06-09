import React, { Component } from 'react'

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestApiData } from "../actions";
import $ from 'jquery';
import {Helmet} from "react-helmet";
import ScriptTag from 'react-script-tag';




class ContentTableLadkrabang extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {water_level: []};
  // }

  // state = { water_level : []};

  componentWillMount(){
    this.props.requestApiData();
    // console.log(this.props.data);
  }

  componentDidMount(){
    this.props.requestApiData();
    // this.setState({
    //   water_level : this.props.data
    // })
    // console.log(this.props.data);
  }

  render(){

  
    return(
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
              <div class="col-12">
              
                <div class="card">
                  <div class="card-header  border-dark">
                    <h3 class="card-title">Daily update</h3>
                  </div>

                  <div class="card-body">
                    <table id="example1" class="table table-bordered table-striped">
                      <thead>
                        <tr>
                          <th>WATER LEVEL ( mm)</th>
                          <th>DATE</th>
                          <th>TIME</th>

                        </tr>
                      </thead>
                        <tbody>
                        {
                          Array.from(this.props.data)
                          .filter(item => item.location === "LADKRABANG")
                          .slice(-20).reverse()
                          .map(item => (
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


                </div>


              </div>      
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
