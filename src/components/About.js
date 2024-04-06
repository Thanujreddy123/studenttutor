import React from 'react';
import './About.css'; // Import CSS file

const About = () => {
  return (
    <div className="about-container">
      <h2>About</h2>
      <p>This app is a student-tutor app where students can learn from tutors by making video calls and screen sharing.</p>
      <div className="feature-list">
        <div className="feature">
          <span className="feature-icon">📞</span>
          <p className="feature-text">Video Calls</p>
        </div>
        <div className="feature">
          <span className="feature-icon">🖥️</span>
          <p className="feature-text">Screen Sharing</p>
        </div>
      </div>
    </div>
  );
};

export default About;
