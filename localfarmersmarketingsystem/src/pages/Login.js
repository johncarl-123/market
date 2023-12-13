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

  const [errors, setErrors] = useState({
    email: '',
    password: '',
    general: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: '' }));
    setSuccessMessage('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email || !emailRegex.test(formData.email)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email address' }));
      setSuccessMessage('');
      return;
    }

    if (!formData.password) {
      setErrors((prevErrors) => ({ ...prevErrors, password: 'Password is required' }));
      setSuccessMessage('');
      return;
    }

    try {
      const response = await fetch('http://localhost:8081/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage('Login successful! Redirecting to the marketplace...');
        setTimeout(() => {
          history('/marketplace');
        }, 2000);
      } else {
        const errorData = await response.json();
        setErrors({
          email: errorData.emailError || '',
          password: errorData.passwordError || '',
          general: 'Invalid Email Or Password',
        });
      }
    } catch (error) {
      setErrors({ general: 'An unexpected error occurred' });
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
        {errors.email && <p className="error-message">{errors.email}</p>}

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {errors.password && <p className="error-message">{errors.password}</p>}

        <div className="centered-button">
          <button type="submit">Log In</button>
          {errors.general && <p className="error-message">{errors.general}</p>}
          {successMessage && <p className="success-message" style={{ color: 'black' }}>{successMessage}</p>}
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
