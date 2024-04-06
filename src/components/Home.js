import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import CSS file

const Home = () => {
  return (
    <div className="home-container">
      <h2>Login</h2>
      <div className="input-group">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" placeholder="Enter your password" />
      </div>
      <div className="button-container">
        <button>Login</button>
      </div>
      <p className="registration-link">If you're a new user, <Link to="/register">register here</Link>.</p>
    </div>
  );
};

export default Home;
