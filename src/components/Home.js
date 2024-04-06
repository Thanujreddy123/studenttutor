import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'; // Import Firebase Authentication methods
import './Home.css'; // Import CSS file

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState(''); // State variable for role selection
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false); // State variable to track login success

  // Function to handle login
  const handleLogin = () => {
    const auth = getAuth(); // Get Firebase Authentication instance

    // Sign in with email and password
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Clear form fields, error message, and set success to true on successful login
        setEmail('');
        setPassword('');
        setError('');
        setSuccess(true);
        console.log('User logged in:', userCredential.user);

        // Redirect to appropriate dashboard based on role using window.location
        if (role === 'student') {
          window.location.href = '/StudentDashboard';
        } else if (role === 'tutor') {
          window.location.href = '/TutorDashboard';
        }
      })
      .catch((error) => {
        // Handle errors during login
        setError(error.message);
        setSuccess(false); // Reset success to false on login failure
      });
  };

  return (
    <div className="home-container">
      <h2>Login</h2>
      <div className="input-group">
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder="Enter your email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
        />
      </div>
      <div className="input-group">
        <label htmlFor="password">Password:</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          placeholder="Enter your password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
      </div>
      <div className="input-group">
        <label htmlFor="role">Role:</label>
        <select id="role" name="role" value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="">Select a role</option>
          <option value="student">Student</option>
          <option value="tutor">Tutor</option>
        </select>
      </div>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">Login successful!</p>}
      <div className="button-container">
        <button onClick={handleLogin}>Login</button>
      </div>
      <p className="registration-link">If you're a new user, <Link to="/register">register here</Link>.</p>
    </div>
  );
};

export default Home;
