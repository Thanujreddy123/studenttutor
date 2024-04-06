// components/StudentDashboard.js
import React, { useState } from 'react';
import './StudentDashboard.css'; // Import CSS file

const StudentDashboard = () => {
  const [tutors] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', subject: 'Mathematics' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', subject: 'Physics' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', subject: 'English' },
    // Add more tutor objects as needed
  ]);

  const sendMessageToTutor = (tutorEmail) => {
    // Open default email client with tutor's email address
    window.location.href = `mailto:${tutorEmail}`;
  };

  const startVideoCallWithTutor = (tutorId) => {
    // Redirect to video calling service URL with tutor's ID
    // Example URL: https://video-call-service.com/start-call?tutorId=123
    window.location.href = `https://video-call-service.com/start-call?tutorId=${tutorId}`;
  };

  return (
    <div className="student-dashboard-container">
      <h2 className="student-dashboard-title">Student Dashboard</h2>
      <ul className="tutor-list">
        {tutors.map((tutor) => (
          <li key={tutor.id} className="tutor-item">
            <div className="tutor-info">Name: {tutor.name}</div>
            <div className="tutor-info">Email: {tutor.email}</div>
            <div className="tutor-info">Subject: {tutor.subject}</div>
            <button className="send-message-btn" onClick={() => sendMessageToTutor(tutor.email)}>Send Message</button>
            <button className="start-video-call-btn" onClick={() => startVideoCallWithTutor(tutor.id)}>Start Video Call</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;
