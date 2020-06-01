import React from 'react'

export default function Menu() {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
  {/* Brand Logo */}
  <a href="#/" className="brand-link">
    <img src="dist/img/Waterlevelicon.png" alt="WaterLevel Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
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
              <a href="#/ContentOneBar" className="nav-link">
                <i className="far fa-circle nav-icon" />
                <p>Ladkrabang</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#/MockupRedBar" className="nav-link">
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
      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>


    )
}
