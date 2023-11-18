// UserDashboard.js
import React from 'react';
import '../styles/UserDashBoard.css';

const UserDashboard = () => {
  return (
    <div className="user-dashboard">
      <div className="navigation">
        <ul>
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
