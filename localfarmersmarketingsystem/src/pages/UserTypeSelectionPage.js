// UserTypeSelectionPage.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/UserTypeSelectionPage.css';

const UserTypeSelectionPage = () => {
  const navigate = useNavigate();
  const [selectedUserType, setSelectedUserType] = useState('');
  const [error, setError] = useState('');

  const handleSelectUserType = (userType) => {
    setSelectedUserType(userType);
    setError(''); // Clear any previous error message
  };

  const handleContinue = () => {
    if (selectedUserType === 'farmer' || selectedUserType === 'customer') {
      // Navigate to the login page with the selected user type
      navigate(`/login/${selectedUserType}`);
    } else {
      setError('Please select a user type before continuing.');
    }
  };

  return (
    <div>
      <h1>Select User Type</h1>
      <div>
        <button
          className={`farmer ${selectedUserType === 'farmer' ? 'selected' : ''}`}
          onClick={() => handleSelectUserType('farmer')}
        >
          Continue as Farmer
        </button>
        <br /><br /> <br /><br /> {/* Add two line breaks for increased spacing */}
        <button
          className={`customer ${selectedUserType === 'customer' ? 'selected' : ''}`}
          onClick={() => handleSelectUserType('customer')}
        >
          Continue as Customer
        </button>
        <br /><br />  <br /><br /> {/* Add two line breaks for increased spacing */}
        <button className="continue" onClick={handleContinue}>Login</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {selectedUserType && <p>You have selected: {selectedUserType}</p>}
      </div>
      <div>
        <Link to="/">Cancel</Link>
      </div>
    </div>
  );
};

export default UserTypeSelectionPage;
