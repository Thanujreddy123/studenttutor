import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import './Home.css';
import StudentDashboard from './StudentDashboard'; // Import StudentDashboard component

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [userEducation, setUserEducation] = useState('');
  const [studentDashboardProps, setStudentDashboardProps] = useState(null);

  const handleLogin = () => {
    const auth = getAuth();
    
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Simulate user's education data (replace with your actual logic)
        const userEducation = "Bachelor's in Computer Science";

        // Set email, clear form fields, set success to true, and render StudentDashboard with props
        setEmail('');
        setPassword('');
        setError('');
        setSuccess(true);
        setStudentDashboardProps({ email, userEducation });
      })
      .catch((error) => {
        setError(error.message);
        setSuccess(false);
      });
  };

  // Render StudentDashboard if props are available
  if (studentDashboardProps) {
    return <StudentDashboard {...studentDashboardProps} />;
  }

  return (
    <div className="home-container black-background">
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
