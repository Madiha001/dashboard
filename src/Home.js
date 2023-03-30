import React from 'react';
import DashboardPage from './Dashboard';
const SideMenu = () => {
  return (
    <div className="side-menu">
      <ul>
        <li className="active">Dashboard</li>
        <li>Account</li>
        <li>Cards</li>
        <li>Transactions</li>
        <li>Payment</li>
        <li>Invoicing</li>
        <li>Settings</li>
      </ul>
    </div>
  );
};

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="search-box">
        <input type="text" placeholder="Search" />
        <i className="fa fa-search"></i>
      </div>
      <div className="right-icons">
        <div className="country">
          <span>US</span>
        </div>
        <i className="fa fa-moon-o"></i>
        <i className="fa fa-paint-brush"></i>
        <i className="fa fa-bell"></i>
        <div className="profile">
          <img src="profile.jpg" alt="Profile" />
          <span>John Doe</span>
          <i className="fa fa-angle-down"></i>
        </div>
      </div>
    </div>
  );
};

const Home = () => {
  return (
    <div className="dashboard-page">
      <SideMenu />
      <div className="main-content">
        <Navbar />
        <DashboardPage />
      </div>
    </div>
  );
};

export default Home;
