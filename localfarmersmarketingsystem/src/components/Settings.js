// Settings.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Settings.css';

const Settings = () => {
  return (
    <div className="settings">
      <Link to="/userdashboard">
        <button className="back-button">back</button>
      </Link>

      <h2>Settings</h2>

      <div className="settings-section">
        <h3>Account Settings</h3>
        <ul className="settings-list">
          <li className="settings-list-item">Change Password</li>
          <li className="settings-list-item">Email Notifications</li>
          <li className="settings-list-item">Payment Information</li>
          <li className="settings-list-item">Delivery Address</li>
          {}
        </ul>
      </div>

      <div className="settings-section">
        <h3>Notification Settings</h3>
        <ul className="settings-list">
          <li className="settings-list-item">Enable/Disable Notifications</li>
          <li className="settings-list-item">Notification Preferences</li>
          <li className="settings-list-item">Delivery Alerts</li>
          <li className="settings-list-item">Special Offers</li>
          {}
        </ul>
      </div>

      <div className="settings-section">
        <h3>Marketplace Preferences</h3>
        <ul className="settings-list">
          <li className="settings-list-item">Preferred Farmers</li>
          <li className="settings-list-item">Product Categories of Interest</li>
          <li className="settings-list-item">Delivery Time Preferences</li>
          {}
        </ul>
      </div>
    </div>
  );
};

export default Settings;
