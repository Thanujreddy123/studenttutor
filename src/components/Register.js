import React, { useState } from 'react';

import './Register.css'; // Import CSS file
import { Database } from 'firebase/database';
import { getDatabase, ref, push } from "firebase/database";
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { database } from './FireBaseConfig';
const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [educationLevel, setEducationLevel] = useState('');
  const [subject, setSubject] = useState('');
console.log(database);
const handleRegister = () => {
  console.log('Registration details:', { email, password, role, educationLevel, subject });

  const userData = {
    email,
    role,
    educationLevel,
    subject
  };

  // Get a reference to the 'users' node in the database
  const dbRef = ref(database, 'users');

  // Push the user data to the 'users' node
  push(dbRef, userData)
    .then(() => {
      console.log('User registered successfully');
      // You can redirect the user or perform other actions here
    })
    .catch((error) => {
      console.error('Error saving user data:', error);
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
        <select id="role" name="role" value={role} onChange={(e) => setRole(e.target.value)}>
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
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
