import React, { useState, useEffect } from 'react';
import './TutorialDashboard.css'; // Import CSS file
import { getDatabase, ref, get } from "firebase/database";
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Dashboard = ({ email, role }) => {
  const [tutors, setTutors] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    // Function to fetch tutors from the database
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

    // Call the fetchTutors function when the component mounts
    fetchTutors();
  }, []);

  const sendMessageToTutor = (tutorEmail) => {
    // Open default email client with tutor's email address
    window.location.href = `mailto:${tutorEmail}`;
  };

  const startVideoCallWithTutor = (roomid) => {
    // Navigate to the room with the tutor's room ID
    navigate(`/room/${roomid}`);
  };

  const joinMeeting = (meetingId) => {
    // Redirect to the meeting URL with the meeting ID
    window.location.href = `https://video-call-service.com/join-meeting?meetingId=${meetingId}`;
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">{role === 'student' ? 'Student Dashboard' : 'Tutor Dashboard'}</h2>
      {role === 'student' && <p>Student Email: {email}</p>}
      <ul className="tutor-list">
        <h4>Tutors list </h4>
        {tutors.map((tutor) => (
          <li key={tutor.id} className="tutor-item">
            <div className="tutor-info">Name: {tutor.name}</div>
            <div className="tutor-info">Email: {tutor.email}</div>
            <div className="tutor-info">Subject: {tutor.subject}</div>
            <button className="send-message-btn" onClick={() => sendMessageToTutor(tutor.email)}>Send Message</button>
            <button className="start-video-call-btn" onClick={() => startVideoCallWithTutor(tutor.email)}>Start Video Call</button> {/* Pass tutor's roomid to startVideoCallWithTutor */}
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
