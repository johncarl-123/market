// LoginForm.js

import React, { useState } from 'react';
import { FaFacebookSquare, FaGoogle } from 'react-icons/fa';
import '../styles/Login.css';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const history = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Before fetch');
      const response = await fetch('http://localhost:8081/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log('After fetch');

      if (response.ok) {
        console.log('Login successful');
        
        history('/marketplace');
      } else {
        
        const errorData = await response.json();
        console.error('Login failed:', errorData.message);

       
      }
    } catch (error) {
      console.error('Error during login:', error);
      
    }
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password clicked');
  };

  const handleSignUp = () => {
    console.log("Don't have an account? Sign up clicked");
  };

  const handleLoginWithFacebook = () => {
    console.log('Login with Facebook clicked');
  };

  const handleLoginWithGoogle = () => {
    console.log('Login with Google clicked');
  };
  const [error, setError] = useState(null);

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <div className="centered-button">
          <button type="submit">Log In</button>
          {error && <p className="error-message">{error}</p>}
        </div>
      </form>

      <p>
        <a href="#!" onClick={handleForgotPassword}>
          Forgot Password?
        </a>
      </p>

      <p>
        Don't have an account?{' '}
        <Link to="/signup" onClick={handleSignUp}>
          Sign up
        </Link>
      </p>

      <p>or</p>
      <div className="social-login">
        <button type="button" onClick={handleLoginWithFacebook}>
          <FaFacebookSquare size={20} />
        </button>
        <button type="button" onClick={handleLoginWithGoogle}>
          <FaGoogle size={20} />
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
