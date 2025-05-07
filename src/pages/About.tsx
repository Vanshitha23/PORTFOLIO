// src/pages/About.tsx
import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa'; // Import icons from react-icons
import myImage from '../assets/code.jpg';
import './About.css';

// Function to open the resume (or you can show it via a modal)
const openResume = () => {
  window.open('/pdf/resume.pdf', '_blank');
};


const About = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <div className="about-container">
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          Full Stack Developer with hands-on experience in modern web technologies including JavaScript, React, PHP, Laravel, and C++. Currently pursuing a Bachelor's degree at Lovely Professional University, with a strong focus on building scalable, user-centric web applications and software solutions.
          <br />
          <br />
          Completed internships and academic projects that demonstrate proficiency in both front-end and back-end development. Notable works include a Sales Management System using Laravel, a Student Grade Management System in C++, and dynamic websites for NGOs and university systems. Experience also includes freelancing in Outlier AI, contributing to real-world web development tasks and project collaborations.
          <br />
          <br />
          Strong foundation in data structures, object-oriented programming, and database management. Active involvement in tech clubs and hackathons, with additional interests in painting, chess, and community outreach initiatives.
        </p>
        
        <div className="social-links">
          {/* Social Media Icons */}
          <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} className="social-icon" />
          </a>
          <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaGithub size={30} className="social-icon" />
          </a>
          <a href="https://www.instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} className="social-icon" />
          </a>
        </div>

        <div className="resume-button">
          <button onClick={openResume}>View Resume</button>
        </div>
      </div>

      <div className="about-image">
        <img src={myImage} alt="My portrait" />
      </div>
    </div>
  );
};

export default About;
