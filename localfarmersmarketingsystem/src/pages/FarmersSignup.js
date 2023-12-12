import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/FarmersSignup.css'; // Add or adjust the CSS file as needed

const FarmersSignup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    farmers_id: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const someAsyncFunction = async () => {
    const url = 'http://localhost:8082/signup/farmer'; // Adjust the backend route
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        farmers_id: formData.farmers_id,
        username: formData.username,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      }),
    };

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to register farmer');
      }

      const result = await response.json();
      console.log(result);

      if (result.success) {
        navigate('/login/farmer'); // Adjust the route as needed
      } else {
        console.error('Failed to register farmer:', result.message);
      }
    } catch (error) {
      console.error('Error during farmer signup:', error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formData.password !== formData.confirmPassword) {
        console.error('Passwords do not match');
        return;
      }

      await someAsyncFunction();
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="farmers-signup-form">
      <h2>Farmers Sign Up</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="farmers_id">Farmer ID:</label>
        <input
          type="id"
          id="farmers_id"
          name="farmers_id"
          value={formData.farmers_id}
          onChange={handleChange}
          required
        />

        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />

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

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <button type="submit">Sign Up</button>
      </form>

      <p>
        Already have a farmer account?{' '}
        <Link to="/login/farmer">Log in</Link>
      </p>
    </div>
  );
};

export default FarmersSignup;
