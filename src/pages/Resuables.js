import React from 'react';
import Img from '../images/vela.png'
import Overview from '../images/overview.png'


export const Header = () => {
  return (
    <header className='bg-white'>
      <div className='container-fluid header'>
        <div className='header-brand'>
            <h4>TransMonitor</h4>
          <div className='header-search'>
            <i className='fa fa-search'></i>
            <input type='text' placeholder='Search...' />
          </div>
        </div>
        <div>
          <div className='header-menu'>
            <div>Support</div>
            <div>FAQ</div>
            <div>
              <div className='bell-menu'>
                <i className='fa fa-bell-o'></i>
                <span className='badge bell-badge'>8</span>
              </div>
              <div className='name'>
                <small>Hello</small>
                <p>Oluwaleke Ojo</p>
              </div>
              <div>
                <img src={Img} alt='Image' className='profile-pix' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}


export const Sidebar = () => {
  return (
<aside className='bg-white'>
  <div>
    <p>
      <button className='btn btn-generate'>GENERATE INVOICE</button>
    </p>
    <p className='mt-4 mb-2'>Main</p>
  </div>
  <ul>
    <li className='active'>
      <img className='fa' src={Overview} alt='overview' />
      <span>Overview</span>
    </li>
  </ul>
  <div>
    <p>Payments</p>
    <ul>
      <li>
        <i className='fa fa-folder-o'></i>
        <span>All Payments</span>
      </li>
      <li>
        <i className='fa fa-folder-open-o'></i>
        <span>Reconciled Payments</span>
      </li>
      <li>
        <i className='fa fa-folder-open-o'></i>
        <span>Un - Reconciled Payments</span>
      </li>
      <li>
        <i className='fa fa-dot-circle-o'></i>
        <span>Manual Settlement</span>
      </li>
    </ul>
  </div>
  <div>
    <p>Orders</p>
    <ul>
      <li>
      <i className='fa fa-file-text-o'></i>
        <span>All Orders</span>
      </li>
      <li>
      <i className='fa fa-file-archive-o'></i>
        <span>Pending Orders</span>
      </li>
      <li>
      <i className='fa fa-file-video-o'></i>
        <span>Reconciled Orders</span>
      </li>
    </ul>
  </div>
  <div>
  <ul>
    <li>
    <i className="fa fa-user-o"></i>
        <span>Machant Profile</span>
    </li>
  </ul>
  </div>
</aside>
  );
}