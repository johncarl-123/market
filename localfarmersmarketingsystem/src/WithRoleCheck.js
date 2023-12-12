// withRoleCheck.js

import React, { useContext } from 'react';
import { AuthProvider } from './AuthContext'; // Correct import statement

const withRoleCheck = (WrappedComponent) => {
  return (props) => {
    const { user } = useContext(AuthProvider);

    // Check if the user is a farmer
    const isFarmer = user && user.role === 'farmer';

    // Pass a prop to the wrapped component indicating if the user is a farmer
    return <WrappedComponent {...props} isFarmer={isFarmer} />;
  };
};

export default withRoleCheck;
