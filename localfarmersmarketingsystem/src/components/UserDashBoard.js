// UserDashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/UserDashBoard.css';

const UserDashboard = () => {
  
  const user = {
    name: 'John Carl',
    profile: 'Customer',
    status: 'Active',
    age: 20,
  };

  return (
    <div className="user-dashboard">
      <div className="navigation">
        <ul>
          <li>
            <Link to="/marketplace">
              <i className="fa fa-home" /> Home
            </Link>
          </li>
          <li>
            <Link to="/userdashboard/settings">Settings</Link>
          </li>
          <li>
            <Link to="/userdashboard/orders">Orders</Link>
          </li>
         
        </ul>
      </div>
      <div className="content">
        <h2>User Profile</h2>
        <p>Name: {user.name}</p>
        <p>Profile: {user.profile}</p>
        <p>Status: {user.status}</p>
        <p>Age: {user.age}</p>
        <p>Welcome to your user dashboard! Explore the features in the navigation.</p>
        
        <h2>Order History</h2>
        <p>Your recent orders will be displayed here.</p>
      </div>
    </div>
  );
};

export default UserDashboard;
