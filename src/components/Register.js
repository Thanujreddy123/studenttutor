import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Register.css';
import { getDatabase, ref, push } from "firebase/database";
import { database } from './FireBaseConfig';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [educationLevel, setEducationLevel] = useState('');
  const [subject, setSubject] = useState('');
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleRegister = () => {
    const userData = {
      email,
      role,
      educationLevel: role === 'student' ? educationLevel : null,
      subject: role === 'tutor' ? subject : null
    };

    const dbRef = ref(database, 'users');

    push(dbRef, userData)
      .then(() => {
        // Set registration success to true
        setRegistrationSuccess(true);
      })
      .catch((error) => {
        console.error('Error registering user:', error);
      });
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <div>
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
      <div>
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
      <div>
        <label htmlFor="role">Role:</label>
        <select 
          id="role" 
          name="role" 
          value={role} 
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Select a role</option>
          <option value="student">Student</option>
          <option value="tutor">Tutor</option>
        </select>
      </div>
      {role === 'student' && (
        <div>
          <label htmlFor="educationLevel">Education Level:</label>
          <input 
            type="text" 
            id="educationLevel" 
            name="educationLevel" 
            placeholder="Enter your education level" 
            value={educationLevel} 
            onChange={(e) => setEducationLevel(e.target.value)} 
          />
        </div>
      )}
      {role === 'tutor' && (
        <div>
          <label htmlFor="subject">Subject of Interest:</label>
          <input 
            type="text" 
            id="subject" 
            name="subject" 
            placeholder="Enter subject you're interested to teach" 
            value={subject} 
            onChange={(e) => setSubject(e.target.value)} 
          />
        </div>
      )}
      {registrationSuccess ? (
        <div>
          <p>Registration successful! Proceed to <Link to="/">Login</Link>.</p>
        </div>
      ) : (
        <div>
          <button onClick={handleRegister}>Register</button>
        </div>
      )}
    </div>
  );
};

export default Register;
