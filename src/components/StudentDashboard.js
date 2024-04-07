import React, { useState, useEffect } from 'react';
import './StudentDashboard.css';
import { getDatabase, ref, get } from "firebase/database";

const StudentDashboard = ({ studentEmail }) => {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    const fetchTutors = async () => {
      try {
        const dbRef = ref(getDatabase(), 'users');
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
          const tutorsData = Object.values(snapshot.val()).filter(user => user.role === 'tutor');
          setTutors(tutorsData);
        }
      } catch (error) {
        console.error('Error fetching tutors:', error);
      }
    };

    fetchTutors();
  }, []);

  const sendMessageToTutor = (tutorEmail) => {
    window.location.href = `mailto:${tutorEmail}`;
  };

  const startVideoCallWithTutor = (tutorId) => {
    window.location.href = `https://video-call-service.com/start-call?tutorId=${tutorId}`;
  };

  const joinMeeting = (tutorEmail) => {
    window.location.href = `http://localhost:3000/room/${tutorEmail}`;
  };
  
  return (
    <div className="student-dashboard-container">
      <h2 className="student-dashboard-title">Student Dashboard</h2>
      <p>Student Email: {studentEmail}</p>
      <ul className="tutor-list">
        <h4>Tutors list </h4>
        {tutors.map((tutor) => (
          <li key={tutor.id} className="tutor-item">
            <div className="tutor-info">Name: {tutor.name}</div>
            <div className="tutor-info">Email: {tutor.email}</div>
            <div className="tutor-info">Subject: {tutor.subject}</div>
            <button className="send-message-btn" onClick={() => sendMessageToTutor(tutor.email)}>Send Message</button>
            <button className="join-meeting-btn" onClick={() => joinMeeting(tutor.email)}>Join Meeting</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentDashboard;
