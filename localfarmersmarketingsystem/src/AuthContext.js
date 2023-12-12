// AuthContext.js

import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Make sure it's initialized to a default value or null

  const login = (userData) => {
    // Your login logic here
    setUser(userData);
  };

  const logout = () => {
    // Your logout logic here
    setUser({ id: '', username: '', role: ''});
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
