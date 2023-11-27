
import React, { useState } from 'react';
import { FaFacebookSquare, FaGoogle } from 'react-icons/fa';
import '../styles/Login.css';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const isLoginSuccessful = true; 
    if (isLoginSuccessful) {
      
      window.location.href = '/marketplace';
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
        </div>
      </form>

      <p>
        <a href="#!" onClick={handleForgotPassword}>
          Forgot Password?
        </a>
      </p>

      <p>
        Don't have an account?{' '}
        <a href="#!" onClick={handleSignUp}>
        <Link to="/signup">Sign up</Link>
        </a>
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
