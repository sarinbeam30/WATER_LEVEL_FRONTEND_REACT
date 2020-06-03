import React, { Component } from 'react'
const django_url = 'http://django-env.eba-cwpa3c9w.ap-southeast-1.elasticbeanstalk.com';

class MockupRedBar extends Component {
  constructor(props){
    super(props)
    this.loadData = this.loadData.bind(this);
    this._isMounted = false;
  }

  state = {
    water_level : [],
  }

  componentDidMount() {
    this._isMounted = true;
    this.loadData();
    //every 10s
    // setInterval(this.loadData, 10000);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  async loadData() {
    try {
      const res = await fetch(django_url);
      const water_level = await res.json();
      this._isMounted && this.setState({ water_level });
      // console.log("KO DO NOI");

    } catch (e) {
      console.log("ERROR : " + e);
    }
  }

  render(){
      return (
        <div className="content-wrapper" style={{minHeight: '1203.6px'}}>
    {/* Content Header (Page header) */}
    <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1 className="m-0 text-dark">Bangkapi's Sensor (VIRTUAL_SENSOR)</h1>
        </div>{/* /.col */}
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="./ContentHome">Home</a></li>
            <li className="breadcrumb-item active">viewing Bangkapi's sensor</li>
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
                <h3 className="card-title">Water level average</h3>
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
              <div className="position-relative mb-4"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className /></div><div className="chartjs-size-monitor-shrink"><div className /></div></div>
                <canvas id="Onesensor-BarchartRed" height={250} width={592} className="chartjs-render-monitor" style={{display: 'block', height: 200, width: 474}} />
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
                    <th>Date && Time</th>
                  </tr>
                </thead>
                <tbody>
                {
                  this.state.water_level.filter(item => item.location === "BANGKAPI").slice(-5).reverse().map(item => (
                    <tr key={item.id}>
                        <td>{item.water_level}</td>
                        <td>{ item.date_and_time }</td>
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

export default  MockupRedBar;

