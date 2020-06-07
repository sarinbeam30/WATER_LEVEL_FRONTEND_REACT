import React from 'react'

export default function Home() {
    return (
        <div className="content-wrapper" style={{minHeight: '1203.6px'}}>
  {/* Content Header (Page header) */}
  <div className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
        <div style={{display: 'flex',  justifyContent:'center'}}>
          <h1 className="m-0 text-dark">Welcome to Water Level Monitoring System</h1>
          </div>
         
          
        </div>{/* /.col */}
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="./ContentHome">Home</a></li>
            <li className="breadcrumb-item active">viewing cesium map</li>
          </ol>
        </div>{/* /.col */}
      </div>{/* /.row */}
    </div>{/* /.container-fluid */}
  </div>
  {/* /.content-header */}
  {/* Main content */}
  <div style={{display: 'flex',  justifyContent:'center'}}>
  <div className="content">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-9.5">
          <div className="card">
            <div className="card-header border-0">
                <p><b>Click a sensor on the map / dashboard to view collected data, or about the project to view related references.</b></p>
              
            </div>
            <div className="card-body">
              <div className="d-flex">
                
              </div>
              {/* /.d-flex */}
              
              {/* <iframe src="http://localhost:3007/Cesium-Resium-WaterLevel/" width="875" height="441"></iframe> */}
              <iframe src="https://krittangcharoenkijkul.github.io/Cesium-Resium-WaterLevel/" width="940" height="475"></iframe>



              
              
            </div>
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
</div>
    )
}