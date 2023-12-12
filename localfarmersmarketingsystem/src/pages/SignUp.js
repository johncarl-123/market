// SignUp.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import zxcvbn from 'zxcvbn'; // Import the zxcvbn library for password strength check
import '../styles/SignUp.css';

const SignUp = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    feedback: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));

    // Check password strength on each password input change
    if (name === 'password') {
      // Check if the password length is at least six characters
      if (value.length < 6) {
        setPasswordStrength({
          score: 0, // Reset the score for passwords below the minimum length
          feedback: 'Enter a password with at least six characters.',
        });
      } else {
        const result = zxcvbn(value);
        setPasswordStrength({
          score: result.score,
          feedback: result.feedback.suggestions.join(' '), // Join suggestions into a string
        });
      }
    }
  };

  const someAsyncFunction = async () => {
    const url = 'http://localhost:8081/signup';
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
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to register user');
      }

      const result = await response.json();
      console.log(result);

      if (result.success) {
        navigate('/login/customer');
      } else {
        console.error('Failed to register user:', result.message);
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (formData.password !== formData.confirmPassword) {
        console.error('Passwords do not match');
        return;
      }

      // Check if the password is strong enough (score >= 3 is considered strong)
      if (passwordStrength.score < 3 || formData.password.length < 6) {
        console.error('Input a stronger password with at least six characters');
        return;
      }

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
        {passwordStrength.feedback && (
          <p className="password-strength-feedback">{passwordStrength.feedback}</p>
        )}

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
        <Link to="/login/customer">Log in</Link>
      </p>
    </div>
  );
};

export default SignUp;
