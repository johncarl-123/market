import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/SignUp.css';



const SignUp = () => {
  const navigate = useNavigate();

  

  const [formData, setFormData] = useState({
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
    const url = 'http://localhost:8081/signup'; // Change the URL to your actual API endpoint
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: formData.username,
        email: formData.email,
        password: formData.password,
        confirmPassword: formData.confirmPassword,
      }),
    };

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error('Failed to register user');
      }

      const result = await response.json();
      console.log(result); // Log the response from the server

      // Check if the signup was successful
      if (result.success) {
        // Navigate to login after successful registration
        navigate('/login');
      } else {
        // Handle unsuccessful signup (e.g., display an error message)
        console.error('Failed to register user');
      }
    } catch (error) {
      console.error('Error:', error);
      throw error; // Rethrow the error to be caught by the outer catch block
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Check if passwords match
      if (formData.password !== formData.confirmPassword) {
        console.error('Passwords do not match');
        return;
      }

      // Make a real API call to register the user
      await someAsyncFunction();
    } catch (error) {
      console.error('Error:', error);
    }
  };


  
  return (
    <div className="signup-form">
      <h2>Sign Up</h2>

      <form onSubmit={handleSubmit}>
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
        Already have an account?{' '}
        <Link to="/login">Log in</Link>
      </p>
    </div>
    
  );
};




export default SignUp;
