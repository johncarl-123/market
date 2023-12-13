// FarmersLogin.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'cross-fetch/polyfill';
import '../styles/FarmersLogin.css'; // Add or adjust the CSS file as needed

const FarmersLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    farmers_id: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    email: '',
    farmers_id: '',
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

    // Validate email and password before making the API call
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email || !emailRegex.test(formData.email)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email address' }));
      return;
    }

    if (!formData.farmers_id) {
      setErrors((prevErrors) => ({ ...prevErrors, farmers_id: 'Farmer ID is required' }));
      return;
    }

    if (!formData.password) {
      setErrors((prevErrors) => ({ ...prevErrors, password: 'Password is required' }));
      return;
    }

    try {
      const response = await fetch('http://localhost:8082/login/farmer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          farmers_id: formData.farmers_id,
          password: formData.password,
        }),
      });

      if (response.ok) {
        console.log('Login successful');
        setSuccessMessage('Login successful! Redirecting to the marketplace...');
        setTimeout(() => {
          navigate('/marketplace');
        }, 2000);
      } else {
        const errorData = await response.json();
        console.error('Login failed:', errorData.message);

        // Check for specific error conditions, such as invalid Farmer ID
        if (errorData.farmersIdError === 'Invalid Farmer ID') {
          setErrors({ farmers_id: 'Invalid Farmer ID', general: '' });
        } else {
          setErrors({
            email: errorData.emailError || '',
            farmers_id: errorData.farmersIdError || '',
            password: errorData.passwordError || '',
            general: errorData.message || 'Login failed',
          });
        }
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrors({ general: 'An unexpected error occurred' });
    }
  };

  return (
    <div className="farmers-login-form">
      <h2>Farmers Login</h2>

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

        <label htmlFor="farmers_id">Farmer ID:</label>
        <input
          type="text"
          id="farmers_id"
          name="farmers_id"
          value={formData.farmers_id}
          onChange={handleChange}
          required
        />
        {errors.farmers_id && <p className="error-message">{errors.farmers_id}</p>}

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

        <button type="submit">Log In</button>
        {errors.general && <p className="error-message">{errors.general}</p>}
        {successMessage && <p className="success-message" style={{ color: 'black' }}>{successMessage}</p>}
      </form>

      <p>
        Don't have an account?{' '}
        <Link to="/signup/farmer">Sign up</Link>
      </p>
    </div>
  );
};

export default FarmersLogin;
