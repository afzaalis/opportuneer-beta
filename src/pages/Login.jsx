import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields.');
    } else if (password.length < 8) {
      setError('Password must be at least 8 characters.');
    } else {
      setError('');
      console.log('Email:', email);
      console.log('Password:', password);

      const data = new FormData();
      data.append('email', email);
      data.append('password', password);

      try {
        const response = await fetch('https://06c7-2404-8000-1024-164a-59f2-25a2-df16-dc69.ngrok-free.app/user/login', {
          method: 'POST',
          body: data,
        });

        if (!response.ok) {
          const errorData = await response.json();
          setError(errorData.message || 'Login failed. Please try again.');
        } else {
          console.log('Login successful');
          navigate('/myprofile');
        }
      } catch (error) {
        console.error('Error during login:', error);
        setError('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="login-outsideContainer">
      <div className="login-container">
        <h1 style={{ fontSize: '24px' }}>Login</h1>
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Example@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ backgroundColor: '#F7FBFF' }}
          />
          <label>Password</label>
          {error && <p style={{ color: 'red', fontSize: '10px' }}>{error}</p>}
          <input
            type="password"
            placeholder="At least 8 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ backgroundColor: '#F7FBFF' }}
          />
          <p className="forgot-password" style={{ textAlign: 'right' }}>
            <Link to="/">Forgot Password?</Link>
          </p>
          <button className="btn-submit" type="submit">
            Sign in
          </button>
        </form>
        <div className="line-or">
          <span>Or</span>
        </div>
        <button className="btn-google" type="button" style={{ backgroundColor: '#F3F9FA' }}>
          <Link to="/signup" className="google-link" style={{ color: 'black', textDecoration: 'none' }}>
            <img src="../google.png" alt="" className="google-logo" />
            Sign in with Google
          </Link>
        </button>
        <p>Don't you have an account? <Link to="/signup">SignUp</Link></p>
      </div>
      <div className="login-gambar">
        <img src="./signupimage.png" alt="login image" />
      </div>
    </div>
  );
};
