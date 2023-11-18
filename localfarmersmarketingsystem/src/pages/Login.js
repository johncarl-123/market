
import React, { useState } from 'react';
import { FaFacebookSquare, FaGoogle } from 'react-icons/fa'; // Import icons from react-icons
import '../styles/Login.css';

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
    console.log('Login submitted:', formData);
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password clicked');
    // Add logic to handle forgot password
  };

  const handleSignUp = () => {
    console.log("Don't have an account? Sign up clicked");
    // Add logic to handle sign-up
  };

  const handleLoginWithFacebook = () => {
    console.log('Login with Facebook clicked');
    // Add logic to handle login with Facebook
  };

  const handleLoginWithGoogle = () => {
    console.log('Login with Google clicked');
    // Add logic to handle login with Google
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

        <button type="submit">Log In</button>
      </form>

      <p>
        <a href="#!" onClick={handleForgotPassword}>
          Forgot Password?
        </a>
      </p>

      <p>
        Don't have an account?{' '}
        <a href="#!" onClick={handleSignUp}>
          Sign up
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
