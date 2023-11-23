// UserDashboard.js
import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you are using React Router
import '../styles/UserDashBoard.css';

const UserDashboard = () => {
  return (
    <div className="user-dashboard">
      <div className="navigation">
        <ul>
          <li>
            <Link to="/marketplace">
              <i className="fa fa-home" /> Home
            </Link>
          </li>
          <li>Profile</li>
          <li>Settings</li>
          {/* Add more menu items as needed */}
        </ul>
      </div>
      <div className="content">
        <UserProfile />
        {/* Add other components for different sections of the dashboard */}
      </div>
    </div>
  );
};

const UserProfile = () => {
  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      {/* Display user information here */}
    </div>
  );
};

export default UserDashboard;
