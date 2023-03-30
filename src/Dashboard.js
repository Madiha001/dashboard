import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function DashboardPage() {
  return (
    <div className="dashboard-page">
      <div className="main-content">
        <h6>Dashboard</h6>
        <div className="cards-wrapper">
          <div className="card" style={{ width: '33.33%' }}>
            <h5>Open Another Account</h5>
          </div>
          <div className="card" style={{ width: '66.67%' }}>
            <div className="inner-card" style={{ backgroundColor: '#87CEFA' }}>
              <div className="icon">
                <i className="fas fa-dollar-sign"></i>
                {/* <FontAwesomeIcon className="fa-fw" icon={faDollar} /> */}
              </div>
              <div className="text">
                <p>Dollars</p>
                <h2>$3,564</h2>
              </div>
            </div>
            <div className="inner-card" style={{ backgroundColor: '#FFE5B4' }}>
              <div className="icon">
                <i className="fas fa-euro-sign"></i>
                {/* <FontAwesomeIcon className="fa-fw" icon={faEuro} /> */}
              </div>
              <div className="text">
                <p>Euro</p>
                <h2>€564.12</h2>
              </div>
            </div>
            <div className="inner-card" style={{ backgroundColor: '#B19CD9' }}>
              <div className="icon">
                <i className="fas fa-rupee-sign"></i>
                {/* <FontAwesomeIcon className="fa-fw" icon={faINR} /> */}
              </div>
              <div className="text">
                <p>INR</p>
                <h2>₹987,239</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
