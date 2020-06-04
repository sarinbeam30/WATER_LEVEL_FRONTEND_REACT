import React from 'react'


export default function Menu() {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <a href="#/" className="brand-link">
    <img src="data:image/png;base64,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" alt="WaterLevel Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">Water Level tracker</span>
  </a>
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
        
        <li className="nav-item has-treeview">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-chart-pie" />
            <p>
              Charts
              <i className="right fas fa-angle-left" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item" >
              <a href="#/ContentOneBar" className="nav-link" >
                <i className="far fa-circle nav-icon" />
                <p>Ladkrabang</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#/MockupRedBar" className="nav-link" >
                <i className="far fa-circle nav-icon" />
                <p>Bangkapi</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#/MockupGreenBar" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Ladprao</p>
              </a>
            </li>
          </ul>
        </li>
        <li className="nav-item has-treeview">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-table" />
            <p>
              Tables
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="#/ContentTableLadkrabang" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Ladkrabang</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#/ContentTableBangkapi" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Bangkapi</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#/ContentTableLadprao" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Ladprao</p>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>


    )
}
