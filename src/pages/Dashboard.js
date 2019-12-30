import React, { useState } from 'react';
import { Header, Sidebar } from './Resuables'
import GraphOutlineImage from '../images/graph-outline.png';
import GraphImage from '../images/graph.png';



const Tranctioncard = ({ title, value }) => (
  <div className='col-md-6 plr col-max'>
    <div className='card transaction-card'>
      <div className='card-body'>
        <div>
          <p className='title'>{title}</p>
          <p className='value'>{value}</p>
        </div>
        <div>
          <img className='graph-line' src={GraphOutlineImage} alt='grahp' />
          <img src={GraphImage} alt='grahp' />
        </div>
      </div>
    </div>
  </div>
)

const Graphstat = () => (
  <div className='card graph-card'>
    <div className='card-body'>
      <div className='row'>
        <div className='col-md-6'>
          <h6>Today: 5, Aug 2018</h6>
        </div>
        <div className='col-md-6 text-right'>
          <select disabled className='graph-select'>
            <option>1 Jan - 1 Jun</option>
          </select>
          <div className='crud-nav'>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className='row graph-dline'>
        <div className='col-md-2'><h6>
          Jan</h6></div>
        <div className='col-md-2'><h6>
          Feb</h6></div>
        <div className='col-md-2'><h6>
          Mar</h6></div>
        <div className='col-md-2'><h6>
          Apr</h6></div>
        <div className='col-md-2'><h6>
          May</h6></div>
        <div className='col-md-2'><h6>
          Jun</h6></div>
      </div>
    </div>
  </div>
)

const Orderspayment = ({ title, title1, title2, total }) => (
  <div className='card order-payment'>
    <div className='card-body'>
      <h6>{title}</h6>
      <div className='order-payment-bar'></div>
      <p>{title1} <span className='text-yellow'>20</span></p>
      <p>{title2} <span className='text-green'>80</span></p>
      <p>{total} <span className='text-blue'>100</span></p>
    </div>
  </div>
)

const Pymt = ({ status, name }) => (
  <React.Fragment>
    <tr>
      <td>
        <div className='item'>VW</div>
        <span>Apple Mac Book 15" 250 SSD 12GB</span>
      </td>
      <td>$73430</td>
      <td>1234567890</td>
      <td>12:30</td>
      <td><div className={status}>{name}</div></td>
      <td><div className='arrow'></div></td>
    </tr>
  </React.Fragment>
)

const TableHeader = ({ shuffle }) => (
  <React.Fragment>
    <div className='row mb-1 mt-4'>
      <div className='col-md-12'><h3>Payments</h3></div>
    </div>
    <div className='row my-4' style={{ fontSize: '13px' }}>
      <div className='col-md-4'>
        <div>
          <span>Showing </span>
          <select className='select-option'>
            <option>20</option>
          </select>
          <span> out of 500 payments</span>
        </div>
      </div>
      <div className='col-md-4'>
        <div className='search-payments'>
          <i className='fa fa-search'></i>
          <input type='text' placeholder='Search payments'></input>
        </div>
      </div>
      <div className='col-md-4'>
        <div>
          <span>Show</span>
          <select className='drop-down' onChange={shuffle}>
            <option className='drop-down-option'>All</option>
            <option className='drop-down-option'>Reconciled</option>
            <option className='drop-down-option'>Un-reconciled</option>
            <option className='drop-down-option'>Settled</option>
            <option className='drop-down-option'>Unsettled</option>
          </select>
        </div>
      </div>
    </div>
  </React.Fragment>
)

const TableFooter = () => (
  <div className='row table-footer'>
    <div className='col-md-6'>
      <span>Showing 1 to 10 of 500 entries</span>
    </div>
    <div className='col-md-6 text-right'>
      <ul>
        <li>Previous</li>
        <li className='active'>1</li>
        <li>2</li>
        <li>Next</li>
      </ul>
    </div>

  </div>
)

export default () => {
  const record = ['Pending', 'Reconciled', 'Un-reconciled', 'Pending', 'Reconciled', 'Un-reconciled', 'Pending', 'Reconciled', 'Un-reconciled', 'Pending', 'Reconciled', 'Un-reconciled', 'Pending', 'Reconciled', 'Un-reconciled', 'Pending', 'Reconciled', 'Un-reconciled', 'Pending', 'Reconciled', 'Un-reconciled', 'Pending', 'Reconciled', 'Un-reconciled', 'Pending', 'Reconciled', 'Un-reconciled', 'Pending', 'Reconciled', 'Un-reconciled']
  const [displayStatus, setdisplayStatus] = useState(record)
  const [Notfound, setNotfound] = useState(null)



  let showStatus = displayStatus.map((value, i) =>
    <Pymt key={i} status={value === 'Pending' ? 'status yellow' : value === 'Reconciled' ? 'status green' : 'status gray'} name={value} />
  )

  const shovelStatus = (e) => {
    let status = e.target.value
    console.log(status)
    if (status === 'All') {
      setdisplayStatus(record);
      setNotfound(null)
      return
    }
    const newDisplay = record.filter(newStatus => status === newStatus)
    if (newDisplay.length === 0)
      return setNotfound(true)
    setdisplayStatus(newDisplay)
  }

  return (
    <div>
      <Header />
      <div className='main'>
        <Sidebar />
        <div className='container inner'>
          <div className='row'>
            <div className='col-md-6'>
              <div className='row'>
                <Tranctioncard title='Daily Transaction Volume' value='2,342' />
                <Tranctioncard title='Daily Transaction Value' value='&#8358;4,000,000' />
              </div>
            </div>
            <div className='col-md-6 npr'>
              <div className='row'>
                <Tranctioncard title='Total Transaction Volume' value='452,000' />
                <Tranctioncard title='Total Transaction value' value='&#8358;4,000,000' />
              </div>
            </div>
          </div>
          <div className='row mt-4'>
            <div className='col-md-8 bg-white plr'>
              <Graphstat />
            </div>
            <div className='col-md-4 plr'>
              <Orderspayment title='Orders' title1='Pending Orders:' title2='Reconciled Orders:' total='Total Orders:' />
              <Orderspayment title='Payments' title1='Un-reconciled Payments' title2='Reconciledm Payments:' total='Total Payments:' />
            </div>
          </div>
          <TableHeader shuffle={shovelStatus} />
          <div className='pymt row mt-2'>
            <table>
              <thead>
                <tr>
                  <th>Item Type</th>
                  <th>Price</th>
                  <th>Transaction No</th>
                  <th>Time</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {Notfound ? <h5 className='text-center'>Result Not Found</h5> : showStatus}
              </tbody>
            </table>
          </div>
          <TableFooter />
        </div>
      </div>
    </div>
  );
}